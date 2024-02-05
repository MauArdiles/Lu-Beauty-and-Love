import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

function OpiBanner() {
  return (
    <Container
      fluid
      id="OPI"
      style={{ marginBottom: "1em", marginTop: "1.5em" }}
    >
      <Image
        fluid
        src="https://onedrive.live.com/embed?resid=7157A54F8B72CB41%212747&authkey=%21ANq3qXMS__VnxIU&width=1500&height=400"
        alt="Esmaltes OPI"
        style={{ borderRadius: "20px" }}
      />
    </Container>
  );
}

export default OpiBanner;
