---
layout: default
title: Semana 4: Solid Works Cubo
nav_order: 2
---

# Semana 4: Solid Works Cubo

En esta sección es cuando veremos acerca de Solid Works, para principalmente aprender a diseñar piezas quwe posteriormente mandaremos a cortar a una CNC cortadora láser, con esto en mente el objetivo a diseñar en esta sesión es un cubo que mida 5 X 5 centímetros.

# ¿Qué es Solid Works?

## 1) Instalar Solid Works

Es un programa de diseño asistido por computadora (CAD, por sus siglas en inglés) en 3D y 2D, desarrollado por Dassault Systèmes, que se utiliza para crear modelos de piezas, ensamblajes y planos técnicos.

# ¿Cómo diseñar nuestro cubo?

Para empezar es necesario decir que hay que instalar Solid Works, para ello necesitaras comprar una licencia, que en nuestro caso no necesitaremos ya que al iniciar sesión con nuestro correo institucional será gratuito, también es importante decir que solo funciona para WINDOWS y puedes usar el link de **aquí**[](https://www.solidworks.com/product/students/design-standard-form). Pero por otro lado también está instalado en las computadoras del Laboratorio den Electrónica, LPB3-02, hasta donde sé es el único, ya que fuí a otros laboratorios y no lo encontré instalado.

De no poder usar los métodos antes mencionados sugiero usar la siguiente página en el enlace de **aquí**[](https://mecatronica.ibero.mx/dxf/), pero como no utilicé esta página, no puedo dar instrucciones de como utlizarla. 

## 2) Diseñar la pieza

A continuación abre Solid Works, luego te pondrá mensajes al ser la primera vez que lo abres, luego de los mnesajes vs a ver un plano en blanco, hasta arriba busca la opción de "new", selecciona la que dice "Part" acompañada de una pieza amarilla y dale en "Ok", luego ve a sketch, selecciona el cuadrado que aparece en tus figuras, te aparecerán tres planos, da click en ¨top plane". Luego de va a aparecer dos felchitas que son el centro de  tu plano, tu cursor va a ser un lapiz, posiciona la punta del lápiz en el punto de dosnde salen las flechas y crea un cuadro, no importa el tamaño que le des, bastará con crearlo junto con otros rectángulos como se muestra a continuación ya que podremos modificar con precisión sus medidas.

Ahora vamos a ser uso de las asintotas, en el mismo lugar donde encontramos la herramienta para hacer cuadrados o rectángulos estará a la izquierda un poco más grande la opción de "smart dimension", una ves que le des click aparecerá un nuevo símbolo abajo a la derecha de tu cursor, ahora selecciona uno de los lados del cubo grande, luego da de nuevo click para posicionar la medida en ese posición (esto último es algo solo visual), con esto hecho te va aparecer un cuadro con el que podras cambiar la medida de ese lado, es importante decir que el programa maneja milímetros, con el propósito de ser lo más preciso posible al imprimir o cortar piezas, en nuestro caso como queremos hacer un cubo de 5cm X 5cm tenemos que poner "50" porque cada 10mm son 1cm, y será la misma medida para el otro lado, en caso de equicarte en alguna medida haz doble click en el número de la medida.

Ahora tocan los retángulos que hay dentro del cuadrado, estos son para hacer las "muescas" en donde iran nuestras otras piezas, nuestro mdf es de 3mm por lo que el ancho de estas muescas será de la misma medida, en mi caso la haré de 30mm de largo pero esto puede variar, lo único que importa es que todas las muecas y pestañas sean de mismo tamaño, ahora hay una parte importante ya que en Solid Works no existe la opción de "centrar", por lo que necesitaremos usar matemáticas, en mi caso como cada muesca mide 30mm, y el largo del cuadrado es de 50mm, la distantancia del lado del cubo a la muesca será de 10mm, para hacer esto volveremos a usar "smart dimension" pero ahora selleccionaremos dos líneas como se muestra a continuación:

Con esto ya aprendiste lo básico, ahoara solo toca hacer los otros lados, aquí están la meididas que utilicé yo.

Una vez que que tengas todas las medidas tenemos que obstruir la pieza, para esto tenemos que cambiar de la pestaña "sketch" a la pestaña de "features", hasta la izquierda tenemos la opción de "extruded boss/base", ahora nos mostrará nuestra pieza en forma tridimensional con un altura amarilla, nos abrirá un nuevo recuadro, a la izquierda 