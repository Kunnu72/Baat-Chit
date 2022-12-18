const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const colors = require("colors");
const userRoutes = require("./routes/userRoutes");
const { chats } = require("./data/data");

//  https://api.cloudinary.com/v1_1/dmqe8ncyr/image/upload

dotenv.config();
connectDB();
const app = express();

app.use(express.json()); // to accept json data from the frontend

app.get("/", (req, res) => {
     res.send("Api is running successfully.");
 });
 
app.use("/api/user", userRoutes);
// app.use("/api/chat", chatRoutes);
// app.use("/api/message", messageRoutes);
//const PORT = process.env.port || 5000;

//app.listen(console.log(`Server started on port ${PORT}`.yellow.bold));
app.listen(5000, console.log(`Server started on port 5000`.yellow.bold));