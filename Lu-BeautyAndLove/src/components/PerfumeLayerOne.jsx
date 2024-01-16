import Card from "react-bootstrap/Card";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

function PerfumeLayerOne({ products }) {
  console.log(products.brandOne);
  return (
    <div style={{ width: "100%", fontFamily: "DeVinne Txt BT-Regular" }}>
      <h3
        style={{
          textAlign: "center",
          marginTop: "1em",
          marginBottom: "1em",
          textDecoration: "underline",
        }}
      >
        Yves D`Orgeval
      </h3>
      <div style={{ display: " flex", flexFlow: "row", overflow: "visible" }}>
        {products.brandOne.map((product) => (
          <Card
            key={product.id}
            style={{
              width: "auto",
              alignItems: "center",
              height: "auto",
            }}
          >
            {product.image && <img src={product.image} alt={product.name} />}
            <Card.Body>
              <div className="d-grid gap-2">
                <Button
                  variant="danger"
                  size="lg"
                  style={{
                    boxShadow: "0px 4px 4px #00000059",
                    marginTop: "1em",
                    marginBottom: "1em",
                  }}
                  href="https://wa.me/message/6EMEVOO63BC2O1"
                >
                  COMPRAR
                </Button>
              </div>
              <Card.Title style={{ textAlign: "center", fontSize: "20px" }}>
                {product.name}
              </Card.Title>
              <Card.Text style={{ textAlign: "center", fontSize: "18px" }}>
                {product.description}
              </Card.Text>
              <Card.Text style={{ textAlign: "center", fontSize: "22px" }}>
                {product.price}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

PerfumeLayerOne.propTypes = {
  props: PropTypes.node,
  products: PropTypes.node,
};

export default PerfumeLayerOne;
