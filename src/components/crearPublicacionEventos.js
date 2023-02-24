import { firebaseCrearPublicacion } from "../lib/firebaseCrearPublicacion";

// eventos del crear publicacion-dom
export const crearPublicacionEventos = (onNavigate) => {

  document.getElementById('crearPublicacion').addEventListener('click', async () => {
    console.log("llamado firebase grupal")
    const textoPublicacion = document.getElementById("textoPublicacion")
    console.log(textoPublicacion.value)
    await firebaseCrearPublicacion(textoPublicacion.value);    
    alert("se inserto la publicacion")
    onNavigate('/timeline')
  
  });



};
