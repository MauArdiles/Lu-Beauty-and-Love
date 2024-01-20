import { useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";
import PatagoniaCard from "./PatagoniaCard";
import products from "../../data/data.json";
import "swiper/css";
register();

function PatagoniaSlide() {
  const swiperElRef = useRef(null);

  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener("swiperprogress", (e) => {
      const [swiper, progress] = e.detail;
    });

    swiperElRef.current.addEventListener("swiperslidechange", (e) => {
      console.log("slide changed");
    });
  }, []);

  return (
    <div style={{ width: "100%", fontFamily: "DeVinne Txt BT-Regular" }}>
      <h3
        id="LineaPatagonia"
        style={{
          textAlign: "center",
          marginTop: "1em",
          marginBottom: "1em",
          textDecoration: "underline",
        }}
      >
        Línea Facial Patagonia
      </h3>
      <swiper-container
        ref={swiperElRef}
        slides-per-view="2"
        navigation="true"
        pagination="false"
      >
        {products.Patagonia.map((product) => (
          <swiper-slide key={product.id}>
            <PatagoniaCard product={product} />
          </swiper-slide>
        ))}
      </swiper-container>
    </div>
  );
}

export default PatagoniaSlide;
