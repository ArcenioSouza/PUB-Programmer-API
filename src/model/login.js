import mongoose from "mongoose";

const loginSchema = new mongoose.Schema({
  id: { type: String },
  email: { type: String },
  password: { type: String },
});

const logins = mongoose.model("logins", loginSchema);

export default logins;
