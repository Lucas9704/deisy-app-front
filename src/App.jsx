//router
import IndexRoutes from "./router/index";

//context provider
import { AuthProvider } from "./contexts/authContext";
import { SearchPetsProvider } from "./contexts/searchPetsContext";

//scss
import "./assets/scss/hope-ui.scss";
import "./assets/scss/dark.scss";
import "./assets/scss/rtl.scss";
import "./assets/scss/custom.scss";
import "./assets/scss/customizer.scss";

function App() {
	return (
		<div className="App">
			<AuthProvider>
				<SearchPetsProvider>
					<IndexRoutes />
				</SearchPetsProvider>
			</AuthProvider>
		</div>
	);
}

export default App;
