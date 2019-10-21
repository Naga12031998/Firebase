import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyBg3aVIukkWTzZMwTC-BiTGVXB7yV8MV3U",
    authDomain: "authentication-e1535.firebaseapp.com",
    databaseURL: "https://authentication-e1535.firebaseio.com",
    projectId: "authentication-e1535",
    storageBucket: "authentication-e1535.appspot.com",
    messagingSenderId: "380510372776",
    appId: "1:380510372776:web:f77434a84c9e7a19e8d39d",
    measurementId: "G-RR3Y3XSJ94"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default fire;