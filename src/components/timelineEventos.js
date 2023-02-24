// eventos del muro(time-line)
export const timelineEventos = (onNavigate) => {
  document.getElementById('nuevaPublicacion').addEventListener('click', () => onNavigate( '/crear-publicacion'));
};