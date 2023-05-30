// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { Recipe } from "../types/recipe";

export default class Firebase {
    static getRecipes: any;
}

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtLHm2FH4MOgU8xw56SBSUtd1uuZRcjZw",
  authDomain: "recipes-f388c.firebaseapp.com",
  projectId: "recipes-f388c",
  storageBucket: "recipes-f388c.appspot.com",
  messagingSenderId: "349995346017",
  appId: "1:349995346017:web:a094541e664b0be53de220",
  measurementId: "G-HH36F889J8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);