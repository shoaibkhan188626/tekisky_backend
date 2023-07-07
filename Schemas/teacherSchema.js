import mongoose from "mongoose";
import validator from "validator";

const teacherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
  },

  phoneNumber: {
    type: Number,
    required: [true, "Please enter your phone number"],
  },

  email: {
    type: String,
    required: [true, "Please enter your email"],
    unique: true,
    validate: [validator.isEmail, "please enter a valid email address"],
  },

  gender: {
    type: String,
    enum: ["Male", "Female", "Others"],
    required: [true, "Please choose your gender"],
  },

  password: {
    type: String,
    required: [true, "Please enter your password"],
    minLenght: [8, "Password must be at least 8 characters"],
    select: false,
  },

  totalExperience: {
    type: Number,
    required: [true, "Please enter total experience you have"],
  },

  currentCompany: {
    type: String,
    required: [true, "Please enter the name of your company"],
  },

  currentRole: {
    type: String,
    required: [true, "Please enter your Current job Role (JD)"],
  },

  techInUse: {
    type: String,
    required: [true, "Please enter the Technology that your currently using"],
  },

  courseTeaching: {
    type: String,
    required: true,
    enum: ["HTML & CSS", "Javascript", "React", "Node.js & MongoDB"],
  },

  profilePic: {
    type: String,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Teacher = mongoose.model("Teacher", teacherSchema);
export default Teacher;
