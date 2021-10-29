const mongoose = require("mongoose");

const projectschema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  codeLink: {
    type: String,
    required: true,
  },
  fullDesc: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: false,
  },
  techStack: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  important: {
    type: Boolean,
    required: true,
    default: false,
  },
  shortTechStack: {
    type: String,
  },
});

mongoose.models = {};

const Projectscheme = mongoose.model("Projects", projectschema);
export default Projectscheme;
