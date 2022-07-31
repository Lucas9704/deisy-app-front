import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import { bindActionCreators } from "redux";

// AOS
import AOS from "aos";
import "../../../../node_modules/aos/dist/aos";
import "../../../../node_modules/aos/dist/aos.css";

import SwiperCore, { Navigation } from "swiper";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/components/navigation/navigation.scss";

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
} from "../../../store/setting/setting";
import { connect } from "react-redux";

// install Swiper modules
SwiperCore.use([Navigation]);

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

const PetsList = (props) => {
	useEffect(() => {
		AOS.init({
			startEvent: "DOMContentLoaded",
			disable: function () {
				var maxWidth = 996;
				return window.innerWidth < maxWidth;
			},
			throttleDelay: 10,
			once: true,
			duration: 700,
			offset: 10,
		});
		//   customizer
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
	});

	return (
		<>
			<Row className="row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 justify-content-center">
				<Col>
					<Card className="mb-0">
						<svg
							className="bd-placeholder-img card-img-top"
							width="100%"
							height="180"
							xmlns="http://www.w3.org/2000/svg"
							role="img"
							aria-label="Placeholder: Image cap"
							preserveAspectRatio="xMidYMid slice"
							focusable="false"
						>
							<title>Placeholder</title>
							<rect width="100%" height="100%" fill="#868e96"></rect>
							<text x="30%" y="50%" fill="#dee2e6" dy=".3em">
								Image cap
							</text>
						</svg>
						<Card.Body>
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</p>
							<Link to="/" className="btn btn-primary">
								Go somewhere
							</Link>
						</Card.Body>
					</Card>
				</Col>
				<Col>
                <Card className="mb-0">
						<svg
							className="bd-placeholder-img card-img-top"
							width="100%"
							height="180"
							xmlns="http://www.w3.org/2000/svg"
							role="img"
							aria-label="Placeholder: Image cap"
							preserveAspectRatio="xMidYMid slice"
							focusable="false"
						>
							<title>Placeholder</title>
							<rect width="100%" height="100%" fill="#868e96"></rect>
							<text x="30%" y="50%" fill="#dee2e6" dy=".3em">
								Image cap
							</text>
						</svg>
						<Card.Body>
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</p>
							<Link to="/" className="btn btn-primary">
								Go somewhere
							</Link>
						</Card.Body>
					</Card>
                </Col>
				<Col>
                <Card className="mb-0">
						<svg
							className="bd-placeholder-img card-img-top"
							width="100%"
							height="180"
							xmlns="http://www.w3.org/2000/svg"
							role="img"
							aria-label="Placeholder: Image cap"
							preserveAspectRatio="xMidYMid slice"
							focusable="false"
						>
							<title>Placeholder</title>
							<rect width="100%" height="100%" fill="#868e96"></rect>
							<text x="30%" y="50%" fill="#dee2e6" dy=".3em">
								Image cap
							</text>
						</svg>
						<Card.Body>
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</p>
							<Link to="/" className="btn btn-primary">
								Go somewhere
							</Link>
						</Card.Body>
					</Card>
                </Col>
                <Col>
                <Card className="mb-0">
						<svg
							className="bd-placeholder-img card-img-top"
							width="100%"
							height="180"
							xmlns="http://www.w3.org/2000/svg"
							role="img"
							aria-label="Placeholder: Image cap"
							preserveAspectRatio="xMidYMid slice"
							focusable="false"
						>
							<title>Placeholder</title>
							<rect width="100%" height="100%" fill="#868e96"></rect>
							<text x="30%" y="50%" fill="#dee2e6" dy=".3em">
								Image cap
							</text>
						</svg>
						<Card.Body>
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</p>
							<Link to="/" className="btn btn-primary">
								Go somewhere
							</Link>
						</Card.Body>
					</Card>
                </Col>
                <Col>
                <Card className="mb-0">
						<svg
							className="bd-placeholder-img card-img-top"
							width="100%"
							height="180"
							xmlns="http://www.w3.org/2000/svg"
							role="img"
							aria-label="Placeholder: Image cap"
							preserveAspectRatio="xMidYMid slice"
							focusable="false"
						>
							<title>Placeholder</title>
							<rect width="100%" height="100%" fill="#868e96"></rect>
							<text x="30%" y="50%" fill="#dee2e6" dy=".3em">
								Image cap
							</text>
						</svg>
						<Card.Body>
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</p>
							<Link to="/" className="btn btn-primary">
								Go somewhere
							</Link>
						</Card.Body>
					</Card>
                </Col>
                <Col>
                <Card className="mb-0">
						<svg
							className="bd-placeholder-img card-img-top"
							width="100%"
							height="180"
							xmlns="http://www.w3.org/2000/svg"
							role="img"
							aria-label="Placeholder: Image cap"
							preserveAspectRatio="xMidYMid slice"
							focusable="false"
						>
							<title>Placeholder</title>
							<rect width="100%" height="100%" fill="#868e96"></rect>
							<text x="30%" y="50%" fill="#dee2e6" dy=".3em">
								Image cap
							</text>
						</svg>
						<Card.Body>
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</p>
							<Link to="/" className="btn btn-primary">
								Go somewhere
							</Link>
						</Card.Body>
					</Card>
                </Col>
                <Col>
                <Card className="mb-0">
						<svg
							className="bd-placeholder-img card-img-top"
							width="100%"
							height="180"
							xmlns="http://www.w3.org/2000/svg"
							role="img"
							aria-label="Placeholder: Image cap"
							preserveAspectRatio="xMidYMid slice"
							focusable="false"
						>
							<title>Placeholder</title>
							<rect width="100%" height="100%" fill="#868e96"></rect>
							<text x="30%" y="50%" fill="#dee2e6" dy=".3em">
								Image cap
							</text>
						</svg>
						<Card.Body>
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</p>
							<Link to="/" className="btn btn-primary">
								Go somewhere
							</Link>
						</Card.Body>
					</Card>
                </Col>
			</Row>
		</>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(PetsList);
