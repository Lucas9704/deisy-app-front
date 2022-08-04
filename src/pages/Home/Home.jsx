import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { Button, Nav, Navbar, Container } from "react-bootstrap";
import Logo from "../../components/partials/components/logo";
import { ScrollSpy } from "bootstrap";
import { Link } from "react-router-dom";
import Card from "../../components/Card";
import Footer from "../../components/partials/dashboard/FooterStyle/footer";

//img
import topImage from "../../assets/images/dashboard/top-image.jpg";
import github from "../../assets/images/brands/23.png";

//prism
import "../../../node_modules/prismjs/prism";
import "../../../node_modules/prismjs/themes/prism-okaidia.css";

// SliderTab
import SliderTab from "../../plugins/slider-tabs";

// store
import {
	NavbarstyleAction,
	getDirMode,
	getcustomizerMode,
	getcustomizerprimaryMode,
	getcustomizerinfoMode,
	SchemeDirAction,
	ColorCustomizerAction,
	getNavbarStyleMode,
	getSidebarActiveMode,
	SidebarActiveStyleAction,
	getDarkMode,
	ModeAction,
	SidebarColorAction,
	getSidebarColorMode,
	getSidebarTypeMode,
} from "../../store/setting/setting";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
	return {
		darkMode: getDarkMode(state),
		customizerMode: getcustomizerMode(state),
		cololrinfomode: getcustomizerinfoMode(state),
		colorprimarymode: getcustomizerprimaryMode(state),
		schemeDirMode: getDirMode(state),
		sidebarcolorMode: getSidebarColorMode(state),
		sidebarTypeMode: getSidebarTypeMode(state),
		sidebaractivestyleMode: getSidebarActiveMode(state),
		navbarstylemode: getNavbarStyleMode(state),
	};
};
const mapDispatchToProps = (dispatch) => ({
	...bindActionCreators(
		{
			ModeAction,
			SchemeDirAction,
			SidebarColorAction,
			SidebarActiveStyleAction,
			NavbarstyleAction,
			ColorCustomizerAction,
		},
		dispatch
	),
});
const Home = (props) => {
	//   darkmode
	const colorMode = sessionStorage.getItem("color-mode");
	if (colorMode === null) {
		props.ModeAction(props.darkMode);
	} else {
		props.ModeAction(colorMode);
	}
	// colocustomizermode
	const colorcustomizerMode = sessionStorage.getItem("color-customizer-mode");
	const colorcustomizerinfoMode = sessionStorage.getItem(
		"colorcustominfo-mode"
	);
	const colorcustomizerprimaryMode = sessionStorage.getItem(
		"colorcustomprimary-mode"
	);
	if (colorcustomizerMode === null) {
		props.ColorCustomizerAction(
			props.customizerMode,
			props.cololrinfomode,
			props.colorprimarymode
		);
		document.documentElement.style.setProperty(
			"--bs-info",
			props.cololrinfomode
		);
	} else {
		props.ColorCustomizerAction(
			colorcustomizerMode,
			colorcustomizerinfoMode,
			colorcustomizerprimaryMode
		);
		document.documentElement.style.setProperty(
			"--bs-info",
			colorcustomizerinfoMode
		);
	}

	// rtlmode
	const rtlMode = sessionStorage.getItem("rtl-mode");
	if (rtlMode === null) {
		props.SchemeDirAction(props.schemeDirMode);
	} else {
		props.SchemeDirAction(rtlMode);
	}

	useEffect(() => {
		setTimeout(() => {
			Array.from(
				document.querySelectorAll('[data-toggle="slider-tab"]'),
				(elem) => {
					return new SliderTab(elem);
				}
			);
		}, 100);
		new ScrollSpy(document.body, {
			target: "#components-collapse",
		});
		new ScrollSpy(document.body, {
			target: "#forms-collapse",
		});
		new ScrollSpy(document.body, {
			target: "#contents-collapse",
		});
	});

	return (
		<>
			<span className="uisheet screen-darken"></span>
			<div
				className="header"
				style={{
					background: `url(${topImage})`,
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					height: "100vh",
					position: "relative",
				}}
			>
				<div className="main-img">
					<div className="container">
						<Logo width="150" />
						<h1 className="my-4">
							<span>🐶Deisy App🐱</span>
						</h1>
						<h4 className="text-white mb-5">
							Devolvamos un poco del amor❤ que recibimos de ellos
						</h4>
						<div className="d-flex justify-content-center align-items-center">
							<div>
								<Link
									className="btn btn-light bg-white"
									to="/dashboard-inv"
									target="_black"
								>
									<svg
										width="22"
										height="22"
										className="me-1"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
										></path>
									</svg>
									Accede como invitado
								</Link>
							</div>
							<div className="ms-3">
								<Button
									bsPrefix=" btn btn-light bg-white d-flex"
									target="_blank"
									href="https://github.com/Lucas9704/deisy-app-front/tree/main"
								>
									<img src={github} width="24px" height="24px" alt="github" />
									<span className="text-danger mx-2 fw-bold">
										Se parte del proyecto💻
									</span>
								</Button>
							</div>
						</div>
					</div>
				</div>
				<Container>
					<Navbar bg="white" expand="lg" className="top-1 rounded">
						<Container>
							<Navbar.Brand href="#" className="mx-2 d-flex align-items-center">
								<Logo width="30" />
								<h5 className="logo-title mx-3">Deisy App</h5>
							</Navbar.Brand>
							<Navbar.Toggle aria-controls="basic-navbar-nav" />
							<Navbar.Collapse id="basic-navbar-nav">
								<Nav className="ms-auto mb-2 mb-lg-0 d-flex align-items-center">
									<Nav.Link href="/about" target="_blank" className="">
										Sobre nosotros🐱‍🏍
									</Nav.Link>
									<Nav.Link href="/contact" target="_blank" className="me-3">
										Contribuir🤑
									</Nav.Link>
									<Nav.Link
										href="/login"
										className="btn btn-outline-success text-gray mx-3 my-2 px-4"
									>
										<svg
											width="25"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fill-rule="evenodd"
												clip-rule="evenodd"
												d="M21.25 16.334V7.665C21.25 4.645 19.111 2.75 16.084 2.75H7.916C4.889 2.75 2.75 4.635 2.75 7.665L2.75 16.334C2.75 19.364 4.889 21.25 7.916 21.25H16.084C19.111 21.25 21.25 19.364 21.25 16.334Z"
												stroke="currentColor"
												stroke-width="1.5"
												stroke-linecap="round"
												stroke-linejoin="round"
											></path>
											<path
												d="M16.0861 12H7.91406"
												stroke="currentColor"
												stroke-width="1.5"
												stroke-linecap="round"
												stroke-linejoin="round"
											></path>
											<path
												d="M12.3223 8.25205L16.0863 12L12.3223 15.748"
												stroke="currentColor"
												stroke-width="1.5"
												stroke-linecap="round"
												stroke-linejoin="round"
											></path>
										</svg>
										Ingresar
									</Nav.Link>
									<Nav.Link
										href="/auth/register"
										className="btn btn-success text-white mx-3 my-2 px-4"
									>
										<svg
											width="25"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fill-rule="evenodd"
												clip-rule="evenodd"
												d="M9.87651 15.2063C6.03251 15.2063 2.74951 15.7873 2.74951 18.1153C2.74951 20.4433 6.01251 21.0453 9.87651 21.0453C13.7215 21.0453 17.0035 20.4633 17.0035 18.1363C17.0035 15.8093 13.7415 15.2063 9.87651 15.2063Z"
												stroke="currentColor"
												stroke-width="1.5"
												stroke-linecap="round"
												stroke-linejoin="round"
											></path>
											<path
												fill-rule="evenodd"
												clip-rule="evenodd"
												d="M9.8766 11.886C12.3996 11.886 14.4446 9.841 14.4446 7.318C14.4446 4.795 12.3996 2.75 9.8766 2.75C7.3546 2.75 5.3096 4.795 5.3096 7.318C5.3006 9.832 7.3306 11.877 9.8456 11.886H9.8766Z"
												stroke="currentColor"
												stroke-width="1.5"
												stroke-linecap="round"
												stroke-linejoin="round"
											></path>
											<path
												d="M19.2036 8.66919V12.6792"
												stroke="currentColor"
												stroke-width="1.5"
												stroke-linecap="round"
												stroke-linejoin="round"
											></path>
											<path
												d="M21.2497 10.6741H17.1597"
												stroke="currentColor"
												stroke-width="1.5"
												stroke-linecap="round"
												stroke-linejoin="round"
											></path>
										</svg>
										Registrarme
									</Nav.Link>
								</Nav>
							</Navbar.Collapse>
						</Container>
					</Navbar>
				</Container>
			</div>
			<div className=" body-class-1 container">
				<div className="bd-cheatsheet container-fluid bg-trasprent mt-n5">
					<section id="objectives">
						<div className="bd-heading sticky-xl-top align-self-start">
							<Card className="">
								<Card.Body className="">
									<h3 className="fw-bold">Objetivos</h3>
								</Card.Body>
							</Card>
						</div>
						<div className="">
							<Card className="">
								<Card.Body className="">
									<p className="fw-bold">
										Buscamos poder facilitar a los usuarios las herramientas
										necesarias para la ejecución de acciones solidarias con las
										mascotas en estado de calle.
									</p>
								</Card.Body>
							</Card>
						</div>
					</section>
					<section id="objectives">
						<div className="bd-heading sticky-xl-top align-self-start">
							<Card className="">
								<Card.Body className="">
									<h3 className="fw-bold">Misión</h3>
								</Card.Body>
							</Card>
						</div>
						<div className="">
							<Card className="">
								<Card.Body className="">
									<p className="fw-bold">
										Brindar servicios de búsqueda, adopción y registro de
										mascotas en estados de calle, además de poder proporcionar
										información útil para estas actividades.
									</p>
								</Card.Body>
							</Card>
						</div>
					</section>
					<section id="objectives">
						<div className="bd-heading sticky-xl-top align-self-start">
							<Card className="">
								<Card.Body className="">
									<h3 className="fw-bold">Visión</h3>
								</Card.Body>
							</Card>
						</div>
						<div className="">
							<Card className="">
								<Card.Body className="">
									<p>
										Crear una comunidad de personas que compartan los mismos
										intereses y fomentar los mismos.
									</p>
								</Card.Body>
							</Card>
						</div>
					</section>
				</div>
			</div>
			<Footer />
			<div id="back-to-top" style={{ display: "none" }}>
				<Button size="xs" variant="primary  p-0 position-fixed top" href="#top">
					<svg
						width="30"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M5 15.5L12 8.5L19 15.5"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						></path>
					</svg>
				</Button>
			</div>
		</>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
