const mongoose = require("mongoose");

const prizeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  honorIssuer: {
    type: String,
    required: true,
  },
  honorDate: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
  },
  honorDescription: {
    type: String,
    required: true,
  },
  important: {
    type: Boolean,
    required: true,
    default: false,
  },
});

mongoose.models = {};

const PrizeScheme = mongoose.model("Prizes", prizeSchema);
export default PrizeScheme;
