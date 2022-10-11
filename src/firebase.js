import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBDxrijL-B5W0CC8xjMabzWnzw_mmXGlng",
  authDomain: "netflix-react-d496d.firebaseapp.com",
  projectId: "netflix-react-d496d",
  storageBucket: "netflix-react-d496d.appspot.com",
  messagingSenderId: "777044049890",
  appId: "1:777044049890:web:8149a0beea6451804383bb",
  measurementId: "G-9TW1P76NVT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)