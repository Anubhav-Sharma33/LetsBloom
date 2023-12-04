import express from 'express';
import connectDB from './config/database.js';
import booksRoutes from './routes/bookRoutes.js';
import bodyParser from 'body-parser';
import cors from 'cors';


const app = express();

connectDB();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/api/books', booksRoutes);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
