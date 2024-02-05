import Button from "react-bootstrap/Button";
import WhatsappIcon from "../assets/whatsapp.png";
import Image from "react-bootstrap/Image";

export const Whatsapp = () => {
  const buttonStyle = {
    position: "sticky",
    top: "40em",
    zIndex: 1000,
    left: "90em",
  };
  return (
    <Button
      variant="link"
      size="lg"
      href="https://wa.me/message/6EMEVOO63BC2O1"
      style={buttonStyle}
    >
      <Image src={WhatsappIcon} alt="Wp-Button" fluid width="50" height="50" />
    </Button>
  );
};
