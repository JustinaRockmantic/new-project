import { Card, Button } from "react-bootstrap";

export const BlogItem = () => {
  const handleOnClick = () => alert("you clicked!");

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button onClick={handleOnClick} variant="primary">
          Go somewhere
        </Button>
      </Card.Body>
    </Card>
  );
};
