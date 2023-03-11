# Creando una Red Social
## Índice

* [1. Resumen del proyecto](#1-resumen-del-proyecto)
* [4. Consideraciones generales](#4-consideraciones-generales)
* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
* [6. Hacker edition](#6-hacker-edition)
* [7. Entrega](#7-entrega)
* [8. Pistas, tips y lecturas complementarias](#8-pistas-tips-y-lecturas-complementarias)


## 1. Resumen del proyecto

En este proyecto se construyo una Red Social,titulada **"Leeme"**. La cual trata sobre opiniones de lectores.
"Leeme" permite a cualquier usuario crear una cuenta de acceso;ya sea, con correo y contraseña o por google,
y loguearse con ella; crear, editar, borrar y _"likear"_ publicacciones.
## 2. Herramientas usadas en el proyecto
  -  HTML
  -  CSS
  -  JavaScript
  -  Control de versiones (Git y Github)
  -  Firebase

## 3. Historias de usuario

### HU 1. Crear una cuenta en la red social con usuario y contraseña
"Yo Como:" aficionada de la lectura
"Quiero": crear una cuenta en la red social con usuario y contraseña
"Para" poder ingresar posteriormente con esos datos a la red social
* **Criterios de Aceptación:** 
- Caja de texto para contraseña
- Caja de texto para correo electronico
- Boton para crear cuenta
- Caja de texto para el nombre/ apodo
* **Definición de terminado:** 
- Debe ser una SPA.
- Debe ser responsive.
- Deben haber recibido code review de al menos una compañera del equipo.
- Hicieron los test unitarios
- Testearon manualmente buscando errores e imperfecciones simples.
- Hicieron pruebas de usabilidad e incorporaron el feedback de los usuarios como mejoras.
- Desplegaron su aplicación y etiquetaron la versión (git tag).
### HU 2.Ingresar a la red social con correo y contraseña
"Yo Como:" aficionada de la lectura
"quiero": quiero ingresar a la red social con mi correo y contraseña
"para": encontrar personas con mis mismos gustos
* **Criterios de Aceptación:** 
- Caja de texto para escribir correo electronico
- Caja de texto para escribir contraseña
- Boton para hacer Log in
* **Definición de terminado:** 
- Debe ser una SPA.
- Debe ser responsive.
- Deben haber recibido code review de al menos una compañera del equipo.
- Hicieron los test unitarios
- Testearon manualmente buscando errores e imperfecciones simples.
- Hicieron pruebas de usabilidad e incorporaron el feedback de los usuarios como mejoras.
- Desplegaron su aplicación y etiquetaron la versión (git tag).
### HU 3. Crear una cuenta en la red social con mi cuenta de Google
"Yo Como:" aficionada de la lectura
"quiero": crear una cuenta en la red social con mi cuenta de Google
"para": facilitarme mi ingreso a la plataforma en una forma fácil sin crear nuevas cuentas
* **Criterios de Aceptación:**
- Boton para crear cuenta con Google
* **Definición de terminado:** 
- Debe ser una SPA.
- Debe ser responsive.
- Deben haber recibido code review de al menos una compañera del equipo.
- Hicieron los test unitarios
- Testearon manualmente buscando errores e imperfecciones simples.
- Hicieron pruebas de usabilidad e incorporaron el feedback de los usuarios como mejoras.
- Desplegaron su aplicación y etiquetaron la versión (git tag).
### HU 4. Ingresar a la red social con Google
"Yo Como:" aficionada de la lectura
"Quiero": quiero ingresar a la red social con mi cuenta de google
"Para": encontrar personas con mis mismos gustos
* **Criterios de Aceptación:** 
- Agregar un boton para poder ingresar con Google
* **Definición de terminado:** 
- Debe ser una SPA.
- Debe ser responsive.
- Deben haber recibido code review de al menos una compañera del equipo.
- Hicieron los test unitarios
- Testearon manualmente buscando errores e imperfecciones simples.
- Hicieron pruebas de usabilidad e incorporaron el feedback de los usuarios como mejoras.
- Desplegaron su aplicación y etiquetaron la versión (git tag).
### HU 5.Crear Publicacion en la red social
"Yo Como:" usuaria de la red social
"Quiero": crear publicación en la red social
"Para": compartir mis opiniones sobre libros
* **Criterios de Aceptación:** 
- Caja de texto para publicacion
- Boton para crear publicacion
* **Definición de terminado:** 
- Debe ser una SPA.
- Debe ser responsive.
- Deben haber recibido code review de al menos una compañera del equipo.
- Hicieron los test unitarios
- Testearon manualmente buscando errores e imperfecciones simples.
- Hicieron pruebas de usabilidad e incorporaron el feedback de los usuarios como mejoras.
- Desplegaron su aplicación y etiquetaron la versión (git tag).
### HU 6. Leer Publicacion de la red Social
"Yo Como:" usuaria de la red social
"Quiero": Leer publicación en la red social
"Para": conocer las opiniones sobre libros de los usuarios
* **Criterios de Aceptación:**
- Boton para ir a crear publicacion
- lista de publicaciones
* **Definición de terminado:** 
- Debe ser una SPA.
- Debe ser responsive.
- Deben haber recibido code review de al menos una compañera del equipo.
- Hicieron los test unitarios
- Testearon manualmente buscando errores e imperfecciones simples.
- Hicieron pruebas de usabilidad e incorporaron el feedback de los usuarios como mejoras.
- Desplegaron su aplicación y etiquetaron la versión (git tag).
### HU 7. :Poder dar like a una publicación. Máximo uno por usuario.
"Yo Como:" usuaria de la red social
"Quiero": dar like a las publicaciones
"Para": indicar que me gusto la publicacion
* **Criterios de Aceptación:**
- Poder usar el boton "like" y visualice el número al costado
- Cada que se da click cambio el color del boton like
* **Definición de terminado:** 
- Debe ser una SPA.
- Debe ser responsive.
- Deben haber recibido code review de al menos una compañera del equipo.
- Hicieron los test unitarios
- Testearon manualmente buscando errores e imperfecciones simples.
- Hicieron pruebas de usabilidad e incorporaron el feedback de los usuarios como mejoras.
- Desplegaron su aplicación y etiquetaron la versión (git tag).
### HU 8. Poder quitar like a una publicación. Máximo uno por usuario.
"Yo Como:" usuaria de la red social
"Quiero": quitar el like a las publicaciones
"Para": indicar que dejo de gustarme una publicacion
* **Criterios de Aceptación:**
- Poder usar el boton "like" y visualice el número al costado
- Cada que se da click cambio el color del boton like
- El boton like blanco representará que se quito el like
* **Definición de terminado:** 
- Debe ser una SPA.
- Debe ser responsive.
- Deben haber recibido code review de al menos una compañera del equipo.
- Hicieron los test unitarios
- Testearon manualmente buscando errores e imperfecciones simples.
- Hicieron pruebas de usabilidad e incorporaron el feedback de los usuarios como mejoras.
- Desplegaron su aplicación y etiquetaron la versión (git tag).
### HU 9. Poder eliminar un publicación específico.
"Yo Como:" usuaria de la red social
"Quiero": eliminar una publicacion
"Para": que ya no se visualice más
* **Criterios de Aceptación:**
- Crear un boton para eliminar
- Crear un boton para confirmar que desea eliminar la publicacion
* **Definición de terminado:** 
- Debe ser una SPA.
- Debe ser responsive.
- Deben haber recibido code review de al menos una compañera del equipo.
- Hicieron los test unitarios
- Testearon manualmente buscando errores e imperfecciones simples.
- Hicieron pruebas de usabilidad e incorporaron el feedback de los usuarios como mejoras.
- Desplegaron su aplicación y etiquetaron la versión (git tag).
### HU 10. Poder editar una publicación
"Yo Como:" usuaria con una publicacion
"Quiero": editar mi publicacion
"Para": cambiar el contenido
* **Criterios de Aceptación:**
- Boton para editar publicacion
- Boton para guardar cambios
* **Definición de terminado:** 
- Debe ser una SPA.
- Debe ser responsive.
- Deben haber recibido code review de al menos una compañera del equipo.
- Hicieron los test unitarios
- Testearon manualmente buscando errores e imperfecciones simples.
- Hicieron pruebas de usabilidad e incorporaron el feedback de los usuarios como mejoras.
- Desplegaron su aplicación y etiquetaron la versión (git tag).

## 4. Diseño
### 4.1 Prototipo de baja fidelidad (bocetos).
![Primeros bocetos](/boceto1.jpg)  imagenes 
(/boceto2.jpg)  imagenes 
(/boceto3.jpg)  imagenes 
### 4.2 Prototipo de alta fidelidad.
El prototipo de alta fidelidad se hizo en figma.
* [LINK DE FIGMA](https://www.figma.com/file/u6a29EEVnS2Ceq3kLA2Lm3/Untitled?node-id=0%3A1&t=CObhmsCv15STyQCI-0)
(/figma1.jpg)  imagenes 
(/figma2.jpg)  imagenes 
(/figma3.jpg)  imagenes 
(/figma4.jpg)  imagenes 
### 4.3 Paleta de color.
(/paleta.jpg)  imagenes 
## 5. Pruebas unitarias.
Se realizaron test para las funciones que vimos oportunas de testear y tuvimos los siguientes resultados: 
## 6. Recursos. 
**Software usado**
- Code
- UNIX Shell
- Git bash 
- Git 
- Git Hub
- Git Hub Pages 
**Referencias**
-[Promesas en Javascript](https://www.youtube.com/watch?v=VPHAIUFgc3k)
-[Autentificacion con Firebase y JavaScript](https://www.youtube.com/watch?v=Djh_eVj0D2w&list=LL&index=19&t=4830s)
-[Documentacion de autentificacion Firebase](https://firebase.google.com/docs/build)
