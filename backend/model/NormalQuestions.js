import mongoose from "mongoose";

const NormalQuestionsSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  answers: {
    type: Array,
    required: false,
  },
  correct: {
    type: String,
    required: false,
  },
  status: {
    type: String,
    required: false,
  },
  questionType: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("NormalQuestions", NormalQuestionsSchema);
