import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyD6WI3e1Rk_njxh7sLkfT6zlmkQ5NzRJ5M",
    authDomain: "fullywebsite.firebaseapp.com",
    projectId: "fullywebsite",
    storageBucket: "fullywebsite.appspot.com",
    messagingSenderId: "243321684767",
    appId: "1:243321684767:web:748f2b7918957e0755a62a",
    measurementId: "G-8NVQFV0CW9"
  };
  
  // Initialize Firebase
  export default firebase.initializeApp(firebaseConfig);