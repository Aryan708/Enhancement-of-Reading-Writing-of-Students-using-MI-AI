import { Router } from "express";
import * as NormalQuestionsController from "../controller/NormalQuestionController.js";
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
        "NQI" +
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
  NormalQuestionsController.addNormalQuestions
); // register NormalQuestions route
router.get("/", NormalQuestionsController.getAllQuestions); // get All NormalQuestionss route
router.get("/:id", NormalQuestionsController.getQuestion); // get NormalQuestions route
router.put("/:id", NormalQuestionsController.update); // update NormalQuestions route
router.delete("/:id", NormalQuestionsController.deleteQuestion); // delete NormalQuestions route

export default router;
