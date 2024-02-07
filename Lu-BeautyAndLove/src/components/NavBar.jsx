import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import logoLu from "../assets/Logo.png";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Image from "react-bootstrap/Image";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Redes } from "./Redes";

export const NavBar = () => {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary mb-3"
      sticky="top"
      bg="light"
      style={{ backgroundColor: "white" }}
    >
      <Container fluid style={{ backgroundColor: "white" }}>
        <Navbar.Brand href="/">
          <Image
            src={logoLu}
            alt="Logo"
            width="150px"
            height="auto"
            style={{ borderRadius: "100%" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-lg"
          aria-labelledby="offcanvasNavbarLabel-expand-lg"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
              <Image
                src={logoLu}
                alt="Logo"
                width="100px"
                height="auto"
                style={{ borderRadius: "100%" }}
              />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-center flex-grow-1 pe-1">
              <DropdownButton
                id="bg-nested-dropdown"
                title="PERFUMES"
                as={ButtonGroup}
                variant="danger"
                size="sm"
                style={{
                  fontFamily: "DeVinne Txt BT",
                  fontSize: "18px",
                  marginRight: "2em",
                  marginTop: "1em",
                }}
              >
                <Dropdown.Item href="#Yves DOrgeval">
                  Yves D`Orgeval
                </Dropdown.Item>
                <Dropdown.Item href="#Sets-container">
                  Sets y Cofres
                </Dropdown.Item>
                <Dropdown.Item href="#LineaBagues">Línea Baguès</Dropdown.Item>
              </DropdownButton>
              <DropdownButton
                id="dropdown-basic-button"
                title="MAQUILLAJE"
                as={ButtonGroup}
                variant="danger"
                size="sm"
                style={{
                  fontFamily: "DeVinne Txt BT",
                  fontSize: "18px",
                  marginRight: "2em",
                  marginTop: "1em",
                }}
              >
                <Dropdown.Item href="#OPI">Esmaltes OPI</Dropdown.Item>
                <Dropdown.Item href="#PatagoniaLayer">
                  Línea Facial Patagonia
                </Dropdown.Item>
                <Dropdown.Item href="#CromaLayer">Make Up</Dropdown.Item>
              </DropdownButton>
              <DropdownButton
                id="dropdown-basic-button"
                title="AROMATIZANTES"
                as={ButtonGroup}
                variant="danger"
                size="sm"
                style={{
                  fontFamily: "DeVinne Txt BT",
                  fontSize: "18px",
                  marginRight: "2em",
                  marginTop: "1em",
                }}
              >
                <Dropdown.Item href="#/action-1">Sandra Marzzan</Dropdown.Item>
              </DropdownButton>
              <DropdownButton
                id="dropdown-basic-button"
                title="RECOMENDADOS"
                as={ButtonGroup}
                variant="danger"
                size="sm"
                style={{
                  fontFamily: "DeVinne Txt BT",
                  fontSize: "18px",
                  marginRight: "2em",
                  marginTop: "1em",
                }}
              >
                <Dropdown.Item href="#LineaBagues">Perfumería</Dropdown.Item>
                <Dropdown.Item href="#CromaLayer">Maquillaje</Dropdown.Item>
              </DropdownButton>
            </Nav>
            <Nav>
              <Redes />
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};
