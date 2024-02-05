import { useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";
import Dorgeval from "../Dorgeval/Dorgeval";
import products from "../../data/data.json";
import Container from "react-bootstrap/Container";
import "swiper/css";

function PerfumeLayerOne() {
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
      style={{ width: "100%", fontFamily: "DeVinne Txt BT-Regular" }}
    >
      <h3
        id="Yves D`Orgeval"
        style={{
          color: "#DC1926",
          textAlign: "center",
          marginTop: "1em",
          marginBottom: "1em",
          fontSize: "34px",
        }}
      >
        Yves D`Orgeval
      </h3>
      <swiper-container
        init="false"
        ref={swiperElRef}
        navigation="true"
        pagination="false"
      >
        {products.Dorgeval.map((product) => (
          <swiper-slide key={product.id}>
            <Dorgeval product={product} />
          </swiper-slide>
        ))}
      </swiper-container>
    </Container>
  );
}

export default PerfumeLayerOne;
