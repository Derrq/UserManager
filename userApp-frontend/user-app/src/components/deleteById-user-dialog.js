import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, Button} from 'react-bootstrap';



export default function DeleteByIdModal(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
  return (
    <>
      <Button variant="danger" className="nextButton" onClick={handleShow}>
        Delete
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Delete Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>You are about to delete this user from the database. This action is irreversible. Continue?</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            No
          </Button>
          <Button variant="primary" onClick={() => {
              handleClose();
              props.removeAllUsers();
          }}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}