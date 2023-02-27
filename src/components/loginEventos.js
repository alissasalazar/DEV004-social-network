import { signIn } from '../lib/signIn.js';

// eventos del login-dom
export const loginEventos = (onNavigate) => {
  // deteccion de correo en la casilla inputEmail
  document.getElementById('inputEmail').addEventListener('keyup', function() {
    if (document.getElementById('inputEmail').value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      document.getElementById('botonInicio').style['pointer-events'] = "all";
    } else {
      document.getElementById('botonInicio').style['pointer-events'] = "none"
    }
  });
  document.getElementById('botonRegistrar').addEventListener('click', () => onNavigate('/registro'));
  document.getElementById('botonInicio').addEventListener('click', () => {
    signIn();
  });
};
