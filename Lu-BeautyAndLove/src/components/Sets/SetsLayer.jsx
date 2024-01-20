import { useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";
import Sets from "./Sets";
import products from "../../data/data.json";
import SetsBanner from "./SetsBanner";
import "swiper/css/pagination";
import "swiper/css";
register();

function SetsLayer() {
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
      id="Sets-container"
      className="layer-container"
      style={{
        marginTop: "1em",
        marginBottom: "1em",
        fontFamily: "DeVinne Txt BT-Regular",
      }}
    >
      <SetsBanner />
      <swiper-container
        ref={swiperElRef}
        spaceBetween="20"
        slides-per-view="4"
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
    </div>
  );
}

export default SetsLayer;
