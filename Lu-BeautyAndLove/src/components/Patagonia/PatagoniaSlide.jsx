import { useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";
import PatagoniaCard from "./PatagoniaCard";
import products from "../../data/data.json";
import Container from "react-bootstrap/Container";
import "swiper/css";

function PatagoniaSlide() {
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
      slidesPerView: 3,
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 3,
        },
        // 1440: {
        //   slidesPerView: 4,
        // },
        // 2560: {
        //   slidesPerView: 5,
        // },
      },
      on: {
        init() {},
      },
    };

    Object.assign(swiperElRef.current, swiperParams);
    swiperElRef.current.initialize();
  }, []);

  return (
    <Container style={{ fontFamily: "DeVinne Txt BT-Regular" }}>
      <swiper-container
        init="false"
        ref={swiperElRef}
        navigation="true"
        pagination="false"
      >
        {products.Patagonia.map((product) => (
          <swiper-slide key={product.id}>
            <PatagoniaCard product={product} />
          </swiper-slide>
        ))}
      </swiper-container>
    </Container>
  );
}

export default PatagoniaSlide;
