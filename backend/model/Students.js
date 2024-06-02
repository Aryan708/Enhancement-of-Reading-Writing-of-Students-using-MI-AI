import mongoose from "mongoose";

const studentsSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
    minLength: 10,
    maxLength: 10,
  },
  schoolName: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
  normalQTotal: {
    type: Array,
    default: [],
    required: false,
  },
  normalQuestions: [
    {
      date: Date,
      normal: String,
      status: { type: String, default: "Pending" },
    },
  ],
  assignmentsQTotal: {
    type: Array,
    default: [],
    required: false,
  },
  assignmentsQuestions: [
    {
      date: Date,
      assignments: String,
      status: { type: String, default: "Pending" },
    },
  ],
  essay: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Students", studentsSchema);
