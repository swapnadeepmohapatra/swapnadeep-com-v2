const mongoose = require("mongoose");

const slideschema = new mongoose.Schema({
  slug: String,
  link: String,
  name: String,
});

mongoose.models = {};

const Slidescheme = mongoose.model("Slides", slideschema);
export default Slidescheme;
