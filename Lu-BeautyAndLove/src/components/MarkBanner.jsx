import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

function MarkBanner() {
  return (
    <Container fluid>
      <Card
        style={{
          backgroundColor: "#9b131c",
          height: "3em",
          color: "#ffffff",
          fontaFamily: "DeVinne Txt BT-Regular, Helvetica",
          fontSize: "18px",
          fontWeight: 300,
          textAlign: "center",
        }}
      >
        <Card.Body>
          Aprovecha nuestros descuentos pagando con Efectivo, débito y/o
          transferencia.
        </Card.Body>
      </Card>
    </Container>
  );
}

export default MarkBanner;
