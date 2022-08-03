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
import { ProtectedRoute, ProtectedRouteLogin } from "./ProtectedRoute";
import PetDescription from "../views/dashboard/PetDescription";

const IndexRoutes = () => {
	return (
		<>
			<Routes>
				<Route exact path="/" element={
					<ProtectedRouteLogin>
					<Home />
					</ProtectedRouteLogin>
				} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/login" element={
					<ProtectedRouteLogin>
						<Login />
					</ProtectedRouteLogin>
				} />
				<Route path="auth/register" element={
					<ProtectedRouteLogin>
						<SignUp />
					</ProtectedRouteLogin>
				} />
				<Route path="auth/forgot-password" element={
					<ProtectedRouteLogin>
						<ForgotPassword />
					</ProtectedRouteLogin>
				} />
				<Route path="dashboard-inv" element={
					<ProtectedRouteLogin>
						<DashboardInv />
					</ProtectedRouteLogin>
				}>
					<Route path="pet/:id" element={<PetDescription />} />
				</Route>
				<Route path="/dashboard/*" element={
					<ProtectedRoute>
						<Dashboard />
					</ProtectedRoute>
				}>
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
