import React from 'react'
import CardBox from './Card'
import '../style/BookList.css';

const Booklist = ({Books}) => {
  return (
    <div className="booklist-container">
        {Books.map((cur)=>{
        return(
            <CardBox 
            key = {cur._id}
            id = {cur._id}
            title ={cur.title} 
            description={cur.description} 
            image={cur.image}
            author = {cur.author}
            genre={cur.genre} />
        )
    })}
    </div>
  )
}

export default Booklist