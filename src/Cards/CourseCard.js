import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import Form from "./Form";

const CourseCard = ({ courseName, price, getData }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {courseName ? (
        <Card style={{ width: "18rem" }} className="col-4 card center">
          <Card.Img
            variant="top"
            src="https://www.austintec.com/wp-content/uploads/2019/04/types-of-engineers.jpg"
          />
          <Card.Body>
            <Card.Text>{courseName}</Card.Text>
            <Card.Text className="float-start" style={{ fontWeight: "bold" }}>
              Price : {price}
            </Card.Text>
            <Card.Text
              className="float-end"
              style={{
                background: "#ffebeb",
                padding: "5px",
              }}
            >
              PRE BOOK
            </Card.Text>
          </Card.Body>
        </Card>
      ) : (
        <>
          <Card style={{ width: "18rem" }} className="col-4 card">
            <Button className="add-button" onClick={handleShow}>
              +
            </Button>
          </Card>
          <Form show={show} handleClose={handleClose} getData={getData} />
        </>
      )}
    </>
  );
};

export default CourseCard;
