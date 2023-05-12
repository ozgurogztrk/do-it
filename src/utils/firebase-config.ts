import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCJLqn45nh8EsCU5-2Be1fLNc2qZVqrVmw",
  authDomain: "react-todo-1f2ec.firebaseapp.com",
  projectId: "react-todo-1f2ec",
  storageBucket: "react-todo-1f2ec.appspot.com",
  messagingSenderId: "223716289488",
  appId: "1:223716289488:web:071188b0be84f9d64727d5",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
