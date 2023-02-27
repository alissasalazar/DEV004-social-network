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

    const querySnapshot = await getDocs(collection(db,"Publicaciones"))

/*     for(const doc of querySnapshot){
      console.log(doc.data())
    } */
    let HtmlString = ""
    querySnapshot.forEach(function(doc){
      console.log(doc.data())
      console.log(doc.data().publicacion)
      HtmlString += `
      <article class="miPublicacion">
        <p>A Karencita le gusta el gato con botas, por Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis omnis ut quae aut debitis </p>
      </article>
    `
    })
    return HtmlString;
}
