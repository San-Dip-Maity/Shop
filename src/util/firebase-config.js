import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDcMTuh1lU1c6j9h1LWq9tgPslPEM7unMA",
  authDomain: "shop-a4f21.firebaseapp.com",
  projectId: "shop-a4f21",
  storageBucket: "shop-a4f21.appspot.com",
  messagingSenderId: "837119235025",
  appId: "1:837119235025:web:4b069f02589bce3f2e06f0",
  measurementId: "G-L9LY2JY3G7",
};
const firebaseAppConfig = initializeApp(firebaseConfig);
export default firebaseAppConfig;
