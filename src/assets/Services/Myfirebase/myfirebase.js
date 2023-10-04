
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDRkzG8XAaQS9aiqBtpPi6QsG5B1mmESiY",
  authDomain: "flipkart-374ad.firebaseapp.com",
  projectId: "flipkart-374ad",
  storageBucket: "flipkart-374ad.appspot.com",
  messagingSenderId: "426198513775",
  appId: "1:426198513775:web:b617ef1e7f71cdd770b59a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app)

export default app;