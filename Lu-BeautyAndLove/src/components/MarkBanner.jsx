import Card from "react-bootstrap/Card";

function MarkBanner() {
  return (
    <>
      <Card
        style={{ width: "100%", backgroundColor: "#9b131c", height: "40px" }}
      >
        <Card.Body
          style={{
            color: "#ffffff",
            fontaFamily: "DeVinne Txt BT-Regular, Helvetica",
            fontSize: "14px",
            fontWeight: 400,
            height: "48px",
            textAlign: "center",
          }}
        >
          PUBLICIDAD - PROMOCIONES - PAGOS EN CTAS / TARJETAS ETC
        </Card.Body>
      </Card>
    </>
  );
}

export default MarkBanner;
