/* eslint-disable no-undef */
// Import the functions you need from the SDKs you need
// import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js';
// mporto la configuracion de firebase
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js';
import { getDatabase, set, ref } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js';
import FirebaseConfig from '../firebaseConfig.js';

const { app: FirebaseApp } = FirebaseConfig;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

export const auth = getAuth();
export const signUp = async () => {
  // Initialize Firebase
  const database = getDatabase(FirebaseApp);

  const email = document.getElementById('inputEmail').value;
  const password = document.getElementById('inputPassword').value;

  try {
    const credentialsUser = await createUserWithEmailAndPassword(auth, email, password)
    const user = credentialsUser.user;
    set(ref(database, `users/${user.uid}`), {
      email,
      password,
    })
    swal('Usuario en la base de datos!');
    console.log("los credenciales son:", credentialsUser)
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      swal('El correo ya esta en uso');
    } else if (error.code === 'auth/weak-password') {
      swal('La contraseña debe tener 6 digitos como minimo');
    }
  }
};
