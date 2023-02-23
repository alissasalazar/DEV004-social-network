import { loginEventos } from '../components/loginEventos.js';
import { rutas } from './rutas.js';

// funcion para navegar a travez de las rutas
export const onNavigate = (pathName) => {
  window.history.pushState(
    {},
    pathName,
    window.location.origin + pathName,
  );
  rutas[pathName]();
  if (pathName === '/') {
    loginEventos(onNavigate);
  }
  if (pathName === '/registro') {
    document.getElementById('botonInicioGoogle').addEventListener('click', () => onNavigate('/timeline'));
  }
};
