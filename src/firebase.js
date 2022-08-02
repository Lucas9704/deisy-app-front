import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
	apiKey: "AIzaSyC4TcQrhVrVsUk71GAkQ6fXKL9OxkvXDG8",
	authDomain: "deisy-566e4.firebaseapp.com",
	projectId: "deisy-566e4",
	storageBucket: "deisy-566e4.appspot.com",
	messagingSenderId: "197070211653",
	appId: "1:197070211653:web:d38810ebecf3c9b37bb12c",
	measurementId: "G-8F3LH24303"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);

/*import configs from "./configs";
 apiKey: configs.apiKey,
	authDomain: configs.authDomain,
	projectId: configs.projectId,
	storageBucket: configs.storageBucket,
	messagingSenderId: configs.messagingSenderId,
	appId: configs.appId,
	measurementId: configs.measurementId, */
