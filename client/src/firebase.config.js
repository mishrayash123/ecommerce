import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDhUAT4l78fXnRIOz1niuULyef6V05MneY",
  authDomain: "pari-collection-ab023.firebaseapp.com",
  projectId: "pari-collection-ab023",
  storageBucket: "pari-collection-ab023.appspot.com",
  messagingSenderId: "14366752689",
  appId: "1:14366752689:web:68c1cd40c3014315938790",
  measurementId: "G-6B3EZYJFQK"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const storage = getStorage(app);

export {
    auth,
    storage,
};