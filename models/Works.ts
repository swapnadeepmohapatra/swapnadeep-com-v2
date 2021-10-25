const mongoose = require("mongoose");

const workSchema = new mongoose.Schema({
  title: String,
  company: String,
  type: String,
  date: String,
  time: String,
  techStack: String,
  jobDesc: String,
});

mongoose.models = {};

const WorkScheme = mongoose.model("Works", workSchema);
export default WorkScheme;
