import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js';
import { getFirestore, addDoc, collection } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js';
import firebaseConfig from '../firebaseConfig';
export const firebaseCrearPublicacion = (texto) => {
  // configurando la aplicacion segun datos de la consola de firebase
  const app = initializeApp(firebaseConfig);
  console.log("conectando a Firebase")
  console.log(app)
}