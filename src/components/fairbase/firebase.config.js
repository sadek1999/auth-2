// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2rnDZcyuQBXRckBCw2E_lL4bhSnDvDk8",
  authDomain: "auth-2-4fe90.firebaseapp.com",
  projectId: "auth-2-4fe90",
  storageBucket: "auth-2-4fe90.appspot.com",
  messagingSenderId: "842663120867",
  appId: "1:842663120867:web:c0e500d035b4b725805ad6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app);
export default auth;