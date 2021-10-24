const mongoose = require("mongoose");

const TalkSchema = new mongoose.Schema({
  _id: String,
  name: String,
  slides: String,
  recording: String,
  desc: String,
  important: {
    type: Boolean,
    default: true,
  },
});

mongoose.models = {};

const TalkScheme = mongoose.model("Talks", TalkSchema);
export default TalkScheme;
