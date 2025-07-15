import { Router } from "express";
import {    updateTaskStatus,createTask,getTasks, getUserTasks } from "../controllers/taskController";

const router = Router();

router.get("/", getTasks);
router.post("/", createTask);
router.patch("/:taskId/status", updateTaskStatus);
router.get("/user/:userId",getUserTasks)
export default router;