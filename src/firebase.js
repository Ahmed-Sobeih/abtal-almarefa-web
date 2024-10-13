// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyAWtKxRmiYZIlaeuVIQt4DdH-EMi8vcnk8',
    authDomain: 'abtal-almarefa.firebaseapp.com',
    projectId: 'abtal-almarefa',
    storageBucket: 'abtal-almarefa.appspot.com',
    messagingSenderId: '525693463485',
    appId: '1:525693463485:web:5e7f87845f3182fef0c0d4',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
