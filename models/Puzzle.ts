const mongoose = require("mongoose");

const Puzzleschema = new mongoose.Schema({
  won: Boolean,
  time: Number,
  date: String,
});

mongoose.models = {};

const Puzzlescheme = mongoose.model("Puzzles", Puzzleschema);
export default Puzzlescheme;
