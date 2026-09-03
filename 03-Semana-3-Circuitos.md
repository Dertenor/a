---
layout: default
title: Semana 3: Circuitos Arduino
nav_order: 3
---

# Semana 3: Circuitos Arduino

## Arduino 

Arduino es una plataforma que nos facilita hacer proyectos de automatización y electrónica, basada en hardware y software libre con código igualmente libre.

## ¿Cómo usar Arduino?

- **Instalar**: Aúnque sea redundante también es bueno poner este paso primero, ya que para usar arduino obviamente primero hay que instalarlo por lo que para eso deberás ir al sitio ofical de arduino en el cual buscarás el partado para instalar la versión ofical de arduino, ahí te dejara instalar múltiples versiones de arduino. dependiendo de tu dispositivo (dependiendo de su sitema operativo), con la posibilidad de incluso instalaer versiones pasadas incluso si así lo deseas. Los últimos pasos son dar los npermisos necesarios para que arduino funcvione de manera apropiada en tu dispositivo.
- **Interfaz**: Cuando abreas ya la aplicación de arduino podrás ver lo que yo dividiría de cuatro maneras: interfaz código, primera barra superior, segunda barra superior y barra lateral izquierda.
- **Interfaz Código**: por default ya hay una base para crear un código y es el apartado que abarca más espacio de la pantalla en el cual tendrás que escribir el código que quieres subir o programar, ya que sirve tanto para subir el código a una tarjeta compatible, como para compilar un código y hacer simulaciones simples.
```yml
void setup() {
  // put your setup code here, to run once:

}

void loop() {
  // put your main code here, to run repeatedly:

}
```
- **1° Barra Superior**: en este apartado podrás encontrar apartados de configuración en general de la aplicación como lo es: file (administrar archivos), edit (modificar archivos), sketch (configuración general para programar) y help (informaión de todo tipo).
- **2° Barra Supeior**: en esta sección encontraremos cuatro opciones a la izquieda que son verify (compilar tu código), upload (subir tu código a una tarjeta), debug (corregir errorews pero no lo he usado), y select board (seleccionar el tipo de tarjeta que estás usadno). Después están los dos opciones de la derecha que son serial plotter y serial monitor (ambas sirven para simular tu código).
- **Barra Lateral Izquierda**: Tines por nopciones sketch book (archivos arduino y nube), boards manager(instalar otras posibles tarjetas arduino), library manager (instalr loibrerias que son código prehecho para no programar desde cero), debug (corregir errores del cóidigo) y search (buscar cualquier funión de la aplicación por si no sabes donde se encuentra).


## 1° Circuito

1.- Primero tuve que abrir el siguiente enlace e iniciar sesión en mi cuenta para poder cear el archivo

https://github.com/HuberGiron/portafolio-just-the-docs

2.- Después nos vamos al apartado que dice **<>Code**, luego le damos click en donde dice **fork** donde tendrás que introducir tu isuario (el owner) y el nombre del respositorio, ambos datos son importantes que los sepas bien para futuros pasos, y por último le das click en **create fork**.

## 3) Abrir el Codespace 

- Ir a la página principal
- Abir el menu de la derecha y seleccionar tu usuario (la opción de hasta abajo)
- Asegurarte que en la barra superior estes en el apartado de <>Code
- Dar lcick en el botón verde de <>Code (uno esta en la barra superior y este está un poco mas al centro de la pantalla)
- Te abrirá un mini menu desplegable el cual en la parte superior tiene dos apartados, que son local y codespaces, seleccionas codespaces, y luego le das al botón de create codespace 

## 4) Configurar el Codespace

Este paso es muy imortante ya que de realizarse mal tendrás que borrar el archivo y teneer que hacer todo el rpoceso de crear el archivo nuevamente, para eso tiene que abrir el buscador e introducir "_config.yml" y vas a ver una parte del códigp de la página en la cual se vera de la siguiente manera.

```yml
url: "https://TU_USUARIO.github.io"
baseurl: "/TU_REPO"
```

- En esta parte tienes que poner exactamente tu nombre de usuario sin boorar nada antes de la doble barra, y tampoco borrando lo que hay a partir del .github
- en donde dice "TU_REPO" solo borra esa parte y ramplázalo por el nombre del repositorio que le pusiste antes, para estos dos pasos era importante lo que te mencioné antes 

## 5) Guardar Tus Cambios 

1.- Para esto primero tendrás que hacer un cambio al archivo, intenta bque sea algo muy sencillo como crear una nueva carpeta o borrar un comnetario en el código 
2:- Después te vas al ícono que son tres círculos huecos unids por un palito
3.- Una vez ahí tienes que ponerle un comentario para identificar que cambios hiciste en ese momento ya que si llegas a necesitar retroceder a una versión más antigua de tu página podrás saber hasta que cambios queires llegar y poder corregir cualquier cosa que necesites o simplemnete para "retroceder en el tiempo".
4.- Una vez que pones tu comnetario le das al botón de color que dice **Confirmación o Summit**, una vez hehco esto tendrás que esperar un poco a que se guarden los cambios, un aproximadamnete un minuto para que los cambios se vean reflejados en tu página web

## 6) obtener la URL

- Cierra tu codespace y regresa a la página principal, selecciona nuevamnete en el menú tu usuario.
- Una vez ahí, en la barra superior selecciona **settings**.
- Aparecerá un menú a la derecha con varias opciones, una de las de hasta abajo será **Pages**, selecciona esa.
- Una vez ahí busca el apartadp de **Build and deployment**, ahí tendras que configurar unas cosas-
- En el apartado "source" selecciona la opción "Deploy from a branch"
- Luego en el ícono rato que se parece a una h al revés, selecciona la opción **main**
- A continuación en el ícono del folder selecciona la opción de **/(root)**
- Después a la derecha de esos dos apartados selecciona **save***
- Por último vuelve al partado de tu barra supeior y selecciona el partado de <>Code nuevamente, busca el engrane de la pantalla a la derecha y rellena la casilla que dice **Use yoyurb GitHub Pages website** y dale al botón de color que dice **Save changes**. a