import { signUp } from '../lib/signUp.js';
import { registerGoogle } from '../lib/registerGoogle.js';

// eventos del registro-dom
export const registroEventos = () => {
  document.getElementById('inputEmail').addEventListener('keyup', () => {
    if (document.getElementById('inputEmail').value
      .match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)) {
      document.getElementById('botonInicio').style['pointer-events'] = 'all';
    } else {
      document.getElementById('botonInicio').style['pointer-events'] = 'none';
    }
  });
  document.getElementById('botonInicioGoogle').addEventListener('click', () => registerGoogle());
  document.getElementById('botonInicio').addEventListener('click', () => {
    signUp();
  });
};
