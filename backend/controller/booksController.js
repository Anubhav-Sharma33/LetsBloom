import Book from '../models/Books.js';

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

const getDetails = async (req,res) =>{
  try{
    const id = req.params.id;
    const response = await Book.findById(id);
    if (!response) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json(response);
  }catch(err){
    console.log(err.message);
    res.status(400).json({ message: 'Error Occured While finding out particular book' });
  }
}

const addNewBook = async (req, res) => {
  try {
    const newBook = new Book(
      {
        title:req.body.title,
        author:req.body.author,
        image:req.body.image,
        description:req.body.description,
        genre:req.body.genre,
        publishedYear:req.body.publishedYear,
      }
      );
    await newBook.save();
    res.status(201).json(newBook);
  } catch (err) {
    res.status(400).json({ message: 'Invalid Data' });
  }
};

const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedBook = await Book.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json(updatedBook);
  } catch (err) {
    res.status(400).json({ message: 'Invalid Data' });
  }
};

export const booksController =  { getAllBooks, addNewBook, updateBook,getDetails };
