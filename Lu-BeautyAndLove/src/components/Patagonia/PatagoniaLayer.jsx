import PatagoniaSlide from "./PatagoniaSlide";

function PatagoniaLayer() {
  return (
    <div
      id="PatagoniaLayer"
      style={{
        width: "100%",
        display: "flex",
        flexFlow: "row",
        justifyContent: "center",
        marginTop: "1em",
      }}
    >
      <section style={{ width: "40%", marginTop: "4em" }}>
        <img
          src="https://onedrive.live.com/embed?resid=7157A54F8B72CB41%212711&authkey=%21AMx7G96U9Il5FE0&width=536&height=616"
          alt="PortadaPatagonia"
        />
      </section>
      <section style={{ width: "50%" }}>
        <PatagoniaSlide />
      </section>
    </div>
  );
}

export default PatagoniaLayer;
