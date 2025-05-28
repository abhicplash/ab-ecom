// // src/firebase.js
// import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';

// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_PROJECT_ID.appspot.com",
//   messagingSenderId: "SENDER_ID",
//   appId: "APP_ID"
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// export { auth };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
 
const firebaseConfig = {
  apiKey: "AIzaSyCzGhQqMwJZS2vdeqe_dz74mb3LOxstezA",
  authDomain: "nextexpo-e48e7.firebaseapp.com",
  projectId: "nextexpo-e48e7",
  storageBucket: "nextexpo-e48e7.firebasestorage.app",
  messagingSenderId: "1041368436642",
  appId: "1:1041368436642:web:d68056c1a83561457d6cfb",
  measurementId: "G-6S3NRG4QYQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)

export { auth }