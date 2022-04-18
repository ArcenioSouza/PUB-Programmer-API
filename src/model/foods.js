import mongoose from "mongoose";

const foodsSchema = new mongoose.Schema({
  id: { type: String },
  title: { type: String, require: true },
  description: { type: String, require: true },
  price: { type: String, require: true },
});

const food = mongoose.model("food", foodsSchema);

export default food;
