import { Router } from "express";
import * as StoryController from "../controller/StoryController.js";
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
        "SI" +
        Date.now() +
        "." +
        file.mimetype.split("/")[1]
    );
  },
});

const UPLOAD = multer({ storage: STORAGE });
router.post("/", UPLOAD.single("image"), StoryController.addStory); // register Story route
router.get("/", StoryController.getAllStories); // get All Storys route
router.get("/:id", StoryController.getStory); // get Story route
router.put("/:id", StoryController.update); // update Story route
router.delete("/:id", StoryController.deleteStory); // delete Story route

export default router;
