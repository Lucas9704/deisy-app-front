import axios from "axios";

const API = axios.create({
    baseURL: "https://api.openweathermap.org/",
    timeout: 5000,
});

export { API };