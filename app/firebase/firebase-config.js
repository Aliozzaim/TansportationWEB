// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiq1wX5uz30OqM3mA0TEJ-6S4nVUgUQuo",
  authDomain: "nakilport-d2cea.firebaseapp.com",
  projectId: "nakilport-d2cea",
  storageBucket: "nakilport-d2cea.appspot.com",
  messagingSenderId: "805514510538",
  appId: "1:805514510538:web:4348d00cd5839abcb73433",
  measurementId: "G-DWXS3N5TSC",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const auth = getAuth(app);

export default auth;
