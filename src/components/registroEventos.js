import { signUp } from '../lib/signUp.js';
import { registerGoogle } from '../lib/registerGoogle.js';

// eventos del registro-dom
export const registroEventos = () => {
  document.getElementById('botonInicioGoogle').addEventListener('click', () => registerGoogle('/timeline'));
  document.getElementById('botonInicio').addEventListener('click', () => {
    signUp();
  });
};
