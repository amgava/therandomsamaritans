const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const postSchema = new Schema({
  category: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: [String],required: true },
  contactNo: { type: String, required: true },
  price: { type:double, default: '0'},
  expiryDate: { type: Date, required: true },
  User: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
  });

const Post = mongoose.model("Post", postSchema);

module.exports = Post;