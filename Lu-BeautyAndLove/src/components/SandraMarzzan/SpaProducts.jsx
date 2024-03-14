import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

function SpaProducts({ product }) {
  return (
    <Card key={product.id} style={{ height: "40rem" }}>
      {product.image && (
        <img src={product.image} alt={product.name} height="400" width="auto" />
      )}
      <Card.Body>
        <div className="d-grid gap-2 my-4">
          <Button
            variant="danger"
            size="sm"
            style={{
              boxShadow: "0px 4px 4px #00000059",
            }}
            href="https://wa.me/message/6EMEVOO63BC2O1"
          >
            COMPRAR
          </Button>
        </div>
        <Card.Title style={{ textAlign: "center", fontSize: "16px" }}>
          {product.name}
        </Card.Title>
        <Card.Text style={{ textAlign: "center", fontSize: "12px" }}>
          {product.description}
        </Card.Text>
        <Card.Body style={{ justifyContent: "center" }}>
          <Card.Text style={{ textAlign: "center", fontSize: "18px" }}>
            {product.price}
          </Card.Text>
        </Card.Body>
      </Card.Body>
    </Card>
  );
}

SpaProducts.propTypes = {
  product: PropTypes.node,
};

export default SpaProducts;
