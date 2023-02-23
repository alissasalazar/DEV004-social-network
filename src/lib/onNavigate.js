import { rutas } from './rutas.js'

//funcion para navegar a travez de las rutas
export const onNavigate = (pathName) => {
    window.history.pushState(
        {},
        pathName,
        window.location.origin + pathName
    )
    rutas[pathName]();
}