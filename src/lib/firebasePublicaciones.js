// importo la configuracion de firebase del archivo de barril
import Firebase from "../firebaseConfig.js";

// pongo los nombres usuales de los objetos y funciones de firebase
const { 
  db, auth, addDoc, getDocs, doc, collection, deleteDoc, updateDoc,  arrayRemove, arrayUnion,  
} = Firebase;
export const firebaseCrearPublicacion = async (texto) => {
  // insertando la publicacion en la coleccion Publicaciones con el documento publicacion
  await addDoc(collection(db, "Publicaciones"), {
    publicacion: texto,
    email: auth.currentUser.email,
  });
  console.log("dato insertado");
};

export const firebaseLeerPublicacion = async () => {
  // con el await decimos que esperemos que termine la funcion getDocs antes de continuar
  // leemos todos los documentos de la coleccion Publicaciones
  const querySnapshot = await getDocs(collection(db, "Publicaciones"));

  // iniciamos el template String
  let HtmlString = "";

  // recorremos todos los documentos de las publicaciones
  for (let i = 0; i < querySnapshot.docs.length; i += 1) {
    // guardamos cada publicacion en document
    const document = querySnapshot.docs[i];
/*     // seleccionamos la sub coleccion likes
    const likesRef = collection(doc(db, "Publicaciones", document.id), "likes");
    console.log("viendo con yessi:", document.data().email);
    // leemos los likes de la publicacion
    const likesDePublicacion = await getDocs(likesRef); */
    // obtenemos el array de likes de la publicación
    const likesArray = document.data().likes || [];   
    // busco si estoy entre los usuarios que dieron like a la publicacion
    // si estoy doy el valor de tieneLike a true sino le doy false
    let tieneLike = likesArray.includes(auth.currentUser.email)
    // si di like se pintara el img con un like pintado sino estara vacio segun la variable tieneLike
    HtmlString += ` 
      <article class='miPublicacion'>
        <div class="likes">
          <span>${likesArray.length}</span>
          <img class="botonLike" data-activado="true" data-identificador=${document.id} src=${tieneLike ? "./img/likeLleno.png" : "./img/likeVacio.png"} alt="Imagen de Like">
        </div class="textPub">      
        <p contenteditable="false" id=${document.id}>${document.data().publicacion}</p>
        ${document.data().email === auth.currentUser.email ? `<section class='btns'> 
        <button class='btn-eliminar' data-id="${document.id}">ELIMINAR</button>
        <button id="botonEditar${document.id}" class='botonEditar' data-id="${document.id}">EDITAR</button>
        </section>` : ''}     
      </article>
    `;
  }

  return HtmlString;
};

// no funciono con for of normal para consultar
/* for(const doc of querySnapshot){
      console.log(doc.data())
    } */
// Se creará una constante para la funcion de borrar publicaciones, con imports de firestore//

export const deletePub = async (id) => deleteDoc(await doc(db, "Publicaciones", id));

export const firebaseDarLike = async (id) => {
  // guardo el usuario actual autenticado en user
  const user = auth.currentUser;
  // inserto la sub coleccion likes con mi correo
/*   await addDoc(collection(doc(db, "Publicaciones", id), "likes"), {
    email: user.email,
  }); */
  // version array
  await updateDoc(doc(db, "Publicaciones", id), {
    // agrega el correo al arreglo de likes
    likes: arrayUnion(user.email),
  });
};

export const firebaseQuitarLike = async (id) => {
/*   // obtengo los documentos de la sub coleccion likes de una publicacion
  const querySnapshot = await getDocs(collection(db, "Publicaciones", id, "likes"));
  // busco mi email en la sub coleccion likes y lo elimino
  querySnapshot.forEach((docu) => {
    if (docu.data().email === auth.currentUser.email) {
      deleteDoc(docu.ref);
    }
  }); */
  const user = auth.currentUser;
  await updateDoc(doc(db, "Publicaciones", id), {
    // remover el correo del arreglo de likes
    likes: arrayRemove(user.email),
  });
};
