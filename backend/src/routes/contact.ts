import { Router, type IRouter } from "express";
import { db } from "@workspace/db";
import { contactsTable, insertContactSchema } from "@workspace/db";
import { SubmitContactBody } from "@workspace/api-zod";

const router: IRouter = Router();

router.post("/contact", async (req, res) => {
  const parsed = SubmitContactBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid request body" });
    return;
  }

  const { name, email, message } = parsed.data;

  try {
    const validated = insertContactSchema.parse({ name, email, message });
    await db.insert(contactsTable).values(validated);
    req.log.info({ name, email }, "Contact message received");
    res.json({ success: true, message: "Message received! I'll get back to you soon." });
  } catch (err) {
    req.log.error({ err }, "Failed to save contact message");
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
