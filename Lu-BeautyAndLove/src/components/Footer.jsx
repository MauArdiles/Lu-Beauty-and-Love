import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import LogoLu from "../assets/Logo.png";

function Footer() {
  return (
    <Container
      fluid
      style={{
        marginTop: "3em",
        borderTop: "0.5px outset",
      }}
    >
      <Row
        xs={1}
        md={2}
        lg={4}
        style={{ justifyContent: "center", marginTop: "2em" }}
      >
        <Card>
          <Card.Img
            style={{ height: "22rem" }}
            variant="top"
            src="https://onedrive.live.com/embed?resid=7157A54F8B72CB41%212749&authkey=%21AFHeDsu9QNWfQqo&width=250&height=249"
          />
        </Card>
        <Card>
          <Card.Img
            style={{ height: "22rem" }}
            variant="top"
            src="https://onedrive.live.com/embed?resid=7157A54F8B72CB41%212750&authkey=%21AGBgymP7bVpr54g&width=220&height=250"
          />
        </Card>
        <Card>
          <Card.Img
            style={{ height: "22rem" }}
            variant="top"
            src="https://onedrive.live.com/embed?resid=7157A54F8B72CB41%212752&authkey=%21AJ0uGHiaruiSZB0&width=250&height=250"
          />
        </Card>
        <Card>
          <Card.Img
            style={{ height: "22rem" }}
            variant="top"
            src="https://onedrive.live.com/embed?resid=7157A54F8B72CB41%212751&authkey=%21ACh8nMOucUfaQ4c&width=250&height=249"
          />
        </Card>
      </Row>
      <Row
        xs={1}
        md={2}
        lg={3}
        style={{
          marginTop: "3em",
          marginLeft: "2em",
          justifyContent: "center",
        }}
      >
        <Col>
          <Image
            src={LogoLu}
            alt="LogoPrincipal"
            width="250px"
            height="auto"
            style={{ borderRadius: "100%" }}
          />
        </Col>
        <Col style={{ marginTop: "0.5em" }}>
          <Card border="ligth" style={{ width: "15em", textAlign: "center" }}>
            <Card.Body>
              <Card.Header>MEDIOS DE PAGO</Card.Header>
              <Card.Text>Efectivo</Card.Text>
              <Card.Text>Transferencia</Card.Text>
              <Card.Text>Tarjetas de Crédito</Card.Text>
              <Card.Text>Tarjetas de Débito</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col style={{ marginTop: "0.5em" }}>
          <Card border="ligth" style={{ width: "15em", textAlign: "center" }}>
            <Card.Body>
              <Card.Header>FORMAS DE ENVIO</Card.Header>
              <Card.Text>Correo Argentino</Card.Text>
              <Card.Text>Send-Box</Card.Text>
              <Card.Text>
                Para envíos al interior del país, consultar antes de solicitar
                los productos.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <p
          style={{
            fontFamily: "DeVinne Txt BT",
            fontSize: "16px",
            textAlign: "center",
            marginTop: "1em",
            marginBottom: "2em",
          }}
        >
          Desarrollado por © MA Servicios Informáticos para Lu Beauty and Love
        </p>
      </Row>
    </Container>
  );
}

export default Footer;

//Correo Argentino - Send-Box
