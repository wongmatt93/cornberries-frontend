import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC5GvPJpxl0mhItEkCwM99SNbvnXBRvzC4",
  authDomain: "unicorns-and-blueberries.firebaseapp.com",
  projectId: "unicorns-and-blueberries",
  storageBucket: "unicorns-and-blueberries.appspot.com",
  messagingSenderId: "423524423251",
  appId: "1:423524423251:web:ab5e1366e557a530e518a6",
  measurementId: "G-JD5QYWLJYM",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const authProvider = new GoogleAuthProvider();

export function signInWithGoogle(): void {
  signInWithPopup(auth, authProvider);
}
export function signOut(): void {
  auth.signOut();
}
