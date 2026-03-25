import { Router, type IRouter } from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import { db } from "@workspace/db";
import { profileTable } from "@workspace/db";
import { eq } from "drizzle-orm";

const router: IRouter = Router();

const uploadsDir = path.join(process.cwd(), "uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (_req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `profile-${Date.now()}${ext}`);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("Only image files are allowed"));
    }
  },
});

router.get("/profile-image", async (req, res) => {
  try {
    const rows = await db.select().from(profileTable).limit(1);
    if (rows.length === 0 || !rows[0].imageUrl) {
      res.json({ imageUrl: null, hasCustomImage: false });
      return;
    }
    res.json({ imageUrl: rows[0].imageUrl, hasCustomImage: true });
  } catch (err) {
    req.log.error({ err }, "Failed to get profile image");
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/upload-profile", upload.single("profile"), async (req, res) => {
  try {
    if (!req.file) {
      res.status(400).json({ error: "No file uploaded" });
      return;
    }

    const imageUrl = `/api/uploads/${req.file.filename}`;

    const existing = await db.select().from(profileTable).limit(1);
    if (existing.length === 0) {
      await db.insert(profileTable).values({ imageUrl });
    } else {
      await db.update(profileTable).set({ imageUrl }).where(eq(profileTable.id, existing[0].id));
    }

    res.json({ imageUrl });
  } catch (err) {
    req.log.error({ err }, "Failed to upload profile image");
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
