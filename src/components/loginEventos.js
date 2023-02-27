import { registerGoogle } from '../lib/registerGoogle.js';
// eventos del login-dom
export const loginEventos = (onNavigate) => {
  document.getElementById('botonRegistrar').addEventListener('click', () => onNavigate('/registro'));
  document.getElementById('botonInicioGoogleLogin').addEventListener('click', () => registerGoogle('/timeline'));
};
