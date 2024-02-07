import Carousel from "react-bootstrap/Carousel";
import Gaultier from "../assets/Ingresos/Ingresos.png";
import Blossom from "../assets/Ingresos/IngresosDos.png";
import Nina from "../assets/Ingresos/IngresosTres.png";

function ImageBanner() {
  return (
    <Carousel data-bs-theme="dark" indicators="">
      <Carousel.Item>
        <img className="d-block w-100" src={Nina} alt="NinaRicci" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Gaultier} alt="Gaultier" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Blossom} alt="Blossom" />
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageBanner;
