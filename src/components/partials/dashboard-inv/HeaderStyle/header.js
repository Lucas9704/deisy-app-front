import React, { useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";

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
					<div className="input-group search-input">
						<span className="input-group-text" id="search-input">
							<svg
								width="18"
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
						</span>
						<input
							type="search"
							className="form-control"
							placeholder="Buscar..."
						/>
					</div>
					<div>
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
					</div>
				</Container>
			</Navbar>
		</>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
