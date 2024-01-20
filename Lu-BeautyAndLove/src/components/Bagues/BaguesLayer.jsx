import DupesSlide from "./DupesSlide";
import HomenajeSlide from "./HomenajeSlide";

function BaguesLayer() {
  return (
    <>
      <h3
        id="LineaBagues"
        style={{
          fontFamily: "DeVinne Txt BT",
          fontSize: "32px",
          textAlign: "center",
          marginTop: "1em",
          marginBottom: "1em",
          textDecoration: "underline",
        }}
      >
        Bagues
      </h3>
      <main
        style={{
          display: "flex",
          flexFlow: "row",
          justifyContent: "center",
          gap: "10em",
        }}
      >
        <div style={{ width: "40%" }}>
          <DupesSlide />
        </div>
        <div style={{ width: "40%" }}>
          <HomenajeSlide />
        </div>
      </main>
    </>
  );
}

export default BaguesLayer;
