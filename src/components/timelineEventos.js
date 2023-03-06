import { firebaseLeerPublicacion } from '../lib/firebasePublicaciones';

// eventos del muro(time-line)
export const timelineEventos = async (onNavigate) => {
  const mainPublicacion = document.getElementById('miPublicacion');
  mainPublicacion.innerHTML += await firebaseLeerPublicacion();
  document.getElementById('nuevaPublicacion').addEventListener('click', () => onNavigate('/crear-publicacion'));
  
  const muro = document.getElementById('miPublicacion')
  console.log(muro)
  
  const botonesEditar = muro.querySelectorAll('.botonEditar')
  // botonEditar.forEach(callbackfn => {
  //   console.log(callbackfn)
  // })
  console.log(botonesEditar)
};
