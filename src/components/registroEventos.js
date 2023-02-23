// eventos del registro-dom
export const registroEventos = (onNavigate) => {
  document.getElementById('botonInicioGoogle').addEventListener('click', () => onNavigate('/timeline'));
};
