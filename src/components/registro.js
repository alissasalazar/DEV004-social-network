// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js';
import { getDatabase, set, ref } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

export const registro = () => {
  const root = document.getElementById('pantallaMostrada');
  root.innerHTML = `
    <main class="PantallaInicio">
      <section class="cajaInicio">
        <img src="./img/img_libro_rojo.png" alt="Imagen de libro">
        <input type="text" placeholder=" Nombre o Nick" id="inputNick">
        <input type="text" placeholder=" Correo Electronico" id="inputEmail">
        <input type="password" placeholder=" Contraseña" id="inputPassword">
        <button id="botonInicio">Registrarse</button>
        <hr style="width:100%;text-align:center">
        <button id="botonInicioGoogle"><img src="./img/btn_google_signin.png" alt="boton de google" class="imgButton"></button>
      </section>
    </main>
  `;

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

  document.getElementById('botonInicio').addEventListener('click', () => {
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
  });
};
