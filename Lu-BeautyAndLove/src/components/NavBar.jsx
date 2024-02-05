import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import logoLu from "../assets/Logo.png";
import { CiSearch } from "react-icons/ci";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

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
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-lg"
          aria-labelledby="offcanvasNavbarLabel-expand-lg"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
              <Logo />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-center flex-grow-1 pe-1">
              <DropdownButton
                id="bg-nested-dropdown"
                title="PERFUMES"
                variant="danger"
                style={{
                  fontFamily: "DeVinne Txt BT",
                  fontSize: "18px",
                  height: "auto",
                  width: "auto",
                  marginRight: "2em",
                  marginTop: "1em",
                }}
              >
                <Dropdown.Item href="#Yves D`Orgeval">
                  Yves D`Orgeval
                </Dropdown.Item>
                <Dropdown.Item href="#Sets-container">
                  Sets y Cofres
                </Dropdown.Item>
                <Dropdown.Item href="#LineaBagues">Línea Bagues</Dropdown.Item>
              </DropdownButton>
              <DropdownButton
                id="dropdown-basic-button"
                title="MAQUILLAJE"
                variant="danger"
                style={{
                  fontFamily: "DeVinne Txt BT",
                  fontSize: "18px",
                  height: "auto",
                  width: "auto",
                  marginRight: "2em",
                  marginTop: "1em",
                }}
              >
                <Dropdown.Item href="#OPI">Esmaltes OPI</Dropdown.Item>
                <Dropdown.Item href="#PatagoniaLayer">
                  Linea Facial Patagonia
                </Dropdown.Item>
                <Dropdown.Item href="#CromaLayer">Make Up</Dropdown.Item>
              </DropdownButton>
              <DropdownButton
                id="dropdown-basic-button"
                title="AROMATIZANTES"
                drop="down-centered"
                variant="danger"
                style={{
                  fontFamily: "DeVinne Txt BT",
                  fontSize: "18px",
                  height: "auto",
                  width: "auto",
                  marginRight: "2em",
                  marginTop: "1em",
                }}
              >
                <Dropdown.Item href="#/action-1">Sandra Marzzan</Dropdown.Item>
              </DropdownButton>
              <DropdownButton
                id="dropdown-basic-button"
                title="RECOMENDADOS"
                variant="danger"
                style={{
                  fontFamily: "DeVinne Txt BT",
                  fontSize: "18px",
                  height: "auto",
                  width: "auto",
                  marginTop: "1em",
                }}
              >
                <Dropdown.Item href="#LineaBagues">Perfumería</Dropdown.Item>
                <Dropdown.Item href="#CromaLayer">Maquillaje</Dropdown.Item>
              </DropdownButton>
            </Nav>
            <Form className="d-flex" style={{ marginTop: "1em" }}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-1"
                aria-label="Search"
                style={{ borderColor: "#DC1926" }}
              />
              <Button variant="outline-danger" id="button-addon2">
                <CiSearch />
              </Button>
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

const Logo = () => {
  return (
    <img
      src={logoLu}
      alt="Logo Lu"
      style={{
        width: "150px",
        height: "auto",
        borderRadius: "100%",
      }}
    />
  );
};

{
  /* <DropdownButton
id="dropdown-menu-align-responsive-1"
title="PERFUMES"
variant="danger"
// as={ButtonGroup}
align="end"
style={{
  fontFamily: "DeVinne Txt BT",
  fontSize: "18px",
  height: "30px",
  width: "150px",
  marginRight: "2em",
  marginTop: "1em",
}}
>
<Dropdown.Item href="#Yves D`Orgeval">
  Yves D`Orgeval
</Dropdown.Item>
<Dropdown.Item href="#Sets-container">
  Sets y Cofres
</Dropdown.Item>
<Dropdown.Item href="#LineaBagues">Línea Bagues</Dropdown.Item>
</DropdownButton>
<DropdownButton
id="dropdown-basic-button"
title="MAQUILLAJE"
variant="danger"
// as={ButtonGroup}
style={{
  fontFamily: "DeVinne Txt BT",
  fontSize: "18px",
  height: "30px",
  width: "150px",
  marginRight: "2em",
  marginTop: "1em",
}}
>
<Dropdown.Item href="#OPI">Esmaltes OPI</Dropdown.Item>
<Dropdown.Item href="#PatagoniaLayer">
  Linea Facial Patagonia
</Dropdown.Item>
<Dropdown.Item href="#CromaLayer">Make Up</Dropdown.Item>
</DropdownButton>
<DropdownButton
id="dropdown-basic-button"
title="AROMATIZANTES"
drop="down-centered"
variant="danger"
// as={ButtonGroup}
style={{
  fontFamily: "DeVinne Txt BT",
  fontSize: "18px",
  height: "30px",
  width: "150px",
  marginRight: "4em",
  marginTop: "1em",
}}
>
<Dropdown.Item href="#/action-1">Sandra Marzzan</Dropdown.Item>
</DropdownButton>
<DropdownButton
id="dropdown-basic-button"
title="RECOMENDADOS"
variant="danger"
// as={ButtonGroup}
style={{
  fontFamily: "DeVinne Txt BT",
  fontSize: "18px",
  height: "30px",
  width: "150px",
  marginTop: "1em",
  marginRight: "15em",
}}
>
<Dropdown.Item href="#LineaBagues">Perfumería</Dropdown.Item>
<Dropdown.Item href="#CromaLayer">Maquillaje</Dropdown.Item>
</DropdownButton> */
}
