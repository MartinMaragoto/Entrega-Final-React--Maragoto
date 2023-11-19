
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"




// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "tienda-retro-online.firebaseapp.com",
  projectId: "tienda-retro-online",
  storageBucket: "tienda-retro-online.appspot.com",
  messagingSenderId: "516160563119",
  appId: "1:516160563119:web:2e923b55ccee1cbf39b15a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getFirestore (app)