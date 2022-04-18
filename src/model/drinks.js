import mongoose from "mongoose";

const drinksSchema = new mongoose.Schema({
  id: { type: String },
  title: { type: String, require: true },
  description: { type: String, require: true },
  price: { type: String, require: true },
  storage: { type: Number, require: true },
});

const drink = mongoose.model("drink", drinksSchema);

export default drink;
