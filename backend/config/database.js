import mongoose from "mongoose";

const connectDB = async () => {
    try {
      await mongoose.connect('mongodb+srv://anubhvsharma33:anubhvsharma31@cluster0.ayvbbiv.mongodb.net/?retryWrites=true&w=majority');
      console.log('MongoDB Connected');
    } catch (err) {
      console.error('MongoDB Connection Error:', err.message);
    }
  };
  
  export default connectDB;