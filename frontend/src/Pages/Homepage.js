import React from 'react'
import Booklist from '../Components/Booklist'
import { useLoaderData,json } from 'react-router-dom'

const Homepage = () => {
  const books = useLoaderData();
  return (
   <Booklist Books = {books}/>
  )
}

export async function loaderData() {
  try{
    const response = await fetch('http://localhost:4000/api/books');
    const resData = await response.json();
    return resData;
  }catch(err){
    throw json({message:"Cannot found! SomeThing Went wrong"},{status:404});
  }
}

export default Homepage