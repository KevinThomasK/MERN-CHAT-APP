const mongoose = require("mongoose");

const uri =
  "mongodb+srv://kevinthomas0420:syGP6PmnyIE5hTQw@cluster0.cm8ovek.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(uri, {});
    console.log(`MongoDB connected: ${conn.connection.host} `.cyan.underline);
  } catch (error) {
    console.log(`error is ${error.message}`.red.bold);
    process.exit();
  }
};

module.exports = connectDB;
