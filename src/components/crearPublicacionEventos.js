import { firebaseCrearPublicacion } from "../lib/firebaseCrearPublicacion";

// eventos del crear publicacion-dom
export const crearPublicacionEventos = (onNavigate) => {

  document.getElementById('crearPublicacion').addEventListener('click', () => {
    console.log("llamado firebase grupal")
    const textoPublicacion = document.getElementById("textoPublicacion")
    console.log(textoPublicacion.value)
    firebaseCrearPublicacion(textoPublicacion.value);    
    //onNavigate('/timeline')
  
  });



};
