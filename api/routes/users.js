import express from "express";
import {
  addUser,
  deleteUser,
  getUsers,
  updateUser,
} from "../controllers/user.js";

const router = express.Router(); // indicando a rota

router.get("/", getUsers); //chamo na controllers no arquivo user.js

router.post("/", addUser);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

export default router;
