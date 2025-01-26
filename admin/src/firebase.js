import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "netflix-clone-26785.firebaseapp.com",
    projectId: "netflix-clone-26785",
    storageBucket: "netflix-clone-26785.firebasestorage.app",
    messagingSenderId: "546753040546",
    appId: "1:546753040546:web:d513fa5aba4439040487fb",
    measurementId: "G-7SPYLLGQ8X"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);