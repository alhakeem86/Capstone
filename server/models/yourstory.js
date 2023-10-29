import mongoose from "mongoose";
const yourstorySchema = new mongoose.Schema({
  customer: []
});
const yourstory = mongoose.model("yourstory", yourstorySchema);

export default yourstory;
