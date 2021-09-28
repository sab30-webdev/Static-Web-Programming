import { useState } from "react";
import { Modal, Form as F, Button } from "react-bootstrap";

const Form = ({ show, handleClose, getData }) => {
  const [state, setState] = useState({ courseName: "", price: "" });

  const onSubmit = () => {
    if (state.courseName !== "" && state.price !== "") {
      getData(state);
    }
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>Add Course Details</Modal.Header>
      <Modal.Body>
        <F>
          <F.Control
            type="text"
            placeholder="Enter Course Name"
            className="mt-2 mb-2"
            name="courseName"
            value={state.courseName}
            onChange={(e) => setState({ ...state, courseName: e.target.value })}
          />
          <F.Control
            type="text"
            placeholder="FREE/PAID"
            className="mt-2 mb-2"
            name="price"
            value={state.price}
            onChange={(e) => setState({ ...state, price: e.target.value })}
          />
        </F>
        <Modal.Footer>
          <Button onClick={onSubmit}>SUBMIT</Button>
        </Modal.Footer>
      </Modal.Body>
    </Modal>
  );
};

export default Form;
