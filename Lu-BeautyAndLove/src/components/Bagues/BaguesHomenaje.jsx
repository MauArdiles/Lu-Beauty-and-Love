import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

function Sets({ product }) {
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
              marginTop: "0.5em",
              marginBottom: "0.5em",
            }}
            href="https://wa.me/message/6EMEVOO63BC2O1"
          >
            Comprar
          </Button>
        </div>
        <Card.Title style={{ textAlign: "center", fontSize: "16px" }}>
          {product.name}
        </Card.Title>
        <Card.Text style={{ textAlign: "left", fontSize: "14px" }}>
          {product.description}
        </Card.Text>
        <Card.Text style={{ textAlign: "center", fontSize: "16px" }}>
          {product.price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

Sets.propTypes = {
  props: PropTypes.node,
  product: PropTypes.node,
};

export default Sets;
