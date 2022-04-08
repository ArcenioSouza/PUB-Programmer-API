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
})

const employees = mongoose.model("employees", employeeSchema);

export default employees;