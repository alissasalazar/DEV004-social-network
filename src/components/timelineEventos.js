/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
import {
  firebaseLeerPublicacion,
  deletePub,
} from "../lib/firebasePublicaciones";

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
};
