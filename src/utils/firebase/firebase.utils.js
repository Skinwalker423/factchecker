import { initializeApp } from 'firebase/app';
import { 
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    signInWithRedirect,
    GoogleAuthProvider
} from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration

const firebaseConfig = {
  apiKey: "AIzaSyBtIs3ZbxfSTQu_AujnQ52b_9E_YQJXxac",
  authDomain: "factchecker-fab95.firebaseapp.com",
  projectId: "factchecker-fab95",
  storageBucket: "factchecker-fab95.appspot.com",
  messagingSenderId: "31477439022",
  appId: "1:31477439022:web:92f640c1ae643acf309dbf",
  measurementId: "G-3J17QGP71E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

