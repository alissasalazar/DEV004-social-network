import { firebaseLeerPublicacion,firebaseDarLike, firebaseQuitarLike } from '../lib/firebasePublicaciones';

// eventos del muro(time-line)
export const timelineEventos = async (onNavigate) => {
  //las publicaciones ahora las pongo dentro de Section publicaciones
  const mainPublicacion = document.getElementById('publicaciones');
  //ahora reemplazo el contenido por completo de section cada vez que se llame
  mainPublicacion.innerHTML = await firebaseLeerPublicacion();
  //selecciono a todos los img que tiene el like
  const botonesLike = document.getElementsByClassName("botonLike");
  // recorro cada img para añadirles su evento click
  for(const elemento of botonesLike){
    elemento.addEventListener('click',async ()=>{
      //guardo en nombre de archivo solo el nombre que esta en su src
      // para ello divido la cadena con split con el separador / y busco el ultimo elemento traido con el pop
      const nombreArchivo = elemento.src.split('/').pop();
      // si el nombre del archivo es likeVacio debo de dar like sino quito el like
      if(nombreArchivo==="likeVacio.png") {
        await firebaseDarLike(elemento.id)
      }
      else {
        await firebaseQuitarLike(elemento.id)
      }
      // vuelvo a pintar todas las publicaciones actualizando su like
      timelineEventos(onNavigate)
    })
  }

  document.getElementById('nuevaPublicacion').addEventListener('click', () => onNavigate('/crear-publicacion'));
};
