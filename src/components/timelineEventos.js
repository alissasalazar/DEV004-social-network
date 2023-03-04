import { firebaseLeerPublicacion,firebaseDarLike, firebaseQuitarLike } from '../lib/firebasePublicaciones';

// eventos del muro(time-line)
export const timelineEventos = async (onNavigate) => {
  const mainPublicacion = document.getElementById('publicaciones');
  mainPublicacion.innerHTML = await firebaseLeerPublicacion();
  const botonesLike = document.getElementsByClassName("botonLike");
  for(const elemento of botonesLike){
    elemento.addEventListener('click',async ()=>{
      const nombreArchivo = elemento.src.split('/').pop();
      if(nombreArchivo==="likeVacio.png") {
        await firebaseDarLike(elemento.id)
      }
      else {
        await firebaseQuitarLike(elemento.id)
      }
      timelineEventos(onNavigate)
    })
  }

  document.getElementById('nuevaPublicacion').addEventListener('click', () => onNavigate('/crear-publicacion'));
};
