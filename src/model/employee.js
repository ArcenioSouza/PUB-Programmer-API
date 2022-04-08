import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
   id: {
      type: String
   },
   name:{
      type: String,
      required: true
   },
   job: {
      type: String,
      required: true
   },
   wage: {
      type: Number,
      required: true
   },
   cpf: {
      type: Number,
      required: true
   },
   image: {
      type: String,
   }
}, 
{
   versionKey: true
})

const employee = mongoose.model("employee", employeeSchema);

export default employee;