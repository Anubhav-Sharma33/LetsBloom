import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  image : { type:String },
  description : { type:String },
  genre:{type:String},
  publishedYear:{type:Number}
});

const Book = mongoose.model('Book', bookSchema);

export default Book;
