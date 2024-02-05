import CromaSlide from "./CromaSlide";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

function CromaLayer() {
  return (
    <Container fluid style={{ fontFamily: "DeVinne Txt BT-Regular" }}>
      <h3
        id="Maquillaje"
        style={{
          textAlign: "center",
          marginTop: "1em",
          marginBottom: "1em",
          color: "#DC1926",
        }}
      >
        Línea Maquillaje
      </h3>
      <Row
        // xs={1}
        // lg={2}
        id="CromaLayer"
        style={{
          width: "100%",
          justifyContent: "center",
          marginTop: "1em",
        }}
      >
        <Col xs={12} md={6} lg={4} style={{ marginTop: "1em" }}>
          <Image
            fluid
            src="https://onedrive.live.com/embed?resid=7157A54F8B72CB41%212703&authkey=%21AOwOoOYBwAl6qIU&width=520&height=607"
            alt="PortadaMaquillaje"
          />
        </Col>
        <Col xs={12} md={6} lg={8} style={{ marginTop: "1em" }}>
          <CromaSlide />
        </Col>
      </Row>
    </Container>
  );
}

export default CromaLayer;
