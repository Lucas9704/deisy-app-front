import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav, Dropdown, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomToggle from "../../../dropdowns";
import { bindActionCreators } from "redux";
import { useAuth } from "../../../../contexts/authContext";
import { useSearchPets } from "../../../../contexts/searchPetsContext";

//img
import avatars1 from "../../../../assets/images/avatars/01.png";
import avatars2 from "../../../../assets/images/avatars/avtar_1.png";
import avatars3 from "../../../../assets/images/avatars/avtar_2.png";
import avatars4 from "../../../../assets/images/avatars/avtar_3.png";
import avatars5 from "../../../../assets/images/avatars/avtar_4.png";
import avatars6 from "../../../../assets/images/avatars/avtar_5.png";
// logo
import Logo from "../../components/logo";

// store
import {
	NavbarstyleAction,
	getDirMode,
	SchemeDirAction,
	getNavbarStyleMode,
	getSidebarActiveMode,
	SidebarActiveStyleAction,
	getDarkMode,
	ModeAction,
	SidebarColorAction,
	getSidebarColorMode,
	getSidebarTypeMode,
} from "../../../../store/setting/setting";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
	return {
		darkMode: getDarkMode(state),
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
		},
		dispatch
	),
});

const Header = (props) => {
	const { logout, user } = useAuth();
	const { setSearchPet } = useSearchPets();
	const [inputSearch, setInputSearch] = useState("");
	const image = user.photoURL;

	const handleSearch = ({target:{ value}}) => 
		setInputSearch(value);

	const handleSubmit = (e) => {
		setSearchPet(inputSearch);
	}

	const handleKeyPress = (e) => {
		if (e.key === "Enter") {
			handleSubmit();
		}
	}

	const handleLogout = async () => {
		try {
			await logout();
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		// navbarstylemode
		const navbarstyleMode1 = sessionStorage.getItem("Navbarstyle-mode");
		if (navbarstyleMode1 === null) {
			props.NavbarstyleAction(props.navbarstylemode);
		} else {
			props.NavbarstyleAction(navbarstyleMode1);
		}
	});

	const minisidebar = () => {
		document.getElementsByTagName("ASIDE")[0].classList.toggle("sidebar-mini");
	};

	return (
		<>
			<Navbar expand="lg" variant="light" className="nav iq-navbar">
				<Container fluid className="navbar-inner">
					<Link to="/dashboard" className="navbar-brand">
						<Logo width="30" />
						<h4 className="logo-title">Deisy App</h4>
					</Link>
					<div
						className="sidebar-toggle"
						data-toggle="sidebar"
						data-active="true"
						onClick={minisidebar}
					>
						<i className="icon">
							<svg width="20px" height="20px" viewBox="0 0 24 24">
								<path
									fill="currentColor"
									d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
								/>
							</svg>
						</i>
					</div>
					<div className="input-group search-input" id="search">
						<span className="input-group-text" id="search-input">
							<Button
								className="input-group-text p-0 d-flex align-items-center"
								type="button"
								variant="link"
								onClick={handleSubmit}
							>
								<svg
									width="20"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<circle
										cx="11.7669"
										cy="11.7666"
										r="8.98856"
										stroke="currentColor"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									></circle>
									<path
										d="M18.0186 18.4851L21.5426 22"
										stroke="currentColor"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									></path>
								</svg>
							</Button>
						</span>
						<input
							type="search"
							className="form-control"
							placeholder="Buscar..."
							name="search"
							onChange={handleSearch}
							onKeyPress={handleKeyPress}
						/>
					</div>
					<Navbar.Toggle aria-controls="navbarSupportedContent">
						<span className="navbar-toggler-icon">
							<span className="mt-2 navbar-toggler-bar bar1"></span>
							<span className="navbar-toggler-bar bar2"></span>
							<span className="navbar-toggler-bar bar3"></span>
						</span>
					</Navbar.Toggle>
					<Navbar.Collapse id="navbarSupportedContent">
						<Nav as="ul" className="mb-2 ms-auto navbar-list mb-lg-0">
							<Dropdown as="li" className="nav-item">
								<Dropdown.Toggle
									as={CustomToggle}
									variant=" nav-link py-0 d-flex align-items-center"
									href="#"
									id="navbarDropdown"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									<img
										src={image || avatars1}
										alt="User-Profile"
										className="theme-color-default-img img-fluid avatar avatar-50 avatar-rounded"
									/>
									<img
										src={image || avatars2}
										alt="User-Profile"
										className="theme-color-purple-img img-fluid avatar avatar-50 avatar-rounded"
									/>
									<img
										src={image || avatars3}
										alt="User-Profile"
										className="theme-color-blue-img img-fluid avatar avatar-50 avatar-rounded"
									/>
									<img
										src={image || avatars5}
										alt="User-Profile"
										className="theme-color-green-img img-fluid avatar avatar-50 avatar-rounded"
									/>
									<img
										src={image || avatars6}
										alt="User-Profile"
										className="theme-color-yellow-img img-fluid avatar avatar-50 avatar-rounded"
									/>
									<img
										src={image || avatars4}
										alt="User-Profile"
										className="theme-color-pink-img img-fluid avatar avatar-50 avatar-rounded"
									/>
									<div className="caption ms-3 d-none d-md-block ">
										<h6 className="mb-0 caption-title">
											{user.displayName || user.email}
										</h6>
										<p className="mb-0 caption-sub-title">App user</p>
									</div>
								</Dropdown.Toggle>
								<Dropdown.Menu
									className="dropdown-menu-end"
									aria-labelledby="navbarDropdown"
								>
									<Dropdown.Item>
										<Link to="profile" className="dropdown-item">
											Perfil
										</Link>
									</Dropdown.Item>
									<Dropdown.Item>
										<Link to="settings" className="dropdown-item">
											Configuración de privacidad
										</Link>
									</Dropdown.Item>
									<Dropdown.Divider />
									<Dropdown.Item>
										<Button className="dropdown-item" onClick={handleLogout}>
											Cerrar sesión
										</Button>
									</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
