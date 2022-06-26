// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc,collection, getDocs, addDoc, onSnapshot , query  } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB39bw6R4WVuoK6pmPBqQp68v_ntPNEpGg",
  authDomain: "vue-blog-c9846.firebaseapp.com",
  projectId: "vue-blog-c9846",
  storageBucket: "vue-blog-c9846.appspot.com",
  messagingSenderId: "844433139051",
  appId: "1:844433139051:web:a8985d448e78c37335182e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {
    app, db, collection, getDocs, setDoc, doc, addDoc, onSnapshot, query
};