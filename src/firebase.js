import { initializeApp } from 'firebase/app';
import { getFirestore, } from 'firebase/firestore';
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";





const firebaseConfig = {
    apiKey: "AIzaSyDkaIEBeTqgq1fS8ZD1cLiUinHClPOodQQ",
    authDomain: "dicksword-clone.firebaseapp.com",
    projectId: "dicksword-clone",
    storageBucket: "dicksword-clone.appspot.com",
    messagingSenderId: "234158530553",
    appId: "1:234158530553:web:8bb541fcb60318b040a728",
    measurementId: "G-K91HLEL0SD"
  };


  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth();
  auth.languageCode = 'it';
  const provider = new GoogleAuthProvider();

  export{auth, provider};
  export default db;