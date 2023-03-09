// Import the functions you need from the SDKs you need
// import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js';
// mporto la configuracion de firebase
import {
  getAuth, createUserWithEmailAndPassword, getDatabase, set, ref,
} from './barrel.js';
import FirebaseConfig from '../firebaseConfig.js';

const { app: FirebaseApp } = FirebaseConfig;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

export const auth = getAuth();
export const signUp = async (email, password) => {
  // Initialize Firebase
  const database = getDatabase(FirebaseApp);

  try {
    const credentialsUser = await createUserWithEmailAndPassword(auth, email, password)
    const user = credentialsUser.user;
    await set(ref(database, `users/${user.uid}`), {
      email,
      password,
    })
    return true;
  } catch (error) {
    const errorMessage = error.message;
    // console.log(errorMessage)
    alert(errorMessage);
    return false;
  }
};
