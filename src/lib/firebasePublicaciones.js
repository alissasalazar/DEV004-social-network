// import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js';
// importo la configuracion de firebase
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js';
import {
  getFirestore,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js';
import FirebaseApp from '../firebaseConfig.js';

// const mainPub = document.getElementById('')
const db = getFirestore(FirebaseApp);
export const firebaseCrearPublicacion = async (texto) => {
  // configurando la aplicacion segun datos de la consola de firebase
  // const app = initializeApp(firebaseConfig,'mifirestore');

  // conectando a la base de datos de firestore
  await addDoc(collection(db, 'Publicaciones'), { publicacion: texto, email: getAuth().currentUser.email });
  console.log('dato insertado');
};

export const firebaseLeerPublicacion = async () => {
  // configurando la aplicacion segun datos de la consola de firebase
  // añadi otra instancia de firebase mifirestore que no cause conflicto con el de autentication
  // const app = initializeApp(firebaseConfig,'mifirestore');
  // conectando a la base de datos de firestore

  // con el await decimos que esperemos que termine la funcion getDocs antes de continuar
  const querySnapshot = await getDocs(collection(db, 'Publicaciones'));

  // no funciono con for of normal para consultar
  /* for(const doc of querySnapshot){
      console.log(doc.data())
    } */
  let HtmlString = '';
  querySnapshot.forEach((docu) => {
    HtmlString += `
      <article class='miPublicacion'>
        <p>${docu.data().publicacion}</p>
        <section class='btns'> <button class='btn-eliminar' data-id="${docu.id}">ELIMINAR</button></section>
      </article>
    `;
  });
  return HtmlString;
}

// no funciono con for of normal para consultar
/* for(const doc of querySnapshot){
      console.log(doc.data())
    } */
// Se creará una constante para la funcion de borrar publicaciones, con imports de firestore//
export const deletePub = async (id) => deleteDoc(await doc(db, 'Publicaciones', id))
