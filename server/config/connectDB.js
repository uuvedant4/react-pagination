const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose
    .connect(process.env.MONGO_CONNECTION_URI)
    .then(() => {
      console.log("Database connection successful");
    })
    .catch((error) =>
      console.log(`Couldn't connect to database: ${error.message}`)
    );
};

module.exports = connectDB;
