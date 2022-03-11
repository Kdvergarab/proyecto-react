import React from "react";

const Home = () => {
	return (
		<div>
			<div className="d-flex flex-wrap justify-content-end bg-dark py-3 mb-4 border-bottom">
				<a
					href="/"
					className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
					<svg className="bi me-2" width="40" height="32"></svg>
					<div className="fs-4">Start Bootstrap</div>
				</a>

				<ul className="nav nav-pills m-1">
					<li className="nav-item">
						<a href="#" className="nav-link " aria-current="page">
							Home
						</a>
					</li>
					<li className="nav-item">
						<a href="#" className="nav-link">
							Features
						</a>
					</li>
					<li className="nav-item">
						<a href="#" className="nav-link">
							Pricing
						</a>
					</li>
					<li className="nav-item">
						<a href="#" className="nav-link">
							FAQs
						</a>
					</li>
					<li className="nav-item">
						<a href="#" className="nav-link">
							About
						</a>
					</li>
				</ul>
			</div>
			<div>
				<div className="p-5 mb-4 bg-light rounded-3 m-5">
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
				<div>
				<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
