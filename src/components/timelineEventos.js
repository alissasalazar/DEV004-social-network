import { firebaseLeerPublicacion } from '../lib/firebasePublicaciones';

// eventos del muro(time-line)
export const timelineEventos = async (onNavigate) => {
  const mainPublicacion = document.getElementById('miPublicacion');
  mainPublicacion.innerHTML += await firebaseLeerPublicacion();
  const botonesLike = document.getElementsByClassName("botonLike");
  for(const elemento of botonesLike){
    elemento.addEventListener('click',()=>{
      alert(elemento.parentElement.previousElementSibling.innerHTML)
    })
  }

  document.getElementById('nuevaPublicacion').addEventListener('click', () => onNavigate('/crear-publicacion'));
};
