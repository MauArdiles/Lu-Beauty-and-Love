import CromaSlide from "./CromaSlide";

function CromaLayer() {
  return (
    <div
      id="CromaLayer"
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
          src="https://onedrive.live.com/embed?resid=7157A54F8B72CB41%212703&authkey=%21AOwOoOYBwAl6qIU&width=520&height=607"
          alt="PortadaMaquillaje"
        />
      </section>
      <section style={{ width: "50%" }}>
        <CromaSlide />
      </section>
    </div>
  );
}

export default CromaLayer;
