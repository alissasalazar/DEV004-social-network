/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
import { firebaseLeerPublicacion, deletePub } from '../lib/firebasePublicaciones';
import { getTask, actualizarDB } from '../lib/barrel.js'

// eventos del muro(time-line)
export const timelineEventos = async (onNavigate) => {
  const mainPublicacion = document.getElementById("miPublicacion");
  mainPublicacion.innerHTML += await firebaseLeerPublicacion();
  // Evento para porder eliminar publicaciones//
  mainPublicacion.addEventListener("click", async (event) => {
    if (event.target && event.target.className === "btn-eliminar") {
      console.log("que hay en el targe", event.target.className);
      const alerta = await swal({
        title: "Realmente desea eliminar el post?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      });
      if (alerta) {
        await deletePub(event.target.dataset.id);
        await swal("Se elimino correctamente!", {
          icon: "success",
        });
        onNavigate("/timeline");
      }
    }
  });

  // Evento para nueva publicacion//
  document
    .getElementById("nuevaPublicacion")
    .addEventListener("click", () => onNavigate("/crear-publicacion"));

  const botonesEditar = document.getElementById('miPublicacion').querySelectorAll('.botonEditar')

  let estadoEdicion = false

  botonesEditar.forEach((p) => {
    p.addEventListener('click', async (e) => {
      // console.log('boton editar clickeado')
      const doc = await getTask(e.target.dataset.id)
      const publicacion = document.getElementById(`${doc.id}`)
      const botonEditar = document.getElementById(`botonEditar${doc.id}`)     
      if (estadoEdicion === false) {
        publicacion.setAttribute('contenteditable', 'true')
        botonEditar.innerText = "Guardar"
        // console.log("botonEditar.innerText = " + botonEditar.innerText + " cambiando a 'Guardar'")
        estadoEdicion = true
        // console.log("estadoEdicion = " + estadoEdicion)
      } else {
        publicacion.setAttribute('contenteditable', 'false')
        await actualizarDB(doc.id, { publicacion: publicacion.innerText })
        alert("se acualizo la publicacion")
        botonEditar.innerText = "Editar"
        // console.log("botonEditar.innerText = " + botonEditar.innerText + " cambiando a 'Editar'")    
        estadoEdicion = false
        // console.log("estadoEdicion = " + estadoEdicion)
      }
      /* if (estadoEdicion) {        
        actualizarDB(doc.id, { publicacion: publicacion.innerText })
        publicacion.setAttribute('contenteditable', 'false')
        estadoEdicion = false
      } */
    })
  })

  /* const botonesguardar = muro.querySelectorAll('.botonGuardar')

  botonesguardar.forEach((p) => {
    p.addEventListener('click', async (e) => {
      console.log('boton guardar clickeado');
      const doc = await getTask(e.target.dataset.id)
      const publicacion = document.getElementById(`${doc.id}`)
      console.log("publicacion.innerText = " + publicacion.innerText)
      console.log(estadoEdicion)
      if (estadoEdicion) {        
        actualizarDB(doc.id, { publicacion: publicacion.innerText })
        publicacion.setAttribute('contenteditable', 'false')
        estadoEdicion = false
      }
    });
  }) */
};
