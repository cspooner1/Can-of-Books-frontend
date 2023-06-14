import {Modal, Button, Form,} from 'react-bootstrap';
import { useState } from 'react';
import axios from "axios";
import { useAuth0 } from '@auth0/auth0-react';

function BookFormModal(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("");
    const handleClose = () => props.setShowModal(false);
    const { getAccessTokenSilently } = useAuth0();

    async function onSubmit(){
        let book = {
            title: title,
            description: description,
            status: status
        }
        let token = await getAccessTokenSilently();
        let header = {
            Authorization: `Bearer ${token}`
          }
        console.log(header);
        let response = await axios.post("https://can-of-books-api-ib2y.onrender.com/books", book, {headers: header})
            .catch((e) => { console.log("Caught an error trying to create a book") });
            handleClose();
    }

    return (
        <Modal show={props.showModal} onHide={handleClose}>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>Make A Title</Form.Label>
                        <Form.Control onChange={(event) => { setTitle(event.target.value)}} placeholder='Title' id='title'></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Make a Description</Form.Label>
                        <Form.Control onChange={(event) => { setDescription(event.target.value)}} placeholder='Description' id='description'></Form.Control>
                    </Form.Group><Form.Group>
                        <Form.Label>Make a Status</Form.Label>
                        <Form.Control onChange={(event) => { setStatus(event.target.value)}} placeholder='Status' id='status'></Form.Control>
                    </Form.Group>
                   <Button onClick={onSubmit}>Save</Button>
                </Form>
            </Modal.Body>
        </Modal>
    )
}
export default BookFormModal;

