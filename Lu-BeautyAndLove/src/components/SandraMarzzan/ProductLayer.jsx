import { useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";
import ProductCard from "./ProductCard";
import products from "../../data/data.json";
import "swiper/css";
register();

function ProductLayer() {
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
    <div
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
          textDecoration: "underline",
        }}
      >
        Aromatizantes Sandra Marzzan
      </h3>
      <swiper-container
        ref={swiperElRef}
        slides-per-view="4"
        navigation="true"
        pagination="false"
      >
        {products.SandraMarzzan.map((product) => (
          <swiper-slide key={product.id}>
            <ProductCard product={product} />
          </swiper-slide>
        ))}
      </swiper-container>
    </div>
  );
}

export default ProductLayer;
