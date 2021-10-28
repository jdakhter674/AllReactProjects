import firebase from 'firebase'
// import 'firebase/firestore'
// import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyDvHn28cKyoAjX4hAUyvwZpYsogPGJxE8g",
    authDomain: "udemy-clone-c6dc6.firebaseapp.com",
    projectId: "udemy-clone-c6dc6",
    storageBucket: "udemy-clone-c6dc6.appspot.com",
    messagingSenderId: "552105540090",
    appId: "1:552105540090:web:80e206328aa6f5e006cc43",
    measurementId: "G-7QCMVYPXKW"
  };

  
  // export default firebase.initializeApp(firebaseConfig);
  firebase.initializeApp(firebaseConfig)
var Auth =firebase.auth()
  export default Auth;
