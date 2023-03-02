// Import the functions you need from the SDKs you need
// import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js';
// importo la configuracion de firebase
import {
  getAuth, signInWithEmailAndPassword, getDatabase, ref, update,
} from './barrel.js';
import FirebaseApp from '../firebaseConfig.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const auth = getAuth();
const database = getDatabase(FirebaseApp);

// lo pongo asincrono para usar el await y esperar su respuesta
export const signIn = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
      const lgDate = new Date();
      return update(ref(database, `users/${user.uid}`), {
        last_login: lgDate,
      });
    })
    .then(() => {
      // User logged successfully
      alert('Usuario logueado!');
      return true;
      /*  })
       .catch((error) => {
         // Log in failed...
         alert(error);
         return false
       });     */
    })
    .catch((error) => {
      // const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      return false;
    });
};
