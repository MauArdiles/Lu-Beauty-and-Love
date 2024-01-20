import { useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";
import BaguesDupes from "./BaguesDupes";
import products from "../../data/data.json";
import "swiper/css/pagination";
import "swiper/css";
register();

function DupesSlide() {
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
        fontFamily: "DeVinne Txt BT",
        fontSize: "24px",
        textAlign: "center",
      }}
    >
      Linea Dupes
      <swiper-container
        ref={swiperElRef}
        spaceBetween="20"
        slides-per-view="2"
        navigation="true"
        preventClicks={true}
        pagination="false"
      >
        {products.Dupes.map((product) => (
          <swiper-slide key={product.id}>
            <BaguesDupes product={product} />
          </swiper-slide>
        ))}
      </swiper-container>
    </div>
  );
}

export default DupesSlide;
