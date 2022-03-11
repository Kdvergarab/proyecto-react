import React from "react";
import { Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { propTypes } from "react-bootstrap/esm/Image";

const Cardkim = (props) => {
	return (
		<div className="col-md">
			<Card className="m-1" style={{ width: "14 rem" }}>
				<Card.Img variant="top" src={props.imagen} />
				<Card.Body>
					<Card.Title>{props.titulo}</Card.Title>
					<Card.Text>{props.descripcion}</Card.Text>
					<Button variant="primary">Go somewhere</Button>
				</Card.Body>
			</Card>
		</div>
	);
};

Cardkim.propTypes = {
	titulo: PropTypes.string,
	descripcion: PropTypes.string,
	imagen: PropTypes.string,
};

export default Cardkim;
