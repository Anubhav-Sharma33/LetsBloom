import express from 'express';
import {booksController} from '../controller/booksController.js';
const {getAllBooks,addNewBook,updateBook,getDetails} = booksController;

const router = express.Router();

router.get('/', getAllBooks);
router.get('/:id',getDetails)
router.post('/', addNewBook);
router.put('/:id', updateBook);

export default router;
