const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/connectDB");
const userRouter = require("./routes/User");
const cors = require("cors");

const PORT = process.env.PORT || 5000;

dotenv.config();
const app = express();

app.use(cors());

app.use("/", userRouter);

connectDB();

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}/`)
);
