import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyB8Gc4sZ8eiNuzkwJwIapubtEQ7w11kTLc",
    authDomain: "expense-tracker-f2bd7.firebaseapp.com",
    projectId: "expense-tracker-f2bd7",
    storageBucket: "expense-tracker-f2bd7.appspot.com",
    messagingSenderId: "682354391130",
    appId: "1:682354391130:web:125d1bc0f2cd0266808063"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
