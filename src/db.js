// src/db.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCj3Zsdq_3UGVpL5PjGIdwatCgjgtqgsfE",
    authDomain: "mtm6404-contact-book-1ca3a.firebaseapp.com",
    projectId: "mtm6404-contact-book-1ca3a",
    storageBucket: "mtm6404-contact-book-1ca3a.appspot.com",
    messagingSenderId: "927468744617",
    appId: "1:927468744617:web:897e0772321be4eebadeb8"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
