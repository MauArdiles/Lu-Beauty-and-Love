import PatagoniaSlide from "./PatagoniaSlide";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

function PatagoniaLayer() {
  return (
    <Container fluid style={{ fontFamily: "DeVinne Txt BT-Regular" }}>
      <h3
        id="LineaPatagonia"
        style={{
          textAlign: "center",
          marginTop: "1em",
          marginBottom: "1em",
          color: "#DC1926",
        }}
      >
        Línea Facial Patagonia
      </h3>
      <Row
        id="PatagoniaLayer"
        style={{
          width: "100%",
          justifyContent: "center",
          marginTop: "1em",
        }}
      >
        <Col xs={12} md={6} lg={4} style={{ marginTop: "1em" }}>
          <Image
            fluid
            src="https://onedrive.live.com/embed?resid=7157A54F8B72CB41%212711&authkey=%21AMx7G96U9Il5FE0&width=536&height=616"
            alt="PortadaPatagonia"
          />
        </Col>
        <Col xs={12} md={6} lg={8} style={{ marginTop: "1em" }}>
          <PatagoniaSlide />
        </Col>
      </Row>
    </Container>
  );
}

export default PatagoniaLayer;
