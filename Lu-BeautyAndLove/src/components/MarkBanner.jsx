import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

function MarkBanner() {
  return (
    <Container
      fluid
      style={{
        backgroundColor: "#DC1926",
        height: "3.5em",
        color: "#ffffff",
        fontaFamily: "DeVinne Txt BT-Regular, Helvetica",
        fontSize: "14px",
        fontWeight: 200,
        textAlign: "center",
      }}
    >
      <Card
        style={{
          width: "100%",
          backgroundColor: "#DC1926",
          height: "3.5em",
          color: "#ffffff",
          borderColor: "#DC1926",
        }}
      >
        <Card.Subtitle style={{ padding: "0.8em" }}>
          Aprovecha nuestros descuentos pagando con Efectivo, Débito y/o
          Transferencia.
        </Card.Subtitle>
      </Card>
    </Container>
  );
}

export default MarkBanner;
