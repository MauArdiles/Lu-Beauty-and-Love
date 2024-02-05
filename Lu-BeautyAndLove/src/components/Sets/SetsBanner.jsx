import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

function SetsBanner() {
  return (
    <Container fluid style={{ marginBottom: "1.5em" }}>
      <Image
        fluid
        src="https://onedrive.live.com/embed?resid=7157A54F8B72CB41%212773&authkey=%21AJpopX4TaKGDUDU&width=1500&height=400"
        alt="Sets y Cofres"
        style={{
          borderRadius: "20px",
        }}
      />
    </Container>
  );
}

export default SetsBanner;
