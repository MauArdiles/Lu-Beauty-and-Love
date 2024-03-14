import ProductLayer from "./ProductLayer";
import SpaLayer from "./SpaLayer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function BeautySpaLayer() {
  return (
    <Container fluid>
      <h3
        id="SandraMarzzan"
        style={{
          fontFamily: "DeVinne Txt BT",
          fontSize: "32px",
          textAlign: "center",
          marginTop: "1.5em",
          marginBottom: "1em",
          color: "#DC1926",
        }}
      >
        Aromatizantes y Spa
      </h3>
      <Row
        xs={1}
        md={1}
        lg={2}
        style={{
          justifyContent: "start",
          //   gap: "0.5em",
        }}
      >
        <Col>
          <ProductLayer />
        </Col>
        <Col>
          <SpaLayer />
        </Col>
      </Row>
    </Container>
  );
}

export default BeautySpaLayer;
