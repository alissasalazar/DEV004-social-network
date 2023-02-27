import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js';
import { getFirestore, addDoc,getDocs, collection } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js';
import firebaseConfig from '../firebaseConfig';
export const firebaseCrearPublicacion = async (texto)  =>  {
  // configurando la aplicacion segun datos de la consola de firebase
  const app = initializeApp(firebaseConfig);
  //conectando a la base de datos de firestore
  const db = getFirestore(app);
  await addDoc(collection(db,"Publicaciones"),{publicacion:texto})
  console.log("dato insertado")
}

export const firebaseLeerPublicacion = async () => {
    // configurando la aplicacion segun datos de la consola de firebase
    const app = initializeApp(firebaseConfig);
    //conectando a la base de datos de firestore
    const db = getFirestore(app);

    // con el await decimos que esperemos que termine la funcion getDocs antes de continuar
    const querySnapshot = await getDocs(collection(db,"Publicaciones"))
    
    //no funciono con for of normal para consultar
    /* for(const doc of querySnapshot){
      console.log(doc.data())
    } */
    let HtmlString = ""
    querySnapshot.forEach(function(doc){
      console.log(doc.data())
      console.log(doc.data().publicacion)
      HtmlString += `
      <article class="miPublicacion">
        <p>${doc.data().publicacion}</p>
      </article>
    `
    })
    return HtmlString;
}
