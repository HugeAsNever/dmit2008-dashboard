 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwTYJhMK2PXg1nKOCdDaBoxvi3mdAwC48",
  authDomain: "storefront-79b11.firebaseapp.com",
  databaseURL: "https://storefront-79b11-default-rtdb.firebaseio.com",
  projectId: "storefront-79b11",
  storageBucket: "storefront-79b11.appspot.com",
  messagingSenderId: "1031764749938",
  appId: "1:1031764749938:web:45e0fc5f76656edb221ceb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export {db};