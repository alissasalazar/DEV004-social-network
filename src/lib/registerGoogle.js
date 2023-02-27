import { GoogleAuthProvider, signInWithPopup } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js';
import { auth } from './signUp.js';

export const registerGoogle = async () => {
  const provider = new GoogleAuthProvider();

  try {
    const credentials = await signInWithPopup(auth, provider);
    console.log('Tus credenciales son:', credentials);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
