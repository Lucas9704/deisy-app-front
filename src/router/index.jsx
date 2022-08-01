//router
import { Routes, Route } from "react-router-dom";
//layout pages
import {
	Home,
	About,
	Contact,
	NotFound,
	Login,
	SignUp,
	Dashboard,
} from "../pages";

const IndexRoutes = () => {
	return (
		<>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/login" element={<Login />} />
				<Route path="auth/register" element={<SignUp />} />
				<Route path="/dashboard" element={<Dashboard />}>
					<Route path="profile" />
                    <Route path="add" />
                    <Route path="pet/:id" />
				</Route>
				<Route path="/*" element={<NotFound />} />
			</Routes>
		</>
	);
};

export default IndexRoutes;
