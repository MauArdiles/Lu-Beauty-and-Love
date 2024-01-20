import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

function ProductCard({ product }) {
  return (
    <Card key={product.id} style={{ height: "38rem" }}>
      {product.image && (
        <img src={product.image} alt={product.name} height="600" />
      )}
      <Card.Body>
        <div className="d-grid gap-2">
          <Button
            variant="danger"
            size="sm"
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
        <Card.Title style={{ textAlign: "center", fontSize: "16px" }}>
          {product.name}
        </Card.Title>
        <Card.Text style={{ textAlign: "center", fontSize: "14px" }}>
          {product.description}
        </Card.Text>
        <Card.Body style={{ justifyContent: "center" }}>
          <Card.Text style={{ textAlign: "center", fontSize: "16px" }}>
            {product.price}
          </Card.Text>
        </Card.Body>
      </Card.Body>
    </Card>
  );
}

ProductCard.propTypes = {
  props: PropTypes.node,
  product: PropTypes.node,
};

export default ProductCard;
