import mongoose from "mongoose";

const StorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  story: {
    type: String,
    required: false,
  },
  status: {
    type: String,
    required: false,
    default: "Pending",
  },
  image: {
    type: String,
    required: false,
  },
  type: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Story", StorySchema);
