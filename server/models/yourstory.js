import mongoose from "mongoose";
const yourstorySchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  }
});
const yourstory = mongoose.model("yourstory", yourstorySchema);

export default yourstory;
