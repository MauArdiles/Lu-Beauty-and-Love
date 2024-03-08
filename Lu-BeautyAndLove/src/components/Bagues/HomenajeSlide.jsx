import { useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";
import BaguesHomenaje from "./BaguesHomenaje";
import products from "../../data/data.json";
import "swiper/css/pagination";
import "swiper/css";
import Container from "react-bootstrap/Container";

function HomenajeSlide() {
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
      slidesPerView: 2,
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 2,
        },
        1440: {
          slidesPerView: 2,
        },
        2560: {
          slidesPerView: 3,
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
      style={{
        fontFamily: "DeVinne Txt BT",
        fontSize: "24px",
        textAlign: "center",
        color: "#DC1926",
      }}
    >
      Línea Homenaje
      <swiper-container
        init="false"
        ref={swiperElRef}
        spaceBetween="20"
        navigation="true"
        preventClicks={true}
        pagination="false"
      >
        {products.Homenaje.map((product) => (
          <swiper-slide key={product.id}>
            <BaguesHomenaje product={product} />
          </swiper-slide>
        ))}
      </swiper-container>
    </Container>
  );
}

export default HomenajeSlide;
