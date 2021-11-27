import mongoose from "mongoose";

// Defining Schema
const studentSchema = new mongoose.Schema({
  stuname:{type:String, required:true, trim:true},
  email:{type:String, required:true, trim:true},
})

// Model 
const StudentModel = mongoose.model("student", studentSchema)

export default StudentModel