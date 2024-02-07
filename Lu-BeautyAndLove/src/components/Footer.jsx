import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import LogoLu from "../assets/Logo.png";
import Button from "react-bootstrap/Button";

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
            style={{ height: "25rem", width: "auto" }}
            variant="top"
            src="https://onedrive.live.com/embed?resid=7157A54F8B72CB41%212749&authkey=%21AFHeDsu9QNWfQqo&width=250&height=249"
          />
        </Card>
        <Card>
          <Card.Img
            style={{ height: "25rem", width: "auto" }}
            variant="top"
            src="https://onedrive.live.com/embed?resid=7157A54F8B72CB41%212750&authkey=%21AGBgymP7bVpr54g&width=220&height=250"
          />
        </Card>
        <Card>
          <Card.Img
            style={{ height: "25rem", width: "auto" }}
            variant="top"
            src="https://onedrive.live.com/embed?resid=7157A54F8B72CB41%212752&authkey=%21AJ0uGHiaruiSZB0&width=250&height=250"
          />
        </Card>
        <Card>
          <Card.Img
            style={{ height: "25rem", width: "auto" }}
            variant="top"
            src="https://onedrive.live.com/embed?resid=7157A54F8B72CB41%212751&authkey=%21ACh8nMOucUfaQ4c&width=250&height=249"
          />
        </Card>
      </Row>
      <Row
        xs={1}
        md={2}
        lg={4}
        style={{
          marginTop: "3em",
          borderTop: "0.5px outset",
        }}
      >
        <Col style={{ marginTop: "0.5em" }}>
          <Image
            src={LogoLu}
            alt="LogoPrincipal"
            width="150px"
            height="auto"
            style={{ borderRadius: "100%", marginLeft: "5em" }}
          />
        </Col>
        <Col
          // xs={12} md={4}
          style={{ marginTop: "0.5em" }}
        >
          <Card
            border="ligth"
            style={{
              width: "15em",
              height: "15em",
              textAlign: "center",
              marginLeft: "3em",
            }}
          >
            <Card.Body>
              <Card.Header>MEDIOS DE PAGO</Card.Header>
              <Card.Text>Efectivo</Card.Text>
              <Card.Text>Transferencia</Card.Text>
              <Card.Text>Tarjetas de Crédito</Card.Text>
              <Card.Text>Tarjetas de Débito</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col
          // xs={12} md={4}
          style={{ marginTop: "0.5em" }}
        >
          <Card
            border="ligth"
            style={{
              width: "15em",
              height: "15em",
              textAlign: "center",
              marginLeft: "3em",
            }}
          >
            <Card.Body>
              <Card.Header>FORMAS DE ENVIO</Card.Header>
              <Card.Text>Correo Argentino</Card.Text>
              <Card.Text>Send-Box</Card.Text>
              <Card.Text>Envíos a todo el país.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col style={{ marginTop: "0.5em" }}>
          <Card
            border="ligth"
            style={{
              width: "15em",
              height: "15em",
              textAlign: "center",
              marginLeft: "3em",
            }}
          >
            <Card.Body>
              <Card.Header>SEGUI NUESTRAS REDES</Card.Header>

              <Button
                variant="link"
                href="https://www.facebook.com/profile.php?id=61553811362866&mibextid=9R9pXO"
                style={{ marginTop: "2em" }}
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 46 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.875 45.375C21.614 45.375 20.353 45.2694 19.1184 45.0647C18.9864 45.0449 18.8741 44.9723 18.7949 44.86C18.7289 44.7676 18.6959 44.6554 18.7091 44.5431V23.2579H16.669C16.2003 23.2579 15.8173 22.875 15.8173 22.4062V18.2205C15.8173 17.7518 16.2003 17.3688 16.669 17.3688H18.7091V13.8301C18.7091 10.7535 21.2113 8.24472 24.2945 8.24472H29.081C29.5497 8.24472 29.9327 8.62764 29.9327 9.09639V13.2755C29.9327 13.7443 29.5497 14.1272 29.081 14.1272H26.2487C25.8261 14.1272 25.4828 14.4705 25.4828 14.893V17.3622H29.0216C29.2592 17.3622 29.4903 17.4613 29.6488 17.6395C29.8072 17.8178 29.893 18.0489 29.8732 18.2865L29.5167 22.4723C29.4771 22.908 29.1074 23.2513 28.6717 23.2513H25.4894V36.6404C25.4894 36.9111 25.265 37.1356 24.9943 37.1356C24.7236 37.1356 24.4991 36.9111 24.4991 36.6404V22.7628C24.4991 22.4921 24.7236 22.2676 24.9943 22.2676H28.5462L28.8763 18.3658H24.9877C24.717 18.3658 24.4925 18.1413 24.4925 17.8706V14.9062C24.4925 13.9357 25.2782 13.1501 26.2487 13.1501H28.9423V9.24824H24.2945C21.7592 9.24824 19.6994 11.3081 19.6994 13.8433V17.8772C19.6994 18.1479 19.4749 18.3724 19.2042 18.3724H16.8077V22.2742H19.2042C19.4749 22.2742 19.6994 22.4987 19.6994 22.7694V44.1602C20.7425 44.3121 21.8121 44.3913 22.875 44.3913C34.739 44.3913 44.3847 34.739 44.3847 22.8816C44.3847 11.0242 34.739 1.36532 22.875 1.36532C11.011 1.36532 1.36532 11.011 1.36532 22.875C1.36532 31.3917 6.40273 39.1228 14.1932 42.5625C14.4441 42.6747 14.5563 42.9652 14.4441 43.2161C14.3319 43.467 14.0414 43.5792 13.7905 43.467C5.63688 39.8688 0.375 31.7879 0.375 22.875C0.375 10.4696 10.4696 0.375 22.875 0.375C35.2804 0.375 45.375 10.4696 45.375 22.875C45.375 35.2804 35.2804 45.375 22.875 45.375Z"
                    fill="#DC1926"
                  />
                </svg>
              </Button>
              <Button
                variant="link"
                href="https://www.instagram.com/lubeautyandlove?igsh=OXJ4bDJnNTk1czRy"
                style={{ marginTop: "2em" }}
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 45 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.5 45C10.0946 45 0 34.9054 0 22.5C0 10.0946 10.0946 0 22.5 0C28.6202 0 34.3508 2.41637 38.6224 6.80017C38.8138 6.99824 38.8072 7.30854 38.6158 7.5C38.4177 7.69146 38.1074 7.68486 37.9159 7.4934C33.8226 3.29445 28.3561 0.990317 22.5 0.990317C10.636 0.990317 0.990317 10.636 0.990317 22.5C0.990317 34.364 10.636 44.0097 22.5 44.0097C34.364 44.0097 44.0097 34.3574 44.0097 22.5C44.0097 18.7962 43.059 15.1518 41.25 11.9498H16.875C14.1549 11.9498 11.9498 14.1615 11.9498 16.875V28.125C11.9498 30.8451 14.1615 33.0502 16.875 33.0502H28.125C30.8451 33.0502 33.0502 30.8385 33.0502 28.125V16.875C33.0502 16.6043 33.2746 16.3798 33.5453 16.3798C33.816 16.3798 34.0405 16.6043 34.0405 16.875V28.125C34.0405 31.3864 31.3864 34.0405 28.125 34.0405H16.875C13.6136 34.0405 10.9595 31.3864 10.9595 28.125V16.875C10.9595 13.6136 13.6136 10.9595 16.875 10.9595H41.5207C41.6857 10.9595 41.8706 11.0453 41.963 11.2038C43.9503 14.6171 45 18.5255 45 22.5C45 34.9054 34.9054 45 22.5 45ZM22.5 18.3077C20.1893 18.3077 18.3077 20.1893 18.3077 22.5C18.3077 24.8107 20.1893 26.6923 22.5 26.6923C24.8107 26.6923 26.6923 24.8107 26.6923 22.5C26.6923 20.1893 24.8107 18.3077 22.5 18.3077ZM22.5 16.327C25.9067 16.327 28.673 19.0933 28.673 22.5C28.673 25.9067 25.9067 28.673 22.5 28.673C19.0933 28.673 16.327 25.9067 16.327 22.5C16.327 19.0933 19.0933 16.327 22.5 16.327ZM29.9142 13.5343C28.9833 13.5343 28.2306 14.287 28.2306 15.2179C28.2306 16.1488 28.9833 16.9014 29.9142 16.9014C30.8451 16.9014 31.5977 16.1488 31.5977 15.2179C31.5977 14.287 30.8451 13.5343 29.9142 13.5343Z"
                    fill="#DC1926"
                  />
                </svg>
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row style={{ marginTop: "1em", borderTop: "0.5px outset" }}>
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
