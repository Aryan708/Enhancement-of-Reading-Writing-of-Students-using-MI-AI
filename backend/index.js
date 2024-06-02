import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import StudentsRoutes from "./routes/StudentsRoutes.js";
import NormalQuestionsRoutes from "./routes/NormalQuestionsRoutes.js";
import AssignmentQuestionsRoutes from "./routes/AssignmentQuestionsRoutes.js";
import storyRoutes from './routes/Story.js';
import TeachersRoutes from "./routes/TeachersRoutes.js"

// Creating the app
const app = express();

//Middleware for the app
app.use(express.json());
app.use(cors());
dotenv.config();

app.use(express.static("QuestionsImages")); //this is used for viewing purpose

// All Routes
app.use("/api/students", StudentsRoutes);
app.use("/api/NormalQuestions", NormalQuestionsRoutes);
app.use("/api/AssignmentQuestions", AssignmentQuestionsRoutes);
app.use("/api/story", storyRoutes);
app.use("/api/teachers", TeachersRoutes);

//Connecting to MongoDB (DATABASE_URL is defined in dotenv)
mongoose.set("strictQuery", true);
mongoose.connect(process.env.DATABASE_URL, (err) => {
  if (err) {
    console.log("Error connecting to MongoDB");
  } else {
    console.log("Connected to MongoDB");
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  }
});
