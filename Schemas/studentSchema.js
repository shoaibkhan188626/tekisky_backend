import mongoose from "mongoose";
import validator from "validator";

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your Name"],
  },

  personalNumber: {
    type: Number,
    required: [true, "Please enter your personal Number"],
  },

  parentsPhoneNumber: {
    type: Number,
    required: [true, "Please enter your Parent's Phone Number"],
  },

  dateOfBirth: {
    required: [true, "Please enter your date of Birth"],
    type: Date,
  },

  gender: {
    type: String,
    enum: ["Male", "Female", "Other"],
    required: [true, "Please choose your Gender"],
  },

  address: {
    street: {
      type: String,
      required: [true, "Please enter your street address"],
    },

    city: {
      type: String,
      required: [true, "Please enter your city"],
    },

    state: {
      type: String,
      required: [true, "Please enter your state"],
    },

    zip: {
      type: String,
      required: [true, "Please enter your zip"],
    },
  },

  email: {
    type: String,
    required: [true, "Please enter your email"],
    unique: true,
    validate: [validator.isEmail, "please enter a valid email"],
  },

  password: {
    type: String,
    required: [true, "Please enter your password"],
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
      required: [true, "Please enter the name of your institute"],
    },

    highestQualification: {
      type: String,
      required: [true, "Please enter your highest education"],
    },

    yearOfCompletion: {
      type: Number,
      required: [true, "Please enter your year of completion"],
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
