import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logoLu from "../assets/Logo_Principal.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Header() {
  return (
    <Navbar
      bg="light"
      data-bs-theme="light"
      style={{
        margin: "1em",
        width: "100%",
        height: "400px",
        backgroundColor: "white",
      }}
    >
      <Container
        style={{
          padding: "0",
          display: "flex",
          flexFlow: "row",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Navbar.Brand href="#home" style={{ margin: "1em" }}>
          <Logo />
        </Navbar.Brand>
        <InteractiveBar />
      </Container>
    </Navbar>
  );
}

const Logo = () => {
  return (
    <a href="/">
      <img
        src={logoLu}
        alt="Logo Lu"
        style={{ width: "300px", height: "auto", margin: "1em" }}
      />
    </a>
  );
};

const InteractiveBar = () => {
  return (
    <div>
      <Row>
        <Col xs="auto">
          <Form.Control type="text" placeholder="Search" className=" mr-sm-2" />
        </Col>
        <Col xs="auto">
          <Button type="submit">Search</Button>
        </Col>
      </Row>
      <Row style={{ display: "flex", flexFlow: "row", marginTop: "2em" }}>
        <Button
          type="submit"
          style={{
            color: "#dc19269e",
            backgroundColor: "rgba(255, 255, 255, 1)",
            border: "1px solid",
            borderColor: "#9b131c",
            borderRadius: "50px",
            height: "30px",
            width: "150px",
            marginRight: "1em",
          }}
        >
          Item 1
        </Button>
        <Button
          type="submit"
          style={{
            color: "#dc19269e",
            backgroundColor: "rgba(255, 255, 255, 1)",
            border: "1px solid",
            borderColor: "#9b131c",
            borderRadius: "50px",
            height: "30px",
            width: "150px",
            marginRight: "1em",
          }}
        >
          Item 2
        </Button>
        <Button
          type="submit"
          style={{
            color: "#dc19269e",
            backgroundColor: "rgba(255, 255, 255, 1)",
            border: "1px solid",
            borderColor: "#9b131c",
            borderRadius: "50px",
            height: "30px",
            width: "150px",
            marginRight: "1em",
          }}
        >
          Item 3
        </Button>
        <Button
          type="submit"
          style={{
            color: "#dc19269e",
            backgroundColor: "rgba(255, 255, 255, 1)",
            border: "1px solid",
            borderColor: "#9b131c",
            borderRadius: "50px",
            height: "30px",
            width: "150px",
            marginRight: "1em",
          }}
        >
          Item 4
        </Button>
      </Row>
    </div>
  );
};

export default Header;
