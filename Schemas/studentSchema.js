import mongoose from "mongoose";
import validator from "validator";

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "pleae enter your name"],
  },

  personalNumber: {
    type: Number,
    required: [true, "pleae enter your personal number"],
  },

  parentsPhoneNumber: {
    type: Number,
    required: [true, "pleae enter your parent's phone number"],
  },

  dateOfBirth: {
    required: [true, "pleae enter your date of birth"],
    type: Date,
  },

  gender: {
    type: String,
    enum: ["male", "female", "other"],
    required: [true, "pleae enter your gender"],
  },

  address: {
    street: {
      type: String,
      required: [true, "pleae enter your street address"],
    },

    city: {
      type: String,
      required: [true, "pleae enter your city"],
    },

    state: {
      type: String,
      required: [true, "pleae enter your state"],
    },

    zip: {
      type: String,
      required: [true, "pleae enter your zip"],
    },
  },

  email: {
    type: String,
    required: [true, "pleae enter your email"],
    unique: true,
    validate: [validator.isEmail, "please enter a valid email"],
  },

  password: {
    type: String,
    required: [true, "pleae enter your password"],
    minLength: [8, "password should be at least 8 characters"],
    select: false,
  },

  courseEnrolled: {
    type: String,
    required: true,
    enum: ["front-end", "back-end", "MERN-Full stack"],
  },

  profilePic: {
    type: String,
    // required: true,
  },

  educationDetails: {
    institute: {
      type: String,
      required: [true, "pleae enter the name of your institute"],
    },

    highestQualification: {
      type: String,
      required: [true, "pleae enter your highest education"],
    },

    yearOfCompletion: {
      type: Number,
      required: [true, "pleae enter your year of completion"],
    },
  },
  role: {
    type: String,
    enum: ["teacher", "student"],
    default: "student",
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },

  resetPasswords: {
    resetPasswordToken: String,
    resetPasswordExpired: Date,
  },
});

const Student = mongoose.model("Student", studentSchema);
export default Student;
