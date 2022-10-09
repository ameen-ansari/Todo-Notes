// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
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
const db = getFirestore();
export { app, auth, db }
// npm WARN deprecated core - js@3.6.5: core - js@< 3.23.3 is no longer maintained and not recommended for usage due to the number of issues.Because of the V8 engine whims, feature detection in old core - js versions could cause a slowdown up to 100x 
// even if nothing is polyfilled.Some versions have web compatibility issues.Please, upgrade your dependencies to the actu