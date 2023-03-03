import { firebaseLeerPublicacion,firebaseDarLike } from '../lib/firebasePublicaciones';

// eventos del muro(time-line)
export const timelineEventos = async (onNavigate) => {
  const mainPublicacion = document.getElementById('miPublicacion');
  mainPublicacion.innerHTML += await firebaseLeerPublicacion();
  const botonesLike = document.getElementsByClassName("botonLike");
  for(const elemento of botonesLike){
    elemento.addEventListener('click',async ()=>{
      // alert(elemento.parentElement.previousElementSibling.innerHTML)
      await firebaseDarLike(elemento.id)
    })
  }

  document.getElementById('nuevaPublicacion').addEventListener('click', () => onNavigate('/crear-publicacion'));
};
