import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAsM2HtFXuudExHLh8dJOpCJNd8PMOA3S4",
    authDomain: "dashboard-43980.firebaseapp.com",
    projectId: "dashboard-43980",
    storageBucket: "dashboard-43980.firebasestorage.app",
    messagingSenderId: "943376821375",
    appId: "1:943376821375:web:07e0a5a9fe50715558234a"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
