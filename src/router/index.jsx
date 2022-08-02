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
	DashboardInv,
	ForgotPassword,
} from "../pages";
import { ProtectedRoute } from "./ProtectedRoute";

const IndexRoutes = () => {
	return (
		<>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/login" element={<Login />} />
				<Route path="auth/register" element={<SignUp />} />
				<Route path="auth/forgot-password" element={<ForgotPassword />} />
				<Route path="/dashboard/*" element={
					<ProtectedRoute>
						<Dashboard />
					</ProtectedRoute>
					
				}>
					<Route path="profile" />
                    <Route path="add" />
                    <Route path="pet/:id" />
				</Route>
				<Route path="dashboard-inv" element={<DashboardInv />} />
				<Route path="/*" element={<NotFound />} />
			</Routes>
		</>
	);
};

export default IndexRoutes;
