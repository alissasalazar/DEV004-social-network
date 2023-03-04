// import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js';
// importo la configuracion de firebase
import {
  getFirestore,
  addDoc,
  getDocs,
  doc,
  collection,
} from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js';
import FirebaseApp from '../firebaseConfig.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js';

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
  const auth = getAuth();
  // con el await decimos que esperemos que termine la funcion getDocs antes de continuar
  const querySnapshot = await getDocs(collection(db, 'Publicaciones'));

  // no funciono con for of normal para consultar
  /* for(const doc of querySnapshot){
      console.log(doc.data())
    } */
  let HtmlString = '';
  for(let i=0;i<querySnapshot.docs.length;i++){
    const document=querySnapshot.docs[i]
    console.log(document.id)
    console.log(document.data());
    console.log(document.data().publicacion);
    //leyendo los likes de la publicacion
    const likesRef = collection(doc(db, "Publicaciones", document.id), "likes");
    const likesDePublicacion = await getDocs(likesRef);
    let tieneLike=false
    likesDePublicacion.forEach((documentLike) => {
      // console.log(doc.id, " => ", doc.data().usuario);
      if(documentLike.data().usuario===auth.currentUser.email) tieneLike=true
    });

    HtmlString += `
      <article class='miPublicacion'>
        <div class="likes">
          <span>${likesDePublicacion.docs.length}</span>
          <img class="botonLike" id=${document.id} src=${tieneLike?"./img/likeLleno.png":"./img/likeVacio.png"} alt="">
        </div>
        <p>${document.data().publicacion}</p>        
      </article>
    `;
  };
  return HtmlString;
};

export const firebaseDarLike = async (id) => {
  // configurando la aplicacion segun datos de la consola de firebase
  // const app = initializeApp(firebaseConfig,'mifirestore');

  // conectando a la base de datos de firestore
/*   const db = getFirestore(FirebaseApp);
  await addDoc(collection(db, 'Publicaciones'), { publicacion: texto });
  console.log('dato insertado'); */
  const auth = getAuth();
  const user=auth.currentUser
  console.log(user)
  console.log(user.email)
  console.log(id)

  const db = getFirestore(FirebaseApp);
  
/*   await getFirestore(FirebaseApp).collection('Publicaciones').doc(id).collection('likes').add({
    usuario: user.email,
  }); */
 // await addDoc(collection(db, 'Publicaciones'), { publicacion: texto });
  await addDoc(collection(doc(db, "Publicaciones", id), "likes"), {
    usuario: user.email,
  });
};

