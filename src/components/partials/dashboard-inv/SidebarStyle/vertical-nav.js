import React, { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import {
	Accordion,
	useAccordionButton,
	AccordionContext,
} from "react-bootstrap";

function CustomToggle({ children, eventKey, onClick }) {
	const { activeEventKey } = useContext(AccordionContext);

	const decoratedOnClick = useAccordionButton(eventKey, (active) =>
		onClick({ state: !active, eventKey: eventKey })
	);

	const isCurrentEventKey = activeEventKey === eventKey;

	return (
		<Link
			to="#"
			aria-expanded={isCurrentEventKey ? "true" : "false"}
			className="nav-link"
			role="button"
			onClick={(e) => {
				decoratedOnClick(isCurrentEventKey);
			}}
		>
			{children}
		</Link>
	);
}

const VerticalNav = () => {
	const [activeMenu, setActiveMenu] = useState(false);
	//location
	let location = useLocation();
	return (
		<>
			<Accordion as="ul" className="navbar-nav iq-main-menu">
				<li className="nav-item static-item">
					<Link className="nav-link static-item disabled" to="#" tabIndex="-1">
						<span className="default-icon">Inicio</span>
						<span className="mini-icon">-</span>
					</Link>
				</li>
				<li className="nav-item">
					<Link
						className={`${
							location.pathname === "/dashboard-inv" ? "active" : ""
						} nav-link `}
						aria-current="page"
						to="/dashboard-inv"
						onClick={() => {}}
					>
						<i className="icon">
							<svg
								width="25"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M8.92574 16.39H14.3119C14.7178 16.39 15.0545 16.05 15.0545 15.64C15.0545 15.23 14.7178 14.9 14.3119 14.9H8.92574C8.5198 14.9 8.18317 15.23 8.18317 15.64C8.18317 16.05 8.5198 16.39 8.92574 16.39ZM12.2723 9.9H8.92574C8.5198 9.9 8.18317 10.24 8.18317 10.65C8.18317 11.06 8.5198 11.39 8.92574 11.39H12.2723C12.6782 11.39 13.0149 11.06 13.0149 10.65C13.0149 10.24 12.6782 9.9 12.2723 9.9ZM19.3381 9.02561C19.5708 9.02292 19.8242 9.02 20.0545 9.02C20.302 9.02 20.5 9.22 20.5 9.47V17.51C20.5 19.99 18.5099 22 16.0545 22H8.17327C5.59901 22 3.5 19.89 3.5 17.29V6.51C3.5 4.03 5.5 2 7.96535 2H13.2525C13.5099 2 13.7079 2.21 13.7079 2.46V5.68C13.7079 7.51 15.203 9.01 17.0149 9.02C17.4381 9.02 17.8112 9.02316 18.1377 9.02593C18.3917 9.02809 18.6175 9.03 18.8168 9.03C18.9578 9.03 19.1405 9.02789 19.3381 9.02561ZM19.6111 7.566C18.7972 7.569 17.8378 7.566 17.1477 7.559C16.0527 7.559 15.1507 6.648 15.1507 5.542V2.906C15.1507 2.475 15.6685 2.261 15.9646 2.572C16.5004 3.13476 17.2368 3.90834 17.9699 4.67837C18.7009 5.44632 19.4286 6.21074 19.9507 6.759C20.2398 7.062 20.0279 7.565 19.6111 7.566Z"
									fill="currentColor"
								></path>
							</svg>
						</i>
						<span className="item-name">Mascotas</span>
					</Link>
				</li>
				<li>
					<hr className="hr-horizontal" />
				</li>
				<li className="nav-item static-item">
					<Link className="nav-link static-item disabled" to="#" tabIndex="-1">
						<span className="default-icon">Próximas Características</span>
						<span className="mini-icon">-</span>
					</Link>
				</li>
				<Accordion.Item as="li" eventKey="horizontal-menu" bsPrefix="nav-item">
					<CustomToggle
						eventKey="horizontal-menu"
						onClick={(activeKey) => setActiveMenu(activeKey)}
					>
						<i className="icon">
							<svg
								width="25"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M20.4023 13.58C20.76 13.77 21.036 14.07 21.2301 14.37C21.6083 14.99 21.5776 15.75 21.2097 16.42L20.4943 17.62C20.1162 18.26 19.411 18.66 18.6855 18.66C18.3278 18.66 17.9292 18.56 17.6022 18.36C17.3365 18.19 17.0299 18.13 16.7029 18.13C15.6911 18.13 14.8429 18.96 14.8122 19.95C14.8122 21.1 13.872 22 12.6968 22H11.3069C10.1215 22 9.18125 21.1 9.18125 19.95C9.16081 18.96 8.31259 18.13 7.30085 18.13C6.96361 18.13 6.65702 18.19 6.40153 18.36C6.0745 18.56 5.66572 18.66 5.31825 18.66C4.58245 18.66 3.87729 18.26 3.49917 17.62L2.79402 16.42C2.4159 15.77 2.39546 14.99 2.77358 14.37C2.93709 14.07 3.24368 13.77 3.59115 13.58C3.87729 13.44 4.06125 13.21 4.23498 12.94C4.74596 12.08 4.43937 10.95 3.57071 10.44C2.55897 9.87 2.23194 8.6 2.81446 7.61L3.49917 6.43C4.09191 5.44 5.35913 5.09 6.38109 5.67C7.27019 6.15 8.425 5.83 8.9462 4.98C9.10972 4.7 9.20169 4.4 9.18125 4.1C9.16081 3.71 9.27323 3.34 9.4674 3.04C9.84553 2.42 10.5302 2.02 11.2763 2H12.7172C13.4735 2 14.1582 2.42 14.5363 3.04C14.7203 3.34 14.8429 3.71 14.8122 4.1C14.7918 4.4 14.8838 4.7 15.0473 4.98C15.5685 5.83 16.7233 6.15 17.6226 5.67C18.6344 5.09 19.9118 5.44 20.4943 6.43L21.179 7.61C21.7718 8.6 21.4447 9.87 20.4228 10.44C19.5541 10.95 19.2475 12.08 19.7687 12.94C19.9322 13.21 20.1162 13.44 20.4023 13.58ZM9.10972 12.01C9.10972 13.58 10.4076 14.83 12.0121 14.83C13.6165 14.83 14.8838 13.58 14.8838 12.01C14.8838 10.44 13.6165 9.18 12.0121 9.18C10.4076 9.18 9.10972 10.44 9.10972 12.01Z"
									fill="currentColor"
								></path>
							</svg>
						</i>
						<span className="item-name">
							En Desarrollo
							<span className="badge rounded-pill bg-success">Prox</span>
						</span>
						<i className="right-icon">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="18"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M9 5l7 7-7 7"
								/>
							</svg>
						</i>
					</CustomToggle>
					<Accordion.Collapse eventKey="horizontal-menu">
						<ul className="sub-nav">
							<li className="nav-item">
								<Link
									className={`${
										location.pathname === "/location" ? "active" : ""
									} nav-link disabled`}
									to="/location"
								>
									<i className="icon">
										<svg
											width="20"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M3.5 10.3178C3.5 5.71789 7.34388 2 11.9934 2C16.6561 2 20.5 5.71789 20.5 10.3178C20.5 12.6357 19.657 14.7876 18.2695 16.6116C16.7388 18.6235 14.8522 20.3765 12.7285 21.7524C12.2425 22.0704 11.8039 22.0944 11.2704 21.7524C9.13474 20.3765 7.24809 18.6235 5.7305 16.6116C4.34198 14.7876 3.5 12.6357 3.5 10.3178ZM9.19423 10.5768C9.19423 12.1177 10.4517 13.3297 11.9934 13.3297C13.5362 13.3297 14.8058 12.1177 14.8058 10.5768C14.8058 9.0478 13.5362 7.77683 11.9934 7.77683C10.4517 7.77683 9.19423 9.0478 9.19423 10.5768Z"
												fill="currentColor"
											></path>
										</svg>
									</i>
									<i className="sidenav-mini-icon"> </i>
									<span className="item-name"> Mascota cercana </span>
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link disabled" to="/vet-user">
									<i className="icon">
										<svg
											width="20"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M17.294 7.29105C17.294 10.2281 14.9391 12.5831 12 12.5831C9.0619 12.5831 6.70601 10.2281 6.70601 7.29105C6.70601 4.35402 9.0619 2 12 2C14.9391 2 17.294 4.35402 17.294 7.29105ZM12 22C7.66237 22 4 21.295 4 18.575C4 15.8539 7.68538 15.1739 12 15.1739C16.3386 15.1739 20 15.8789 20 18.599C20 21.32 16.3146 22 12 22Z"
												fill="currentColor"
											></path>
										</svg>
									</i>
									<i className="sidenav-mini-icon"> </i>
									<span className="item-name">Usuario Veterinario</span>
								</Link>
							</li>
							<li className="nav-item">
								<Link
									className={`${
										location.pathname === "/post" ? "active" : ""
									} nav-link disabled`}
									to="/post"
								>
									<i className="icon svg-icon">
										<svg
											width="20"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M4 2.00004C4 1.44776 4.44771 1.00004 5 1.00004L13.5721 1C13.8454 1 14.1068 1.11184 14.2955 1.30953L19.7234 6.99588C19.9009 7.18191 20 7.42919 20 7.68636V22C20 22.5523 19.5523 23 19 23H5C4.44772 23 4 22.5523 4 22V2.00004Z"
												fill="currentColor"
											></path>
										</svg>
									</i>
									<i className="sidenav-mini-icon"> </i>
									<span className="item-name">Publicaciones</span>
								</Link>
							</li>
							<li className="nav-item">
								<Link
									className={`${
										location.pathname === "/adoptions" ? "active" : ""
									} nav-link disabled`}
									to="/adoptions"
								>
									<i className="icon">
										<svg
											width="20"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M15.85 2.50065C16.481 2.50065 17.111 2.58965 17.71 2.79065C21.401 3.99065 22.731 8.04065 21.62 11.5806C20.99 13.3896 19.96 15.0406 18.611 16.3896C16.68 18.2596 14.561 19.9196 12.28 21.3496L12.03 21.5006L11.77 21.3396C9.48102 19.9196 7.35002 18.2596 5.40102 16.3796C4.06102 15.0306 3.03002 13.3896 2.39002 11.5806C1.26002 8.04065 2.59002 3.99065 6.32102 2.76965C6.61102 2.66965 6.91002 2.59965 7.21002 2.56065H7.33002C7.61102 2.51965 7.89002 2.50065 8.17002 2.50065H8.28002C8.91002 2.51965 9.52002 2.62965 10.111 2.83065H10.17C10.21 2.84965 10.24 2.87065 10.26 2.88965C10.481 2.96065 10.69 3.04065 10.89 3.15065L11.27 3.32065C11.3618 3.36962 11.4649 3.44445 11.554 3.50912C11.6104 3.55009 11.6612 3.58699 11.7 3.61065C11.7163 3.62028 11.7329 3.62996 11.7496 3.63972C11.8354 3.68977 11.9247 3.74191 12 3.79965C13.111 2.95065 14.46 2.49065 15.85 2.50065ZM18.51 9.70065C18.92 9.68965 19.27 9.36065 19.3 8.93965V8.82065C19.33 7.41965 18.481 6.15065 17.19 5.66065C16.78 5.51965 16.33 5.74065 16.18 6.16065C16.04 6.58065 16.26 7.04065 16.68 7.18965C17.321 7.42965 17.75 8.06065 17.75 8.75965V8.79065C17.731 9.01965 17.8 9.24065 17.94 9.41065C18.08 9.58065 18.29 9.67965 18.51 9.70065Z"
												fill="currentColor"
											></path>
										</svg>
									</i>
									<i className="sidenav-mini-icon"> B </i>
									<span className="item-name">Gestión de Adopciones</span>
								</Link>
							</li>
						</ul>
					</Accordion.Collapse>
				</Accordion.Item>
				<li>
					<hr className="hr-horizontal" />
				</li>
			</Accordion>
		</>
	);
};

export default VerticalNav;
