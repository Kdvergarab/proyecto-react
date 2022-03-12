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
					<Cardkim
						titulo="Futurama"
						descripcion="Accidentalmente el repartidor de pizza congelada, Fry se despierta 1000 años en el futuro, él es recibido por su único descendiente, un científico anciano y débil que es dueño de un servicio de despacho de carga."
						imagen="https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/article/60acb3b219fb73274924c0cc/futurama.jpeg"
					/>

					<Cardkim
						titulo="The Simpsons"
						descripcion="La comedia de dibujos animados se centra en una familia que vive en la ciudad de Springfield."
						imagen="https://sire-media-foxes.fichub.com/generic/serie-main/473.1024x576.jpg"
					/>
					<Cardkim
						titulo="Detective Conan"
						descripcion="Detective Conan, también conocida como Case Closed, es una serie de manga atemporal y ocasionalmente anacrónica escrita e ilustrada por Gōshō Aoyama"
						imagen="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/651f7505cbfb9937483979db26b40901d874440374ed142b19a902dcd5a19d18._V_SX1080_.jpg"
					/>
					<Cardkim
						titulo="Pokemon"
						descripcion="Los Pokémon son una clase de criaturas inspiradas en animales reales, insectos, objetos, plantas o criaturas mitológicas. Los jugadores toman el papel Entrenadores Pokémon, el objetivo es completar la Pokédex mediante la recopilación de todas las especies de Pokémon disponibles que se encuentran, entrenar un equipo de Pokémon"
						imagen="https://media.vandal.net/i/1200x630/10-2021/2021105724573_1.jpg"
					/>
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
