import { useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";
import Sets from "./Sets";
import products from "../../data/data.json";
import SetsBanner from "./SetsBanner";
import "swiper/css/pagination";
import "swiper/css";
import Container from "react-bootstrap/Container";

function SetsLayer() {
  const swiperElRef = useRef(null);

  useEffect(() => {
    register();
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener("swiperprogress", (e) => {
      const [swiper, progress] = e.detail;
    });

    swiperElRef.current.addEventListener("swiperslidechange", (e) => {
      console.log("slide changed");
    });

    const swiperParams = {
      slidesPerView: 4,
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1440: {
          slidesPerView: 4,
        },
        2560: {
          slidesPerView: 5,
        },
      },
      on: {
        init() {},
      },
    };

    Object.assign(swiperElRef.current, swiperParams);
    swiperElRef.current.initialize();
  }, []);
  return (
    <Container
      fluid
      id="Sets-container"
      className="layer-container"
      style={{
        marginTop: "1em",
        marginBottom: "1em",
        fontFamily: "DeVinne Txt BT-Regular",
        width: "100%",
      }}
    >
      <SetsBanner />
      <swiper-container
        init="false"
        ref={swiperElRef}
        spaceBetween="20"
        navigation="true"
        preventClicks={true}
        pagination="false"
      >
        {products.productsSets.map((product) => (
          <swiper-slide key={product.id}>
            <Sets product={product} />
          </swiper-slide>
        ))}
      </swiper-container>
    </Container>
  );
}

export default SetsLayer;
