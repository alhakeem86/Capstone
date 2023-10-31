import mongoose from "mongoose";
const yourstorySchema = new mongoose.Schema({
  story: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  }
});
const Yourstory = mongoose.model("Yourstory", yourstorySchema);

export default Yourstory;
