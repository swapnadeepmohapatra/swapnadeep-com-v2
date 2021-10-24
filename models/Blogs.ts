const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  pic: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  important: {
    type: Boolean,
    default: false,
  },
});

mongoose.models = {};

const BlogScheme = mongoose.model("Blogs", blogSchema);
export default BlogScheme;
