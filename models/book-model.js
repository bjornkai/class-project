const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

// constructor to create books 

const bookSchema = new Schema({
  title: String,
  description: String,
  author: { type: Schema.Types.ObjectId, ref: "Author" },
  rating: Number,
  image_url: String
},
{
  timestamps: true
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
