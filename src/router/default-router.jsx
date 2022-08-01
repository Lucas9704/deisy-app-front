import React from "react";
import { Routes, Route } from "react-router-dom";

//components views
import PetsList from "../views/dashboard/PetsList";
import UserProfile from "../views/dashboard/UserProfile";
import AddPet from "../views/dashboard/AddPet";
import PetDescription from "../views/dashboard/PetDescription";

//TransitionGroup
import { TransitionGroup, CSSTransition } from "react-transition-group";


const DefaultRouter = () => {
	return (
		<TransitionGroup>
			<CSSTransition classNames="fadein" timeout={300}>
				<Routes>
					<Route path="/" element={<PetsList/>} />
					<Route path="/pet/:id" element={<PetDescription/>} />
					<Route path="/add" element={<AddPet />} />
					<Route path="/profile" element={<UserProfile/>} />
				</Routes>
			</CSSTransition>
		</TransitionGroup>
	);
};

export default DefaultRouter;
