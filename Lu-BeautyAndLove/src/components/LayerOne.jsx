import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function LayerOne() {
  return (
    <div
      style={{
        width: "100%",
        height: "500px",
        display: "flex",
        flexFlow: "row",
      }}
    >
      <p>Familia GH</p>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text></Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default LayerOne;
