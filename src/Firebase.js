// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAABAOkXCDzxImV1p4SPSMJ_AnFtDzq4Qg",
    authDomain: "todo-d6220.firebaseapp.com",
    projectId: "todo-d6220",
    storageBucket: "todo-d6220.appspot.com",
    messagingSenderId: "123127304840",
    appId: "1:123127304840:web:abec9482b36d3f7480853d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth }