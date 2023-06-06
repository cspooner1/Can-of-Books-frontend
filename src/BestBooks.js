import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
// import { Button } from 'react-bootstrap';

function BestBooks() {
  const [bookData, setBookData] = useState([]);

  let bookResponse = axios.get(`http://localhost:3001/books`);
  bookResponse.then(function (res) {
    console.log(res.data);
    setBookData(res.data);
  })
  let bookHTML = bookData.map(function (element) {
    return (
     <Carousel.Item><h2>{element.title}</h2></ Carousel.Item>
    );
  })

  /* TODO: Make a GET request to your API to fetch all the books from the database  */

  return (
    <>
      <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
      {bookData.length > 0 ?
        <Carousel>
          {bookHTML}
        </Carousel>
        :
        <h3>Your Book Collection is Empty</h3>
      }
    </>
  )
}
export default BestBooks;