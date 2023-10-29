import { Router } from "express";
import yourstory from "../models/yourstory.js";

const router = Router();
// Create pizza route
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
