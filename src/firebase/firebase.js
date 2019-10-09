import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';


 // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyAhAVsyhSwZnidjjV4FMGxOWhQFWXkpXNc",
    authDomain: "reactblog-e4a42.firebaseapp.com",
    databaseURL: "https://reactblog-e4a42.firebaseio.com",
    projectId: "reactblog-e4a42",
    storageBucket: "",
    messagingSenderId: "173183780733",
    appId: "1:173183780733:web:9e97655082ef491b40ee14",
    measurementId: "G-3WWMT6XSE6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {firebase,googleAuthProvider,database as default};

