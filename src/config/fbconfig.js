  import firebase from 'firebase/app';
  import 'firebase/firestore';
  import 'firebase/auth';
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDi6MtvMTnwy_gZeMDqJYhtsssaHQ2D2SA",
    authDomain: "imjaster-better.firebaseapp.com",
    databaseURL: "https://imjaster-better.firebaseio.com",
    projectId: "imjaster-better",
    storageBucket: "imjaster-better.appspot.com",
    messagingSenderId: "96782508597",
    appId: "1:96782508597:web:fe1a29f85000805e4cc77c",
    measurementId: "G-06N010VY33"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots: true});


  export default firebase;