import { Row, Col, Image, Nav, Tab } from "react-bootstrap";
import Card from "../../../components/Card";
import { useAuth } from "../../../contexts/authContext";

import { Link } from "react-router-dom";
// img

import avatars11 from "../../../assets/images/avatars/01.png";
import avatars22 from "../../../assets/images/avatars/avtar_1.png";
import avatars33 from "../../../assets/images/avatars/avtar_2.png";
import avatars44 from "../../../assets/images/avatars/avtar_3.png";
import avatars55 from "../../../assets/images/avatars/avtar_4.png";
import avatars66 from "../../../assets/images/avatars/avtar_5.png";

const UserProfile = () => {
	const { user } = useAuth();
	const image = user.photoURL;

	return (
		<>
			<Tab.Container defaultActiveKey="fourth">
				<Row className="justify-content-center">
					<Col lg="12">
						<Card>
							<Card.Body>
								<div className="d-flex flex-wrap align-items-center justify-content-between">
									<div className="d-flex flex-wrap align-items-center">
										<div className="profile-img position-relative me-3 mb-3 mb-lg-0 profile-logo profile-logo1">
											<Image
												className="theme-color-default-img  img-fluid rounded-pill avatar-100"
												src={image || avatars11}
												alt="profile-pic"
											/>
											<Image
												className="theme-color-purple-img img-fluid rounded-pill avatar-100"
												src={avatars22}
												alt="profile-pic"
											/>
											<Image
												className="theme-color-blue-img img-fluid rounded-pill avatar-100"
												src={avatars33}
												alt="profile-pic"
											/>
											<Image
												className="theme-color-green-img img-fluid rounded-pill avatar-100"
												src={avatars55}
												alt="profile-pic"
											/>
											<Image
												className="theme-color-yellow-img img-fluid rounded-pill avatar-100"
												src={avatars66}
												alt="profile-pic"
											/>
											<Image
												className="theme-color-pink-img img-fluid rounded-pill avatar-100"
												src={avatars44}
												alt="profile-pic"
											/>
										</div>
										<div className="d-flex flex-wrap align-items-center mb-3 mb-sm-0">
											<h4 className="me-2 h4">
												{user.displayName || user.email}
											</h4>
											<span> - Usuario</span>
										</div>
									</div>
									<Nav
										as="ul"
										className="d-flex nav-pills mb-0 text-center profile-tab"
										data-toggle="slider-tab"
										id="profile-pills-tab"
										role="tablist"
									>
										<Nav.Item as="li">
											<Nav.Link eventKey="first">Feed</Nav.Link>
										</Nav.Item>
										<Nav.Item as="li">
											<Nav.Link eventKey="second">Activity</Nav.Link>
										</Nav.Item>
										<Nav.Item as="li">
											<Nav.Link eventKey="third">Friends</Nav.Link>
										</Nav.Item>
										<Nav.Item as="li">
											<Nav.Link eventKey="fourth">Profile</Nav.Link>
										</Nav.Item>
									</Nav>
								</div>
							</Card.Body>
						</Card>
					</Col>
					<Col lg="8">
						<Tab.Content className="profile-content">
							<Tab.Pane eventKey="fourth" id="profile-profile">
								<Card>
									<Card.Header>
										<div className="header-title">
											<h4 className="card-title">Profile</h4>
										</div>
									</Card.Header>
									<Card.Body>
										<div className="text-center">
											<div className="user-profile">
												<Image
													className="theme-color-default-img  rounded-pill avatar-130 img-fluid"
													src={image || avatars11}
													alt="profile-pic"
												/>
												<Image
													className="theme-color-purple-img rounded-pill avatar-130 img-fluid"
													src={ image || avatars22}
													alt="profile-pic"
												/>
												<Image
													className="theme-color-blue-img rounded-pill avatar-130 img-fluid"
													src={image || avatars33}
													alt="profile-pic"
												/>
												<Image
													className="theme-color-green-img rounded-pill avatar-130 img-fluid"
													src={image || avatars55}
													alt="profile-pic"
												/>
												<Image
													className="theme-color-yellow-img rounded-pill avatar-130 img-fluid"
													src={image || avatars66}
													alt="profile-pic"
												/>
												<Image
													className="theme-color-pink-img rounded-pill avatar-130 img-fluid"
													src={image || avatars44}
													alt="profile-pic"
												/>
											</div>
											<div className="mt-3">
												<h3 className="d-inline-block">
													{user.displayName || user.email}
												</h3>
												<p className="d-inline-block pl-3"> - Usuario</p>
												<p className="mb-0">
													Lorem Ipsum is simply dummy text of the printing and
													typesetting industry. Lorem Ipsum has been the
													industry's standard dummy text ever since the 1500s
												</p>
											</div>
										</div>
									</Card.Body>
								</Card>
								<Card>
									<Card.Header>
										<div className="header-title">
											<h4 className="card-title">Información de usuario</h4>
										</div>
									</Card.Header>
									<Card.Body>
										<div className="user-bio">
											<p>
												Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text'
											</p>
										</div>
										<div className="mt-2">
											<h6 className="mb-1">Se unió:</h6>
											<p>{ user.metadata.creationTime }</p>
										</div>
										<div className="mt-2">
											<h6 className="mb-1">Vive en:</h6>
											<p>Argentina</p>
										</div>
										<div className="mt-2">
											<h6 className="mb-1">Email:</h6>
											<p>
												<Link to="#" className="text-body">
													{user.email}
												</Link>
											</p>
										</div>
										<div className="mt-2">
											<h6 className="mb-1">Url:</h6>
											<p>
												<Link to="#" className="text-body" target="_blank">
													
												</Link>
											</p>
										</div>
										<div className="mt-2">
											<h6 className="mb-1">Contact:</h6>
											<p>
												<Link to="#" className="text-body">
													
												</Link>
											</p>
										</div>
									</Card.Body>
								</Card>
							</Tab.Pane>
						</Tab.Content>
					</Col>
				</Row>
			</Tab.Container>
		</>
	);
};

export default UserProfile;
