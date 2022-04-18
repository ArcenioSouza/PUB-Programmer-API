import mongoose from "mongoose";

const supplierSchema = mongoose.Schema({
  id: { type: String },
  name: { type: String, require: true },
  cnpj: { type: String, require: true },
  number: { type: String, require: true },
  email: { type: String, require: true },
});

const supplier = mongoose.model("supplier", supplierSchema);

export default supplier;
