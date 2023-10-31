import { Router } from "express";
import yourstory from "../models/yourstory.js";

const router = Router();
// Create your story route
router.post("/", async (request, response) => {
  try {
    const newstory = newstory(request.body);

    const data = await newstory.save();

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);
  }
});
router.get("/", async (request, response) => {
  try {
    // Store the query params into a JavaScript Object
    const query = request.query; // Defaults to an empty object {}

    const data = await yourstory.find(query);

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});
export default router;
