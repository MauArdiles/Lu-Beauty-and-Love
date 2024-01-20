import { useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";
import OpiCards from "./OpiCards";
import products from "../../data/data.json";
import "swiper/css";
register();

function OpiProducts() {
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
        id="Yves D`Orgeval"
        style={{
          textAlign: "center",
          marginTop: "1em",
          marginBottom: "1em",
          textDecoration: "underline",
        }}
      >
        Esmaltes OPI 100% Veganos
      </h3>
      <swiper-container
        ref={swiperElRef}
        slides-per-view="4"
        navigation="true"
        pagination="false"
      >
        {products.Opi.map((product) => (
          <swiper-slide key={product.id}>
            <OpiCards product={product} />
          </swiper-slide>
        ))}
      </swiper-container>
    </div>
  );
}

export default OpiProducts;
