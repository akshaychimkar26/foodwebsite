const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

const url =
  "mongodb+srv://akshaychimkar26:pQQYLtKHANf4PcSD@handson1.3oaogxb.mongodb.net/Food?retryWrites=true&w=majority";

const connect = async () => {
  try {
    const client = await mongoose.connect(url);
    console.log("Connected to atlas");
  } catch (err) {
    console.log(err);
  }
};

module.exports = { connect };