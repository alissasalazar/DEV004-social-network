import { firebaseLeerPublicacion, deletePub } from '../lib/firebasePublicaciones';

// eventos del muro(time-line)
export const timelineEventos = async (onNavigate) => {
  const mainPublicacion = document.getElementById('miPublicacion');
  mainPublicacion.innerHTML += await firebaseLeerPublicacion();
  // Evento para porder eliminar publicaciones//
  const btnsDelete = mainPublicacion.querySelectorAll('.btn-eliminar')
  btnsDelete.forEach((btn) => {
    btn.addEventListener('click', async ({ target: { dataset } }) => {
      deletePub(dataset.id)
      mainPublicacion.innerHTML += await firebaseLeerPublicacion();
    });
  })
  // Evento para nueva publicacion//
  document.getElementById('nuevaPublicacion').addEventListener('click', () => onNavigate('/crear-publicacion'));
};
