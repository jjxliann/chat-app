import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyDkaIEBeTqgq1fS8ZD1cLiUinHClPOodQQ",
    authDomain: "dicksword-clone.firebaseapp.com",
    projectId: "dicksword-clone",
    storageBucket: "dicksword-clone.appspot.com",
    messagingSenderId: "234158530553",
    appId: "1:234158530553:web:8bb541fcb60318b040a728",
    measurementId: "G-K91HLEL0SD"
  };


  const firebaseApp = firebase.initalizeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export{auth, provider};
  export default db;