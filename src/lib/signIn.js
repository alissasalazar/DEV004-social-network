// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js';
import { getAuth, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js';
import { getDatabase, ref, update } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//lo pongo asincrono para usar el await y esperar su respuesta
export const signIn = async () => {
  const firebaseConfig = {
    apiKey: 'AIzaSyA4DCQlvHVQ8XYZsIWz5GkEoExfeJsH30s',
    authDomain: 'testsocialnetwork0-b5d33.firebaseapp.com',
    projectId: 'testsocialnetwork0-b5d33',
    storageBucket: 'testsocialnetwork0-b5d33.appspot.com',
    messagingSenderId: '235016872717',
    appId: '1:235016872717:web:31faf95a85c2e8da0cc644',
    measurementId: 'G-DJP89WLW09',
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  const database = getDatabase(app);

  const email = document.getElementById('inputEmail').value;
  const password = document.getElementById('inputPassword').value;

  return await signInWithEmailAndPassword(auth, email, password)
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
      return true
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
      alert(errorMessage)
      return false
    });
};