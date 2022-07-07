// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyBk1jho8KnRDNBxrnvVWnaFCHMGTqB4lYU",
  authDomain: "bambu-meta.firebaseapp.com",
  projectId: "bambu-meta",
  storageBucket: "bambu-meta.appspot.com",
  messagingSenderId: "542063875668",
  appId: "1:542063875668:web:b7c833a334b0f37acf3fc1",
  measurementId: "G-CTSM3VQZ2F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app)