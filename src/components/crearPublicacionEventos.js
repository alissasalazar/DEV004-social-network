// eventos del crear publicacion-dom
export const crearPublicacionEventos = (onNavigate) => {
  document.getElementById('crearPublicacion').addEventListener('click', () => onNavigate('/timeline'));
};
