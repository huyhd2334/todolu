import express from "express";
import {
  createTask,
  deleteTask,
  getAllTasks,
  updateTask,
} from "../controllers/tasksControllers.js";
import { recvUserAccount, newUserAccount } from "../controllers/logicLOG.js";

const router = express.Router();

router.get("/", getAllTasks);

router.post("/", createTask);

router.put("/:id", updateTask);

router.delete("/:id", deleteTask);

router.post("/signup", newUserAccount)

router.post("/login", recvUserAccount)
export default router;
