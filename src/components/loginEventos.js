// eventos del login-dom
export const loginEventos = (onNavigate) => {
  document.getElementById('botonRegistrar').addEventListener('click', () => onNavigate('/registro'));
};
