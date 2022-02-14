import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, enableIndexedDbPersistence } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCD7gZiFd7M0uIu0VYJbQ23CSSiP5BgMvo",
  authDomain: "my-final-year-project-9f93c.firebaseapp.com",
  projectId: "my-final-year-project-9f93c",
  storageBucket: "my-final-year-project-9f93c.appspot.com",
  messagingSenderId: "83610337410",
  appId: "1:83610337410:web:8b38c7306d290b46edb49b",
  measurementId: "G-DXRH654XCF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
enableIndexedDbPersistence(db);

export { db, auth };
