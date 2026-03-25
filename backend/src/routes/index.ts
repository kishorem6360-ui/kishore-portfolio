import { Router, type IRouter } from "express";
import path from "path";
import express from "express";
import healthRouter from "./health";
import profileRouter from "./profile";
import contactRouter from "./contact";

const router: IRouter = Router();

const uploadsDir = path.join(process.cwd(), "uploads");
router.use("/uploads", express.static(uploadsDir));

router.use(healthRouter);
router.use(profileRouter);
router.use(contactRouter);

export default router;
