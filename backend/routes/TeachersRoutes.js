import { Router } from "express";
import * as TeachersController from "../controller/TeachersController.js";

const router = Router(); // creating the router from express

router.post("/", TeachersController.addTeachers); // register Teacher route
router.get("/", TeachersController.getAllTeachers); // get All Teachers route
router.get("/:id", TeachersController.getTeacher); // get Teacher route
router.put("/:id", TeachersController.updateTeacher); // update Teacher route
router.delete("/:id", TeachersController.deleteTeacher); // delete Teacher route

router.post("/login", TeachersController.login); // Login Teacher route
router.post("/change", TeachersController.changePassword);

export default router;
