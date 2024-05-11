// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQz1RRUiyzwTTQWXrBedOiaGgyC_C0LJc",
  authDomain: "abs-store-47f7c.firebaseapp.com",
  projectId: "abs-store-47f7c",
  storageBucket: "abs-store-47f7c.appspot.com",
  messagingSenderId: "407609869664",
  appId: "1:407609869664:web:db67a1607c7f9054908a05",
  measurementId: "G-7CJQ2PN4YR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}