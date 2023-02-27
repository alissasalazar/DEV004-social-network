import { firebaseLeerPublicacion } from "../lib/firebasePublicaciones";

// eventos del muro(time-line)
export const timelineEventos = async (onNavigate) => {
  document.getElementById('nuevaPublicacion').addEventListener('click', () => onNavigate('/crear-publicacion'));
};
