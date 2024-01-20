import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Footer() {
  return (
    <div style={{ width: "100%", marginTop: "2em" }}>
      <div style={{ justifyContent: "center" }}>
        <Row xs={1} md={4}>
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
      </div>
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
    </div>
  );
}

export default Footer;
