import { signIn } from '../lib/signIn.js';

// eventos del login-dom
export const loginEventos = (onNavigate) => {
  document.getElementById('botonRegistrar').addEventListener('click', () => onNavigate('/registro'));
  document.getElementById('botonInicio').addEventListener('click', () => {
    signIn();
  });
};
