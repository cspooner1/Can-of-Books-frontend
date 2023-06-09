import { Modal, Button, Form, } from 'react-bootstrap';
import { useState } from 'react';
import axios from "axios"
function BookEditModal(props) {
    const [title, setTitle] = useState(props.selectedBook.title);
    const [description, setDescription] = useState(props.selectedBook.description);
    const [status, setStatus] = useState(props.selectedBook.status);
    const [showModal, setShowModal] = useState(true);
    const handleClose = () => props.setSelectedBook(undefined);

    async function onSubmit() {
        let book = {
            title: title,
            description: description,
            status: status
        }
        let response = await axios.put(`https://can-of-books-api-ib2y.onrender.com/books/${props.selectedBook._id}`, book)
            .catch((e) => { console.log("Caught an error trying to update a book") });
        handleClose();
    }

    async function onDelete(){
        let response = await axios.delete(`https://can-of-books-api-ib2y.onrender.com/books/${props.selectedBook._id}`)
            .catch((e) => { console.log("Caught an error trying to update a book") });
    handleClose();
    }
    return <Modal show={true} onHide={handleClose}>
        <Modal.Body>
            <Form>
                <Form.Group>
                    <Form.Label>Make A Title</Form.Label>
                    <Form.Control value={title} onChange={(event) => { setTitle(event.target.value) }} placeholder='Title' id='title'></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Make a Description</Form.Label>
                    <Form.Control value={description} onChange={(event) => { setDescription(event.target.value) }} placeholder='Description' id='description'></Form.Control>
                </Form.Group><Form.Group>
                    <Form.Label>Make a Status</Form.Label>
                    <Form.Control value={status} onChange={(event) => { setStatus(event.target.value) }} placeholder='Status' id='status'></Form.Control>
                </Form.Group>
                <Button onClick={onSubmit}>Save</Button>
                <Button variant='danger' onClick={onDelete}>Delete</Button>
            </Form>
        </Modal.Body>
    </Modal>
}

export default BookEditModal