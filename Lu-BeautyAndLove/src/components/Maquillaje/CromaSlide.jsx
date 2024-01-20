import { useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";
import Dorgeval from "../Dorgeval/Dorgeval";
import products from "../../data/data.json";
import "swiper/css";
register();

function CromaSlide() {
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
    <div style={{ width: "auto", fontFamily: "DeVinne Txt BT-Regular" }}>
      <h3
        id="Maquillaje"
        style={{
          textAlign: "center",
          marginTop: "1em",
          marginBottom: "1em",
          textDecoration: "underline",
        }}
      >
        Línea Maquillaje
      </h3>
      <swiper-container
        ref={swiperElRef}
        slides-per-view="2"
        navigation="true"
        pagination="false"
      >
        {products.Croma.map((product) => (
          <swiper-slide key={product.id}>
            <Dorgeval product={product} />
          </swiper-slide>
        ))}
      </swiper-container>
    </div>
  );
}

export default CromaSlide;
