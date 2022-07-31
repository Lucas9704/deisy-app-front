import React from "react";
import PetsList from "../views/dashboard/PetsList";
import { Routes, Route } from "react-router-dom";
import UserProfile from "../views/dashboard/UserProfile";

//TransitionGroup
import { TransitionGroup, CSSTransition } from "react-transition-group";


const DefaultRouter = () => {
	return (
		<TransitionGroup>
			<CSSTransition classNames="fadein" timeout={300}>
				<Routes>
					<Route path="/" element={<PetsList/>} />
					<Route path="/pet/:id" element={<PetsList/>} />
					<Route path="/add" element={<PetsList/>} />
					<Route path="/profile" element={<UserProfile/>} />
				</Routes>
			</CSSTransition>
		</TransitionGroup>
	);
};

export default DefaultRouter;
