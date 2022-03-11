import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

import Cardkim from "./Cardkim.jsx";

const Home = () => {
	return (
		<div>
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
				<Container>
					<Navbar.Brand href="#home">Start Bootstrap</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse
						className="justify-content-end"
						id="responsive-navbar-nav ">
						<Nav className="navbar-nav mb-2 mb-lg-0">
							<Nav>
								<Nav.Link href="#deets">Home</Nav.Link>
								<Nav.Link href="#deets">About</Nav.Link>
								<Nav.Link href="#deets">Services</Nav.Link>
								<Nav.Link eventKey={2} href="#memes">
									Contact
								</Nav.Link>
							</Nav>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<div className="container">
				<div className="p-1 mb-4 bg-light rounded-3">
					<div className="container-fluid py-5">
						<h1 className="display-5 fw-bold">Custom jumbotron</h1>
						<p className="col-md-8 fs-4">
							Using a series of utilities, you can create this
							jumbotron, just like the one in previous versions of
							Bootstrap. Check out the examples below for how you
							can remix and restyle it to your liking.
						</p>
						<button
							className="btn btn-primary btn-lg"
							type="button">
							Example button
						</button>
					</div>
				</div>
				<div className="row">
					<Cardkim />
					<Cardkim />
					<Cardkim />
					<Cardkim />
				</div>
			</div>

			<div className="container-fluid m-0">
				<div className="row justify-content-center bg-dark mt-4 p-3 estilo">
					Copyrigth
				</div>
			</div>
		</div>
	);
};

export default Home;
