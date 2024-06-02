import { Router } from "express";
import * as AssignmentQuestionsController from "../controller/AssignmentQuestionsController.js";

import multer from "multer";

const router = Router(); // creating the router from express
const STORAGE = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "QuestionsImages");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname +
        "-" +
        "AQI" +
        Date.now() +
        "." +
        file.mimetype.split("/")[1]
    );
  },
});

const UPLOAD = multer({ storage: STORAGE });

router.post(
  "/",
  UPLOAD.single("image"),
  AssignmentQuestionsController.addAssignmentQuestions
); // register AssignmentQuestions route
router.get("/", AssignmentQuestionsController.getAllQuestions); // get All AssignmentQuestions route
router.get("/:id", AssignmentQuestionsController.getQuestion); // get AssignmentQuestions route
router.put("/:id", AssignmentQuestionsController.update); // update AssignmentQuestions route
router.delete("/:id", AssignmentQuestionsController.deleteQuestion); // delete AssignmentQuestions route

export default router;
