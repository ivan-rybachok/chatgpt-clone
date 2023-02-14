import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMV48L9CYbdzl5Ph4CjprEm3yP6TK_LvU",
  authDomain: "chatgpt-massager-clone.firebaseapp.com",
  projectId: "chatgpt-massager-clone",
  storageBucket: "chatgpt-massager-clone.appspot.com",
  messagingSenderId: "577769434694",
  appId: "1:577769434694:web:1728c34135a76953c32447",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
