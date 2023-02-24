import { signUp } from '../lib/signUp.js';

// eventos del registro-dom
export const registroEventos = (onNavigate) => {
  document.getElementById('botonInicioGoogle').addEventListener('click', () => onNavigate('/timeline'));
  document.getElementById('botonInicio').addEventListener('click', () => {
    signUp();
  });
};
