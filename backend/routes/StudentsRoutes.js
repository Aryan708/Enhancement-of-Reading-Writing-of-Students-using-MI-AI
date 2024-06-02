import { Router } from "express";
import * as StudentsController from "../controller/StudentsController.js";

const router = Router(); // creating the router from express

router.post("/normal/:id", StudentsController.studentsNormalDailyPoints);
router.post(
  "/assignments/:id",
  StudentsController.studentAssignmentsDailyPoints
);
router.get("/leaderBoard", StudentsController.getLeaderBoard)

router.post("/", StudentsController.addStudents); // register Student route
router.get("/", StudentsController.getAllStudents); // get All Students route
router.get("/:id", StudentsController.getStudent); // get Student route
router.put("/:id", StudentsController.updateStudent); // update Student route
router.delete("/:id", StudentsController.deleteStudent); // delete Student route

router.post("/login", StudentsController.login); // Login Student route
router.post("/change", StudentsController.changePassword);
export default router;
