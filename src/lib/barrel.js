import {
  doc,
  getDoc,
  getFirestore,
  updateDoc,
} from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js';
import FirebaseConfig from '../firebaseConfig.js';
const { app: FirebaseApp} = FirebaseConfig;

export { getAuth, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js';
export { getDatabase, ref, update } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js';

const db = getFirestore(FirebaseApp);

export const getTask = (id) => getDoc(doc(db, 'Publicaciones', id))

export const actualizarDB = (id, nuevoTexto) => updateDoc(doc(db, 'Publicaciones', id), nuevoTexto)
