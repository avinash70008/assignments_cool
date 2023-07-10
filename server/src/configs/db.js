
const mongoose = require("mongoose");

const connect = async () => {
  try {
    return await mongoose.connect(
      "mongodb+srv://avinash121:avinash121@cluster0.xnsvhxj.mongodb.net/"
    );
  } catch (err) {
    console.log("error form connection :", err.message);
  }
};

module.exports = connect;
