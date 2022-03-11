import React from "react";
import { Card, Button } from "react-bootstrap";

const Cardkim = () => {
	return (
		<div className="col-md">
			<Card className="m-1" style={{ width: "14 rem" }}>
				<Card.Img
					variant="top"
					src="https://images.ecestaticos.com/tUsQqBMzVgb6yd63QjsoObsXmd0=/0x0:0x0/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fd53%2F5d5%2Fdb0%2Fd535d5db070fa6ecf441b32de847e756.jpg"
				/>
				<Card.Body>
					<Card.Title>Card Title</Card.Title>
					<Card.Text>
						Some quick example text to build on the card title and
						make up the bulk of the card's content.
					</Card.Text>
					<Button variant="primary">Go somewhere</Button>
				</Card.Body>
			</Card>
		</div>
	);
};

export default Cardkim;
