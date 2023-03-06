import { firebaseLeerPublicacion } from '../lib/firebasePublicaciones';
import { getTask, actualizarDB } from '../lib/barrel.js'

// eventos del muro(time-line)
export const timelineEventos = async (onNavigate) => {
  const mainPublicacion = document.getElementById('miPublicacion');
  mainPublicacion.innerHTML += await firebaseLeerPublicacion();
  document.getElementById('nuevaPublicacion').addEventListener('click', () => onNavigate('/crear-publicacion'));
  
  const muro = document.getElementById('miPublicacion')
  
  const botonesEditar = muro.querySelectorAll('.botonEditar')

  let estadoEdicion = false

  botonesEditar.forEach((p) => {
    p.addEventListener('click', async (e) => {
      console.log('boton editar clickeado')
      const doc = await getTask(e.target.dataset.id)
      const publicacion = document.getElementById(`${doc.id}`)
      if (publicacion.getAttribute('contenteditable') === 'false') {
        publicacion.setAttribute('contenteditable', 'true')
        estadoEdicion = true
        console.log(estadoEdicion)
      } else {
        publicacion.setAttribute('contenteditable', 'false')
        estadoEdicion = false
        console.log(estadoEdicion)
      }
      console.log(doc.id)
    })
  })

  const botonesguardar = muro.querySelectorAll('.botonGuardar')

  botonesguardar.forEach((p) => {
    p.addEventListener('click', async (e) => {
      console.log('boton guardar clickeado');
      const doc = await getTask(e.target.dataset.id)
      const publicacion = document.getElementById(`${doc.id}`)
      console.log("publicacion.innerText = " + publicacion.innerText)
      console.log(estadoEdicion)
      if (estadoEdicion) {        
        await actualizarDB(doc.id, { publicacion: publicacion.innerText })
        estadoEdicion = false
        console.log(estadoEdicion)
        alert('se actualizo la publicacion')
      }
      // const publicacion = document.getElementById(`${doc.id}`)

    /*  const textoPublicacion = document.getElementById('textoPublicacion');
        console.log(textoPublicacion.value);
        await firebaseCrearPublicacion(textoPublicacion.value);
        alert('se inserto la publicacion');
        onNavigate('/timeline'); */
    });
  })
};
