// import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js';
// importo la configuracion de firebase
import {
  getFirestore,
  addDoc,
  getDocs,
  collection,
} from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js';
import FirebaseApp from '../firebaseConfig.js';

export const firebaseCrearPublicacion = async (texto) => {
  // configurando la aplicacion segun datos de la consola de firebase
  // const app = initializeApp(firebaseConfig,'mifirestore');

  // conectando a la base de datos de firestore
  const db = getFirestore(FirebaseApp);
  await addDoc(collection(db, 'Publicaciones'), { publicacion: texto });
  console.log('dato insertado');
};

export const firebaseLeerPublicacion = async () => {
  // configurando la aplicacion segun datos de la consola de firebase
  // añadi otra instancia de firebase mifirestore que no cause conflicto con el de autentication
  // const app = initializeApp(firebaseConfig,'mifirestore');
  // conectando a la base de datos de firestore
  const db = getFirestore(FirebaseApp);

  // con el await decimos que esperemos que termine la funcion getDocs antes de continuar
  const querySnapshot = await getDocs(collection(db, 'Publicaciones'));

  // no funciono con for of normal para consultar
  /* for(const doc of querySnapshot){
      console.log(doc.data())
    } */
  let HtmlString = '';
  querySnapshot.forEach((doc) => {
    console.log(doc.data());
    console.log(doc.data().publicacion);
    HtmlString += `
      <article class='miPublicacion'>
        <p>${doc.data().publicacion}</p>
      </article>
    `;
  });
  return HtmlString;
};
