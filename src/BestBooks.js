import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import BookFormModal from './BookFormModal';
import { Button } from 'react-bootstrap';
import BookEditModal from './BookEditModal';
import useAuth0 from '@auth0/auth0-react';


function BestBooks() {
  const [bookData, setBookData] = useState([]);
  const [showModal, setShowModal] = useState(false)
  const [selectedBook, setSelectedBook] = useState(undefined)
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };



  let bookHTML = bookData.map(function (element) {
    return (
      <Carousel.Item>
        <img
          className='w-100'
          src="https://placehold.co/600x400/000000/FFFFFF.png"
          alt="First slide"
          onClick={() => {setSelectedBook(element)}}
        />
        <Carousel.Caption>{element.title}</Carousel.Caption>
      </ Carousel.Item>

    );
  })

  useEffect(() => {
    let bookResponse = axios.get(`https://can-of-books-api-ib2y.onrender.com/books`);
    bookResponse.then(function (res) {
      console.log(res.data);
      setBookData(res.data);
    })
  }, [])

  /* TODO: Make a GET request to your API to fetch all the books from the database  */

  return (
    <>
      <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
      {bookData.length > 0 ?
        <Carousel
          className='w-50'
          activeIndex={index} onSelect={handleSelect}
        >
          {bookHTML}
        </Carousel>
        :
        <h3>Your Book Collection is Empty</h3>
      }
      <Button onClick={() => { setShowModal(true) }}>Add Book</Button>
      <BookFormModal showModal={showModal} setShowModal={setShowModal} />
      {selectedBook ? <BookEditModal selectedBook={selectedBook} setSelectedBook={setSelectedBook} /> : <></>}
    </>
  )
}
export default BestBooks;