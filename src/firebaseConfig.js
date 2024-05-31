import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBmzk6AvrwNUY0I7CO69AJ1_bbUCL0mVYQ",
  authDomain: "just-bin.firebaseapp.com",
  databaseURL: "https://just-bin-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "just-bin",
  storageBucket: "just-bin.appspot.com",
  messagingSenderId: "716395933630",
  appId: "1:716395933630:web:bbf139fdf749456c7e13ef",
  measurementId: "G-518NZDNHCB"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
