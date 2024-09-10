import React, { useEffect, useState } from 'react'
import BookCards from '../components/BookCards';

const OtherBooks = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch("https://book-projects-lje1.onrender.com/all-books").then(res => res.json()).then(data=>setBooks(data.slice(11,22)))},[])
  return (
    <div><BookCards books={books} headline="SOME MORE BOOKS"/></div>
  )
}

export default OtherBooks
