// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCiNwQRF5x1-vdkoInNxNgSoUUOBwhCJCc",
    authDomain: "booksjp-deaa8.firebaseapp.com",
    projectId: "booksjp-deaa8",
    storageBucket: "booksjp-deaa8.appspot.com",
    messagingSenderId: "816689766116",
    appId: "1:816689766116:web:a3af4a57eaf1836e1196f1",
    measurementId: "G-ZCDNRXENGV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
