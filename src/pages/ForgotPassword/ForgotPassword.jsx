import { useState } from "react";
import { Row, Col, Image, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Card from "../../components/Card";
import Logo from "../../components/partials/components/logo";
import { useAuth } from "../../contexts/authContext";

// img
import auth2 from "../../assets/images/auth/02.png";
const ForgotPassword = () => {
	const { resetPassword } = useAuth();
	const [error, setError] = useState(null);
	const [email, setEmail] = useState("");

	const navigate = useNavigate();

	const handleChange = ({ target: {name, value} }) => {
		setEmail(value );
    }

	const handleSubmit = async (e) => {
		e.preventDefault();
        setError("");
        if(!email) return setError("Email es requerido");
		try {
			await resetPassword(email.email);
			navigate("/login");
            setError("Te enviaremos un correo para restablecer tu contraseña");
		} catch (error) {
			setError(error.message);
		}
	};

	return (
		<>
			<section className="login-content">
				<Row className="m-0 align-items-center bg-white vh-100">
					<Col
						md="6"
						className="d-md-block d-none bg-primary p-0 mt-n1 vh-100 overflow-hidden"
					>
						<Image
							src={auth2}
							className="img-fluid gradient-main animated-scaleX"
							alt="images"
						/>
					</Col>
					<Col md="6" className="p-0">
						<Card className="card-transparent auth-card shadow-none d-flex justify-content-center mb-0">
							<Card.Body>
								<Link
									to="/"
									className="navbar-brand d-flex align-items-center mb-3"
								>
									<Logo width="30" />
									<h4 className="logo-title ms-3">Deisy App</h4>
								</Link>
								<h2 className="mb-2">Recupera la contraseña</h2>
								<p>
									Ingresa tu dirección de correo electrónico y te enviaremos un
									correo electrónico con instrucciones para restablecer tu
									contraseña.
								</p>
								<Form>
									<Row>
										<Col lg="12" className="col-lg-12">
											<Form.Group className="floating-label">
												<Form.Label htmlFor="email" className="form-label">
													Email
												</Form.Label>
												<Form.Control
													type="email"
													className="form-control"
													id="email"
                                                    name="email"
                                                    onChange={handleChange}
													aria-describedby="email"
													placeholder=" "
												/>
											</Form.Group>
										</Col>
									</Row>
									<Button
										onClick={handleSubmit}
										className="mt-3"
										type="button"
										variant="primary"
									>
										Reset
									</Button>
									{error && <div className="text-danger">{error}</div>}
								</Form>
							</Card.Body>
						</Card>
						<div className="sign-bg sign-bg-right">
							<svg
								version="1.0"
								xmlns="http://www.w3.org/2000/svg"
								width="350"
								height="350"
								viewBox="0 0 512.000000 512.000000"
								preserveAspectRatio="xMidYMid meet"
							>
								<g
									opacity="0.2"
									transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
									fill="#000000"
									stroke="none"
								>
									<path
										d="M1385 4763 c-11 -3 -246 -120 -521 -260 -543 -275 -559 -285 -611
-390 -59 -122 -38 -243 85 -485 118 -231 269 -454 397 -584 72 -73 112 -96
171 -96 58 0 100 32 130 96 12 28 105 337 205 686 l182 635 63 65 c35 36 84
81 108 100 25 19 44 38 43 42 -1 3 -44 49 -94 102 -93 96 -103 102 -158 89z"
									/>
									<path
										d="M3578 4675 c-51 -53 -94 -100 -95 -103 -1 -4 18 -23 43 -42 24 -19
73 -64 108 -100 l64 -65 181 -635 c100 -349 194 -660 209 -690 34 -69 65 -92
124 -92 61 0 101 23 173 96 128 130 279 353 397 584 89 176 122 281 115 368
-6 78 -42 157 -98 212 -40 40 -54 48 -824 437 -126 64 -246 119 -267 122 -35
5 -39 2 -130 -92z"
									/>
									<path
										d="M1675 3496 c-27 -8 -90 -38 -139 -66 -50 -28 -119 -67 -155 -85 -99
-51 -95 -47 -71 -88 12 -21 27 -37 33 -37 5 0 30 11 54 25 l43 26 0 -78 c0
-120 52 -214 147 -270 44 -26 47 -26 121 -14 137 21 246 90 322 203 39 59 41
66 36 113 -14 105 -94 213 -189 255 -60 26 -142 32 -202 16z m185 -132 c18
-21 7 -57 -22 -73 -24 -14 -28 -14 -47 3 -27 24 -27 61 0 79 22 16 52 12 69
-9z"
									/>
									<path
										d="M3301 3499 c-123 -24 -229 -142 -246 -274 -6 -47 -4 -54 35 -113 76
-113 185 -182 322 -203 74 -12 77 -12 121 14 95 56 149 154 148 273 l0 75 44
-25 c24 -14 48 -26 53 -26 6 0 20 16 32 37 25 42 37 31 -120 115 -63 34 -132
72 -153 85 -38 24 -136 54 -172 52 -11 -1 -40 -5 -64 -10z m47 -161 c2 -15 -5
-31 -18 -43 -20 -18 -24 -18 -48 -4 -20 11 -27 23 -27 44 0 61 86 64 93 3z"
									/>
									<path
										d="M2462 2219 c-77 -12 -181 -50 -244 -90 l-48 -31 0 -57 c0 -133 72
-318 158 -408 74 -77 139 -107 232 -107 93 0 158 30 232 107 86 90 158 275
158 408 l0 57 -48 31 c-67 43 -165 78 -256 90 -87 12 -95 12 -184 0z"
									/>
								</g>
							</svg>
						</div>
					</Col>
				</Row>
			</section>
		</>
	);
};

export default ForgotPassword;
