import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
//https://firebase.google.com/docs/web/setup?authuser=0#add-sdks-initialize
// import { } from 'firebase/remote-config';
// import { } from 'firebase/app-check';


const firebaseConfig = {
  apiKey: "AIzaSyCMGjzWGvuihLJRxP_lY0r2iBakGVk6qWM",
  authDomain: "facebook-scheduler-djawn.firebaseapp.com",
  projectId: "facebook-scheduler-djawn",
  storageBucket: "facebook-scheduler-djawn.appspot.com",
  messagingSenderId: "101622517197",
  appId: "1:101622517197:web:ab02fe3cdd49a13f830884",
  measurementId: "G-3LFGHTMYSM",
  databaseURL: "https://facebook-scheduler-djawn-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

// Initialize Realtime Database and get a reference to the service
const db = getDatabase(firebaseApp);
const auth = getAuth(firebaseApp);


//Detects the state of our users' authentication.
onAuthStateChanged(auth, user => {
  if(user != null) {
    console.log('logged in!');
  } else {
    console.log('No user');
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

