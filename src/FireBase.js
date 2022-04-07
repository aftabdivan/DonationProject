import {getFirestore} from "@firebase/firestore"
import { initializeApp } from "firebase/app";


const firebaseConfig = {
        apiKey: "AIzaSyDJ-oTl4Akh9kuWArNNvYceJDUyysLqqns",
        authDomain: "website-4cfdb.firebaseapp.com",
        projectId: "website-4cfdb",
        storageBucket: "website-4cfdb.appspot.com",
        messagingSenderId: "902294089530",
        appId: "1:902294089530:web:d4b31b9c98173096982a03"
      };
      
const app=initializeApp(firebaseConfig);
const db2=getFirestore(app);

export default db2;