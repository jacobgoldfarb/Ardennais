import { initializeApp, getApps } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBttlu2YV1PiwfDUk2nR_nieO-Ii_yQPeI",
  authDomain: "appaloosa-318b4.firebaseapp.com",
  projectId: "appaloosa-318b4",
  storageBucket: "appaloosa-318b4.appspot.com",
  messagingSenderId: "443278649999",
  appId: "1:443278649999:web:14e840b267899f4022defa",
  measurementId: "G-4D6H2QXHLG"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)

export {db, auth}