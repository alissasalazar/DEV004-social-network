/* export default {
  apiKey: "AIzaSyA4DCQlvHVQ8XYZsIWz5GkEoExfeJsH30s",
  authDomain: "testsocialnetwork0-b5d33.firebaseapp.com",
  databaseURL: "https://testsocialnetwork0-b5d33-default-rtdb.firebaseio.com",
  projectId: "testsocialnetwork0-b5d33",
  storageBucket: "testsocialnetwork0-b5d33.appspot.com",
  messagingSenderId: "235016872717",
  appId: "1:235016872717:web:31faf95a85c2e8da0cc644",
  measurementId: "G-DJP89WLW09"
};
 */
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js';
import {
  getFirestore,
  addDoc,
  getDocs,
  doc,
  collection,
  deleteDoc,
  updateDoc,
  arrayRemove,
  arrayUnion, 
} from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js';

const firebaseConfig = {
  apiKey: 'AIzaSyA4DCQlvHVQ8XYZsIWz5GkEoExfeJsH30s',
  authDomain: 'testsocialnetwork0-b5d33.firebaseapp.com',
  // le añadi para firestore
  databaseURL: "https://testsocialnetwork0-b5d33-default-rtdb.firebaseio.com",
  projectId: 'testsocialnetwork0-b5d33',
  storageBucket: 'testsocialnetwork0-b5d33.appspot.com',
  messagingSenderId: '235016872717',
  appId: '1:235016872717:web:31faf95a85c2e8da0cc644',
  measurementId: 'G-DJP89WLW09',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
// exporto la configuracion de firebase
export default {
  app,
  db,
  auth,
  addDoc,
  getDocs,
  doc,
  collection,
  deleteDoc,
  updateDoc,
  arrayRemove,
  arrayUnion,  
}
