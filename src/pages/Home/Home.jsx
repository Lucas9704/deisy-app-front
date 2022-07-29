import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { Button, Nav, Navbar, Container } from "react-bootstrap";
import Logo from "../../components/partials/components/logo";
import { ScrollSpy } from "bootstrap";
import { Link } from "react-router-dom";
import Card from "../../components/partials/Card";

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
									to="/dashboard"
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
									Nuestra iniciativa
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
								<Nav className="ms-auto mb-2 mb-lg-0 d-flex align-items-start">
									<Nav.Link href="/about" target="_blank" className="">
										Sobre nosotros🐱‍🏍
									</Nav.Link>
									<Nav.Link href="/contact" target="_blank" className="me-3">
										Contribuir🤑
									</Nav.Link>
									<Nav.Link
										href="/register"
										className="btn btn-success text-white"
									>
										<svg
											width="25"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												opacity="0.4"
												d="M21.101 9.58786H19.8979V8.41162C19.8979 7.90945 19.4952 7.5 18.999 7.5C18.5038 7.5 18.1 7.90945 18.1 8.41162V9.58786H16.899C16.4027 9.58786 16 9.99731 16 10.4995C16 11.0016 16.4027 11.4111 16.899 11.4111H18.1V12.5884C18.1 13.0906 18.5038 13.5 18.999 13.5C19.4952 13.5 19.8979 13.0906 19.8979 12.5884V11.4111H21.101C21.5962 11.4111 22 11.0016 22 10.4995C22 9.99731 21.5962 9.58786 21.101 9.58786Z"
												fill="currentColor"
											></path>
											<path
												d="M9.5 15.0156C5.45422 15.0156 2 15.6625 2 18.2467C2 20.83 5.4332 21.5001 9.5 21.5001C13.5448 21.5001 17 20.8533 17 18.269C17 15.6848 13.5668 15.0156 9.5 15.0156Z"
												fill="currentColor"
											></path>
											<path
												opacity="0.4"
												d="M9.50023 12.5542C12.2548 12.5542 14.4629 10.3177 14.4629 7.52761C14.4629 4.73754 12.2548 2.5 9.50023 2.5C6.74566 2.5 4.5376 4.73754 4.5376 7.52761C4.5376 10.3177 6.74566 12.5542 9.50023 12.5542Z"
												fill="currentColor"
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
                    <div className="bd-cheatsheet container-fluid bg-trasprent mt-n5" >
                        <section id="objectives" >
                            <div className="bd-heading sticky-xl-top align-self-start">
                                <Card className="">
                                    <Card.Body className="">
                                        <h4 className="fw-bold">
                                            Objetivos
                                        </h4>
                                        
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="">
                                <Card className="">
                                    <Card.Body className="">
                                        <p>
                                            El objetivo de esta aplicación es que los usuarios puedan crear una lista de tareas,
                                            y que estas sean organizadas en categorías.
                                        </p>
                                    </Card.Body>
                                </Card>
                            </div>
                        </section>
                    </div>
                </div>
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
