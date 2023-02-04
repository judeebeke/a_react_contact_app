// import { getFirestore } from "@firebase/firestore"
// , 
import { initializeApp } from 'firebase/app'
import {firestore} from 'firebase/firestore'
import 'firebase/auth'
// import { firestore } from 'firebase/app';

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_FIREBASE_APP_ID,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
//     appId: process.env.REACT_APP_FIREBASE_APP_ID 
//   }

const firebaseConfig = {
    apiKey: "AIzaSyDLEUPStvBMennb27Coga5Sc18Gr8fsl_0",
    authDomain: "jw-members-1.firebaseapp.com",
    projectId: "jw-members-1",
    storageBucket: "jw-members-1.appspot.com",
    messagingSenderId: "128079317475",
    appId: "1:128079317475:web:a7ab203f209c92dab738d6"
  };
  
  
  // Initialize Firebase

//   console.log(firebaseConfig)
  
initializeApp(firebaseConfig);


export default firestore;