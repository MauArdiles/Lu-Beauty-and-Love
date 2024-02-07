import DupesSlide from "./DupesSlide";
import HomenajeSlide from "./HomenajeSlide";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function BaguesLayer() {
  return (
    <Container fluid>
      <h3
        id="LineaBagues"
        style={{
          fontFamily: "DeVinne Txt BT",
          fontSize: "32px",
          textAlign: "center",
          marginTop: "1em",
          marginBottom: "1em",
          color: "#DC1926",
        }}
      >
        Baguès
      </h3>
      <Row
        xs={1}
        md={1}
        lg={3}
        style={{
          justifyContent: "center",
          gap: "0.5em",
        }}
      >
        <Col>
          <DupesSlide />
        </Col>
        <Col>
          <HomenajeSlide />
        </Col>
      </Row>
    </Container>
  );
}

export default BaguesLayer;
