import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";




const firebaseConfig = {
  apiKey: "AIzaSyCNi_AAqxZHwT9boIufmP5N6okik3DuOo0",
  authDomain: "burger-arg.firebaseapp.com",
  projectId: "burger-arg",
  storageBucket: "burger-arg.appspot.com",
  messagingSenderId: "236271484013",
  appId: "1:236271484013:web:58c91f08705bfda5ee5364"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);