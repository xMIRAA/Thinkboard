import dotenv from "dotenv";
import express from "express";
import notesroutes from "./routes/notesroutes.js";
import connectDB from "../config/db.js";

dotenv.config();


const app = express();

app.use("/api/notes", notesroutes);



await connectDB();

app.listen(5001, () => {
  console.log("Server is running on port 5001")
});

