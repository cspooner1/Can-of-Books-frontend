import React from 'react';
import axios from 'axios';
import {useState} from 'react';
import {Button} from 'react-bootstrap';

function BestBooks() {
  const [bookData, setBookData] = useState([]);

   let bookResponse = axios.get(`http://localhost:3001/books`);
   bookResponse.then(function(res){
    console.log(res.data);
    setBookData(res.data)
   })

  /* TODO: Make a GET request to your API to fetch all the books from the database  */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
          <p>Book Carousel coming soon</p>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
export default BestBooks;
