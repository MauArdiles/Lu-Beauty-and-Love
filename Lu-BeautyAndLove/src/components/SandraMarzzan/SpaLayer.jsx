import { useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";
import ProductCard from "./ProductCard";
import products from "../../data/data.json";
import Container from "react-bootstrap/Container";
import "swiper/css";

function SpaLayer() {
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
          slidesPerView: 2,
        },
        1440: {
          slidesPerView: 2,
        },
        2560: {
          slidesPerView: 2,
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
      style={{
        width: "100%",
        fontFamily: "DeVinne Txt BT-Regular",
        justifyItems: "center",
      }}
    >
      <h3
        id="SandraMarzzan"
        style={{
          textAlign: "center",
          marginTop: "1em",
          marginBottom: "1em",
          color: "#DC1926",
        }}
      >
        Lu Beauty & Spa
      </h3>
      <swiper-container
        init="false"
        ref={swiperElRef}
        navigation="true"
        pagination="false"
      >
        {products.LuBeautySpa.map((product) => (
          <swiper-slide key={product.id}>
            <ProductCard product={product} />
          </swiper-slide>
        ))}
      </swiper-container>
    </Container>
  );
}

export default SpaLayer;
