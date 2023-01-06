import {useRef} from 'react';
import {Button, Form, Modal} from 'react-bootstrap';
import {useUser} from '../contexts/UserContext';
import React from 'react';
import {useNavigate} from 'react-router-dom';

export default function LogUser({ handleClose}){
    const nameRef = useRef()
    const {createUser} = useUser()
    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault();
        createUser({
            name: nameRef.current.value,
        })
        console.log(nameRef.current.value)
        navigate('/budgets')
    }
    return (
        <>

            <Modal show={true} onHide={handleClose}>
                <Form onSubmit={handleSubmit}>
                    <Modal.Header closeButton>
                        <Modal.Title>WHATS YOUR NAME?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control ref={nameRef} type="text" required />
                        </Form.Group>
                        <div className="d-flex justify-content-end">
                            <Button variant="primary" type="submit">
                                Add
                            </Button>
                        </div>
                    </Modal.Body>
                </Form>
            </Modal>

        </>
    );
};

// <Form onSubmit={handleSubmit}>
//     <Form.Group className="mb-3" controlId="name">
//         <Form.Label>Whats your Name?</Form.Label>
//         <Form.Control ref={nameRef} type="text" required />
//     </Form.Group>
// </Form>