// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnm6mtpvHc85f8dm_pZ5bGLQokYeOL6eU",
  authDomain: "simple-firebase-athuentication.firebaseapp.com",
  projectId: "simple-firebase-athuentication",
  storageBucket: "simple-firebase-athuentication.appspot.com",
  messagingSenderId: "461530713220",
  appId: "1:461530713220:web:3b4d33a9c68a0a3f9806d1",
  measurementId: "G-VRY8B239BF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;