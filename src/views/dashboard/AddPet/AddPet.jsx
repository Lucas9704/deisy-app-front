import React, { useState } from "react";
import { Row, Col, Form, Image, InputGroup, Button } from "react-bootstrap";
import Card from "../../../components/Card";
import { Link } from "react-router-dom";
import { postPet } from "../../../services/postPet";
// img
import imgsuccess from "../../../assets/images/pages/img-success.png";

const AddPet = () => {
	const [show, AccountShow] = useState("A");
	const [petNew, setPetNew] = useState({
		name: "",
		type: "",
		gender: "",
		approximate_age: "",
		description: "",
		adoption_status: "",
		approximate_location: "",
		image_url: "",
	});
	const [validated, setValidated] = useState(false);

	const handleSubmit = async(event) => {
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}

		setValidated(true);
		try {
			await postPet(petNew);
			AccountShow("Image");
		}
		catch (error) {
			console.log(error);
		}
	};

	const handleChange = ({ target: { name, value } }) =>{
		if (name === "approximate_age") {
			value = parseInt(value);
		}
		if (name === "adoption_status") {
			value = value === "true";
		}
		setPetNew({ ...petNew, [name]: value });
	}
		

	return (
		<>
			<div>
				<Row>
					<Col sm="12" lg="12">
						<Card>
							<Card.Header className="d-flex justify-content-between">
								<div className="header-title">
									<h4 className="card-title">Agregar Mascota</h4>
								</div>
							</Card.Header>
							<Card.Body>
								<Form
									id="form-wizard1"
									className="text-center mt-3"
									noValidate
									validated={validated}
									onSubmit={handleSubmit}
								>
									<ul id="top-tab-list" className="p-0 row list-inline">
										<li
											className={` ${show === "Image" ? " active done" : ""} ${
												show === "Personal" ? " active done" : ""
											} ${show === "Account" ? " active done" : ""} ${
												show === "A" ? "active" : ""
											} col-lg-3 col-md-6 text-start mb-2 active`}
											id="account"
										>
											<Link to="#">
												<div className="iq-icon me-3">
													<svg
														className="svg-icon"
														xmlns="http://www.w3.org/2000/svg"
														height="20"
														width="20"
														fill="none"
														viewBox="0 0 24 24"
														stroke="currentColor"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth="2"
															d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
														/>
													</svg>
												</div>
												<span>Basicos</span>
											</Link>
										</li>
										<li
											id="personal"
											className={`${
												show === "Personal" ? " active done" : ""
											} ${show === "Image" ? " active done" : ""} ${
												show === "Account" ? "active " : ""
											} col-lg-3 col-md-6 mb-2 text-start`}
										>
											<Link to="#">
												<div className="iq-icon me-3">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														height="20"
														width="20"
														fill="none"
														viewBox="0 0 24 24"
														stroke="currentColor"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth="2"
															d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
														/>
													</svg>
												</div>
												<span>Estado</span>
											</Link>
										</li>
										<li
											id="payment"
											className={`${show === "Image" ? " active done" : ""} ${
												show === "Personal" ? "active" : ""
											} col-lg-3 col-md-6 mb-2 text-start`}
										>
											<Link to="#">
												<div className="iq-icon me-3">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														height="20"
														width="20"
														fill="none"
														viewBox="0 0 24 24"
														stroke="currentColor"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth="2"
															d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
														/>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth="2"
															d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
														/>
													</svg>
												</div>
												<span>Imagenes</span>
											</Link>
										</li>
										<li
											id="confirm"
											className={`${
												show === "Image" ? " active " : ""
											} col-lg-3 col-md-6 mb-2 text-start`}
										>
											<Link to="#">
												<div className="iq-icon me-3">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														height="20"
														width="20"
														fill="none"
														viewBox="0 0 24 24"
														stroke="currentColor"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth="2"
															d="M5 13l4 4L19 7"
														/>
													</svg>
												</div>
												<span>Finalizar</span>
											</Link>
										</li>
									</ul>
									<fieldset
										className={`${show === "A" ? "d-block" : "d-none"}`}
									>
										<div className="form-card text-start">
											<div className="row">
												<div className="col-7">
													<h3 className="mb-4">Información Básica: </h3>
												</div>
												<div className="col-5">
													<h2 className="steps">Paso 1 - 4</h2>
												</div>
											</div>
											<div className="row">
												<div className="col-md-6">
													<Form.Group className="form-group">
														<Form.Label className="form-label">
															Nombre: *
														</Form.Label>
														<InputGroup>
															<Form.Control
																type="text"
																className="form-control"
																name="name"
																id="name"
																placeholder="Nombre de la mascota"
																onChange={handleChange}
																required
															/>
															<Form.Control.Feedback type="invalid">
																Ingrese un Nombre.
															</Form.Control.Feedback>
															<Form.Control.Feedback>
																Correcto
															</Form.Control.Feedback>
														</InputGroup>
													</Form.Group>
												</div>
												<div className="col-md-6">
													<Form.Group className="form-group">
														<Form.Label className="form-label">
															Raza: *
														</Form.Label>
														<InputGroup>
															<Form.Select
																type="select"
																className="form-control"
																name="type"
																id="type"
																onChange={handleChange}
																required
															>
																<option value=""> Selecione un tipo </option>
																<option value="Dog">🐶Perro🐕</option>
																<option value="Cat">😺Gato🐈</option>
															</Form.Select>
															<Form.Control.Feedback type="invalid">
																Seleccione un tipo
															</Form.Control.Feedback>
															<Form.Control.Feedback>
																Correcto
															</Form.Control.Feedback>
														</InputGroup>
													</Form.Group>
												</div>
												<div className="col-md-6">
													<Form.Group className="form-group">
														<Form.Label className="form-label">
															Genero: *
														</Form.Label>
														<InputGroup>
															<Form.Select
																type="select"
																className="form-control"
																name="gender"
																id="gender"
																onChange={handleChange}
																required
															>
																<option value="">Selecione un tipo</option>
																<option value="Male">Macho</option>
																<option value="Female">Hembra</option>
															</Form.Select>
															<Form.Control.Feedback type="invalid">
																Seleccione un genero
															</Form.Control.Feedback>
															<Form.Control.Feedback>
																Correcto
															</Form.Control.Feedback>
														</InputGroup>
													</Form.Group>
												</div>
												<div className="col-md-6">
													<Form.Group className="form-group">
														<Form.Label className="form-label">
															Edad Aproximada: *
														</Form.Label>
														<InputGroup>
															<Form.Select
																type="select"
																className="form-control"
																name="approximate_age"
																id="approximate_age"
																onChange={handleChange}
																required
															>
																<option value="">Selecione una</option>
																<option value="1">1</option>
																<option value="2">2</option>
																<option value="3">3</option>
																<option value="4">4</option>
																<option value="5">5</option>
																<option value="6">6</option>
																<option value="7">7</option>
																<option value="8">8</option>
																<option value="9">9</option>
																<option value="10">10</option>
																<option value="11">11</option>
																<option value="12">12</option>
																<option value="13">13</option>
																<option value="14">14</option>
																<option value="15">15</option>
																<option value="16">16</option>
																<option value="17">17</option>
																<option value="18">18</option>
																<option value="19">19</option>
																<option value="20">20</option>
															</Form.Select>
															<Form.Control.Feedback type="invalid">
																Seleccione una edad
															</Form.Control.Feedback>
															<Form.Control.Feedback>
																Correcto
															</Form.Control.Feedback>
														</InputGroup>
													</Form.Group>
												</div>
											</div>
										</div>
										<Button
											type="button"
											name="next"
											className="btn btn-primary next action-button float-end"
											value="Next"
											onClick={() => AccountShow("Account")}
										>
											Siguiente
										</Button>
									</fieldset>
									<fieldset
										className={`${show === "Account" ? "d-block" : "d-none"}`}
									>
										<div className="form-card text-start">
											<div className="row">
												<div className="col-7">
													<h3 className="mb-4">Estado:</h3>
												</div>
												<div className="col-5">
													<h2 className="steps">Paso 2 - 4</h2>
												</div>
											</div>
											<div className="row">
												<div className="col-md-6">
													<Form.Group className="form-group">
														<Form.Label className="form-label">
															Estado de adopción: *
														</Form.Label>
														<InputGroup>
															<Form.Select
																type="select"
																className="form-control"
																name="adoption_status"
																id="adoption_status"
																onChange={handleChange}
																required
															>
																<option value=""> Selecionar </option>
																<option value={true}>Disponible </option>
																<option value={false}>Adoptado/a</option>
															</Form.Select>
															<Form.Control.Feedback type="invalid">
																Seleccione una opción
															</Form.Control.Feedback>
															<Form.Control.Feedback>
																Correcto
															</Form.Control.Feedback>
														</InputGroup>
													</Form.Group>
												</div>
												<div className="col-md-6">
												<Form.Group className="form-group">
														<Form.Label className="form-label">
															Ubicación (Aproximada): *
														</Form.Label>
														<InputGroup>
															<Form.Control
																type="text"
																className="form-control"
																name="approximate_location"
																id="approximate_location"
																placeholder="Lugar o calles"
																onChange={handleChange}
																required
															/>
															<Form.Control.Feedback type="invalid">
																Ingrese un Lugar aproximado.
															</Form.Control.Feedback>
															<Form.Control.Feedback>
																Correcto
															</Form.Control.Feedback>
														</InputGroup>
													</Form.Group>
												</div>
												<div className="col-md-6">
													<Form.Group className="form-group">
														<Form.Label className="form-label">
															Descripción: *
														</Form.Label>
														<InputGroup>
															<Form.Control
																as="textarea"
																rows={3}
																className="form-control"
																name="description"
																id="description"
																onChange={handleChange}
																required
															/>
															<Form.Control.Feedback type="invalid">
																Ingrese la descripción.
															</Form.Control.Feedback>
															<Form.Control.Feedback>
																Correcto
															</Form.Control.Feedback>
														</InputGroup>
														<Form.Text>
															Agregue una descripción breve de la mascota
														</Form.Text>
													</Form.Group>
												</div>
											</div>
										</div>
										<button
											type="button"
											name="next"
											className="btn btn-primary next action-button float-end"
											value="Next"
											onClick={() => AccountShow("Personal")}
										>
											Next
										</button>
										<button
											type="button"
											name="previous"
											className="btn btn-dark previous action-button-previous float-end me-1"
											value="Previous"
											onClick={() => AccountShow("A")}
										>
											Previous
										</button>
									</fieldset>
									<fieldset
										className={`${show === "Personal" ? "d-block" : "d-none"}`}
									>
										<div className="form-card text-start">
											<div className="row">
												<div className="col-7">
													<h3 className="mb-4">Subir imagenes:</h3>
												</div>
												<div className="col-5">
													<h2 className="steps">Paso 3 - 4</h2>
												</div>
											</div>
											<Form.Group className="form-group">
														<Form.Label className="form-label">
															Subir URL de la Imagen
														</Form.Label>
														<InputGroup>
															<Form.Control
																type="text"
																className="form-control"
																name="image_url"
																id="image_url"
																onChange={handleChange}
																required
															/>
															<Form.Control.Feedback type="invalid">
																Coloque una URL de la imagen.
															</Form.Control.Feedback>
															<Form.Control.Feedback>
																Correcto
															</Form.Control.Feedback>
														</InputGroup>
													</Form.Group>
											<Form.Group className="form-group">
												<Form.Label className="form-label">
													Subir una imagen:   (Proximamente)
												</Form.Label>
												<Form.Control
													type="file"
													className="form-control"
													name="pic-2"
													accept="image/*"
													disabled
												/>
											</Form.Group>
										</div>
										<button
											type="button"
											name="next"
											className="btn btn-primary next action-button float-end"
											value="Submit"
											onClick={() => AccountShow("Image")}
										>
											Submit
										</button>
										<Button type="submit">Submit form</Button>
										<button
											type="button"
											name="previous"
											className="btn btn-dark previous action-button-previous float-end me-1"
											value="Previous"
											onClick={() => AccountShow("Account")}
										>
											Previous
										</button>
									</fieldset>
									<fieldset
										className={`${show === "Image" ? "d-block" : "d-none"}`}
									>
										<div className="form-card">
											<div className="row">
												<div className="col-7">
													<h3 className="mb-4 text-left">Finish:</h3>
												</div>
												<div className="col-5">
													<h2 className="steps">Step 4 - 4</h2>
												</div>
											</div>
											<br />
											<br />
											<h2 className="text-success text-center">
												<strong>SUCCESS !</strong>
											</h2>
											<br />
											<div className="row justify-content-center">
												<div className="col-3">
													{" "}
													<Image
														src={imgsuccess}
														className="img-fluid"
														alt="fit-image"
													/>{" "}
												</div>
											</div>
											<br />
											<br />
											<div className="row justify-content-center">
												<div className="col-7 text-center">
													<h5 className="purple-text text-center">
														You Have Successfully Signed Up
													</h5>
												</div>
											</div>
										</div>
									</fieldset>
								</Form>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</div>
		</>
	);
};

export default AddPet;
