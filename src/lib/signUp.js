// Import the functions you need from the SDKs you need
// import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js';
// mporto la configuracion de firebase
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js';
import { getDatabase, set, ref } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js';
import FirebaseApp from '../firebaseConfig.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

export const auth = getAuth();
export const signUp = () => {
  // Initialize Firebase
  const database = getDatabase(FirebaseApp);

  const email = document.getElementById('inputEmail').value;
  const password = document.getElementById('inputPassword').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
      set(ref(database, `users/${user.uid}`), {
        email,
        password,
      })
        .then(() => {
          // Data saved successfully!
          alert('Usuario en la base de datos!');
        })
        .catch((error) => {
          // The write failed...
          alert(error);
        });
      alert('Usuario creado!');
    })
    .catch((error) => {
      // const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      alert(errorMessage);
    });
};
