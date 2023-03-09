import { signUp } from '../lib/signUp.js';
import { registerGoogle } from '../lib/registerGoogle.js';
import { signIn } from '../lib/signIn.js';

// eventos del registro-dom
export const registroEventos = (onNavigate) => {
  document.getElementById('inputEmail').addEventListener('keyup', () => {
    if (document.getElementById('inputEmail').value
      .match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)
    ) {
      document.getElementById('botonInicio').style['pointer-events'] = 'all';
      document.getElementById('textoCorreoInvalido').style.visibility = 'hidden'
    } else {
      document.getElementById('botonInicio').style['pointer-events'] = 'none';
      document.getElementById('textoCorreoInvalido').style.visibility = 'visible'
    }
  });
  document
    .getElementById('botonAqui')
    .addEventListener('click', () => onNavigate('/'));
  document.getElementById('botonInicioGoogle').addEventListener('click', () => registerGoogle());
  document.getElementById('botonInicio').addEventListener('click', async () => {
    const email = document.getElementById('inputEmail').value;
    const password = document.getElementById('inputPassword').value;
    const estaRegistrado = await signUp(email, password);
    if (estaRegistrado) {
      const estaLogueado = await signIn(email, password);
      if (estaLogueado) {
        onNavigate('/timeline');
      } else {
        alert('Error correo o contraseña incorrectos verifiquelos por favor')
      }
    }
  });
};
