import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, Button} from 'react-bootstrap';



export default function UpdateUserModal(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  const [first_name, setFirstName] = useState(props.user.first_name);
  const [last_name, setLastName] = useState(props.user.last_name);
  const [user_name, setUserName] = useState(props.user.user_name);
  const [date_of_birth, setDOB] = useState(props.user.date_of_birth);
  
  const handleSubmit = () => {
      let userData = {
          "first_name": first_name,
          "last_name": last_name,
          "user_name": user_name,
          "date_of_birth": date_of_birth,
      }
      if ((userData.first_name.length===0)||(userData.user_name.length===0)){
          alert('Please fill in the required details');
          return;
      }
      props.editUser(props.user.id, userData);

  }

  
  return (
    <>
      <Button variant="success" className="nextButton" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                <label htmlFor="first_name">First Name:</label>
                <input
                    type="text"
                    className="form-control"
                    id="first_name"
                    required
                    value={first_name}
                    onChange={e => setFirstName(e.target.value)}
                    name="first_name"
                />
                </div>
                <div className="form-group">
                <label htmlFor="last_name">Last Name:</label>
                <input
                    type="text"
                    className="form-control"
                    id="last_name"
                    required
                    value={last_name}
                    onChange={e => setLastName(e.target.value)}
                    name="last_name"
                />
                </div>
                <div className="form-group">
                <label htmlFor="user_name">User Name:</label>
                <input
                    type="text"
                    className="form-control"
                    id="user_name"
                    required
                    value={user_name}
                    onChange={e => setUserName(e.target.value)}
                    name="user_name"
                />
                </div>
                <div className="form-group">
                <label htmlFor="date_of_birth">D.O.B</label>
                <input
                    type="date"
                    className="form-control"
                    id="date_of_birth"
                    required
                    value={date_of_birth}
                    onChange={e => setDOB(e.target.value)}
                    name="date_of_birth"
                />
                </div>
                </form>
            </div>
            
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button type="submit" value="Submit" variant="success" onClick={() => {
              handleClose();
              handleSubmit();
          }}>
            Update User
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}