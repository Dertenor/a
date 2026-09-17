---
layout: default
title: Semana 3: Circuitos Arduino
nav_order: 3
---

# Semana 3: Circuitos Arduino

## Arduino 

Arduino es una plataforma que nos facilita hacer proyectos de automatización y electrónica, basada en hardware y software libre con código igualmente libre.

## ¿Cómo usar Arduino?

1.- **Instalar**: Aúnque sea redundante también es bueno poner este paso primero, ya que para usar arduino obviamente primero hay que instalarlo por lo que para eso deberás ir al sitio ofical de arduino en el cual buscarás el partado para instalar la versión ofical de arduino, ahí te dejara instalar múltiples versiones de arduino. dependiendo de tu dispositivo (dependiendo de su sitema operativo), con la posibilidad de incluso instalaer versiones pasadas incluso si así lo deseas. Los últimos pasos son dar los npermisos necesarios para que arduino funcvione de manera apropiada en tu dispositivo.

2.- **Interfaz**: Cuando abreas ya la aplicación de arduino podrás ver lo que yo dividiría de cuatro maneras: interfaz código, primera barra superior, segunda barra superior y barra lateral izquierda.

3.- **Interfaz Código**: por default ya hay una base para crear un código y es el apartado que abarca más espacio de la pantalla en el cual tendrás que escribir el código que quieres subir o programar, ya que sirve tanto para subir el código a una tarjeta compatible, como para compilar un código y hacer simulaciones simples.
```yml
void setup() {
  // put your setup code here, to run once:

}

void loop() {
  // put your main code here, to run repeatedly:

}
```
4.- **1° Barra Superior**: en este apartado podrás encontrar apartados de configuración en general de la aplicación como lo es: file (administrar archivos), edit (modificar archivos), sketch (configuración general para programar) y help (informaión de todo tipo).

5.- **2° Barra Supeior**: en esta sección encontraremos cuatro opciones a la izquieda que son verify (compilar tu código), upload (subir tu código a una tarjeta), debug (corregir errorews pero no lo he usado), y select board (seleccionar el tipo de tarjeta que estás usadno). Después están los dos opciones de la derecha que son serial plotter y serial monitor (ambas sirven para simular tu código).

6.- **Barra Lateral Izquierda**: Tines por nopciones sketch book (archivos arduino y nube), boards manager(instalar otras posibles tarjetas arduino), library manager (instalr loibrerias que son código prehecho para no programar desde cero), debug (corregir errores del cóidigo) y search (buscar cualquier funión de la aplicación por si no sabes donde se encuentra).

## Componentes y Materiales 

- **Tarjeta Arduino Uno**: El Arduino Uno es una placa electrónica de desarrollo basada en un microcontrolador que permite conectar el mundo físico con el código de programación de forma sencilla. 
![componente1](assets/img/Semana3/componente1.jpeg)

- **Cable USB-A - USB-B**: Es un cable que conecta un ordenador u otro dispositivo central a un periférico grande mediante dos tipos de conectores diferentes en sus extremos.
![componente2](assets/img/Semana3/componente2.jpeg)

- **Protoboard**:  Es una placa plástica con orificios interconectados internamente por láminas metálicas que permite armar y probar circuitos eléctricos de forma temporal sin necesidad de soldar.
![componente3](assets/img/Semana3/componente3.jpeg)

- **Jumpers**: Es un cable eléctrico delgado que tiene un conector en cada extremo, diseñado para hacer conexiones rápidas sin necesidad de soldar.
![componente4](assets/img/Semana3/componente4.jpeg)

- **Leds**: Es un pequeño dispositivo semiconductor que emite luz cuando pasa una corriente eléctrica a través de él.
![componente5](assets/img/Semana3/componente5.jpeg)

- **Push Button**: Es un pequeño dispositivo semiconductor que emite luz cuando pasa una corriente eléctrica a través de él.
![componente6](assets/img/Semana3/componente6.jpeg)

- **Resistencias**: Es un componente que se opone al flujo de la corriente eléctrica.
![componente7](assets/img/Semana3/componente7.jpeg)

- **Display de 7 segmentos**: Es un componente electrónico que sirve para mostrar números y algunos caracteres mediante siete líneas o segmentos que se encienden o apagan.
![componente8](assets/img/Semana3/componente8.jpeg)

- **Servomotores**: Es un motor eléctrico especial que permite controlar con exactitud la posición angular, la velocidad y la aceleración de su eje. 
![componente9](assets/img/Semana3/componente9.jpeg)

- **Potenciometro**: Es una resistencia eléctrica variable que permite ajustar de forma manual el voltaje o la corriente en un circuito.
![componente10](assets/img/Semana3/componente10.jpeg)

- **Fuente de Poder de 3 Canales**: Es un dispositivo que entrega tres salidas de energía independientes o multicanal desde una sola unidad.
![componente11](assets/img/Semana3/componente11.jpeg)

## 1° Circuito

Tinker

![tincir1](assets/img/Semana3/tincir1.png)

Foto

![fotcir1](assets/img/Semana3/fotcir1.jpg)

**Video:**[Video del circuito 1 funcionando (YouTube)](https://youtu.be/wxzb1nuZ_Fw?si=5iwkVhriuLhPJsmM)

Código

```yml
// C++ code
//
void setup()
{
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop()
{
  digitalWrite(LED_BUILTIN, HIGH);
  delay(1000); // Wait for 1000 millisecond(s)
  digitalWrite(LED_BUILTIN, LOW);
  delay(1000); // Wait for 1000 millisecond(s)
}
```

## 2° Circuito

![tincir2](assets/img/Semana3/tincir2.png)
![fotcir2](assets/img/Semana3/fotcir2.jpg)
**Video:**[Video del circuito 2 funcionando (YouTube)](https://youtu.be/54HbVc4zJCo?si=KiOWMMvYAZS3Lb-_)
```yml
// C++ code
//
void setup()
{
  pinMode(13, OUTPUT);
}

void loop()
{
  digitalWrite(13, HIGH);
}
```

## 3° Circuito

![tincir3](assets/img/Semana3/tincir3.png)
![fotcir3](assets/img/Semana3/fotcir3.jpg)
**Video:**[Video del circuito 3 funcionando (YouTube)](https://youtu.be/9MljCZP0cxw?si=lso3rm0hUqpf3Cnv)
```yml
// C++ code
//
void setup()
{
  pinMode(13, OUTPUT);
}

void loop()
{
  digitalWrite(13, LOW);
}
```
## 4° Circuito

![tincir4](assets/img/Semana3/tincir4.png)
![fotcir4](assets/img/Semana3/fotcir4.jpg)
**Video:**[Video del circuito 4 funcionando (YouTube)](https://youtu.be/LJUsGRnbNhs?si=Vp5Rso3VATzhT1fa)
```yml
// C++ code
//
void setup()
{
  pinMode(13, OUTPUT);
}

void loop()
{
  digitalWrite(13, HIGH);
  delay(1000); // Wait for 1000 millisecond(s)
  digitalWrite(13, LOW);
  delay(1000); // Wait for 1000 millisecond(s)
}
```
## 5° Circuito

![tincir5](assets/img/Semana3/tincir5.png)
![fotcir5](assets/img/Semana3/fotcir5.jpg)
**Video:**[Video del circuito 5 funcionando (YouTube)](https://youtu.be/nQWJhzaKhXI?si=xTUA896019bUI4LW)
```yml
// C++ code
//
void setup()
{
  pinMode(13, OUTPUT);
}

void loop()
{
  digitalWrite(13, HIGH);
  delay(1000); // Wait for 1000 millisecond(s)
  digitalWrite(13, LOW);
  delay(1000); // Wait for 1000 millisecond(s)
}
```
## 6° Circuito

![tincir6](assets/img/Semana3/tincir6.png)
![fotcir6](assets/img/Semana3/fotcir6.jpg)
**Video:**[Video del circuito 6 funcionando (YouTube)](https://youtu.be/FgfIBhSvAy4?si=GqUWmPBudOSIK_Ic)
```yml
// C++ code
//
void setup()
{
  pinMode(13, OUTPUT);
}

void loop()
{
  digitalWrite(13, HIGH);
  delay(1000); // Wait for 1000 millisecond(s)
  digitalWrite(13, LOW);
  delay(1000); // Wait for 1000 millisecond(s)
}
```

## 7° Circuito

![tincir7](assets/img/Semana3/tincir7.png)
![fotcir7](assets/img/Semana3/fotcir7.jpg)
**Video:**[Video del circuito 7 funcionando (YouTube)](https://youtu.be/PPpn34sVRk0?si=RB21A6iZAnimhj-i)
```yml
// C++ code
//
void setup()
{
  pinMode(13, OUTPUT);
}

void loop()
{
  digitalWrite(13, HIGH);
  delay(1000); // Wait for 1000 millisecond(s)
  digitalWrite(13, LOW);
  delay(1000); // Wait for 1000 millisecond(s)
}
```
## 8° Circuito

![tincir8](assets/img/Semana3/tincir8.png)
![fotcir8](assets/img/Semana3/fotcir8.jpg)
**Video:**[Video del circuito 8 funcionando (YouTube)](https://youtu.be/XIffWv5bJlg?si=nRftB71frYA6Fqhd)
```yml
// C++ code
//
void setup()
{
  pinMode(13, OUTPUT);
  pinMode(12, OUTPUT);
}

void loop()
{
  digitalWrite(13, HIGH);
  delay(1000); // Wait for 1000 millisecond(s)
  digitalWrite(13, LOW);
  delay(1000); // Wait for 1000 millisecond(s)
  digitalWrite(12, HIGH);
  delay(1000); // Wait for 1000 millisecond(s)
  digitalWrite(12, LOW);
  delay(1000); // Wait for 1000 millisecond(s)
}
```
## 9° Circuito

![tincir9](assets/img/Semana3/tincir9.png)
![fotcir9](assets/img/Semana3/fotcir9.jpg)
**Video:**[Video del circuito 9 funcionando (YouTube)](https://youtu.be/pmFdMPhLtLw?si=8VfNHsCfAxwyYuut)
```yml
// C++ code
//
void setup()
{
  pinMode(13, OUTPUT);	//Segmento e
  pinMode(12, OUTPUT);	//Segmento d
  pinMode(10, OUTPUT);	//Segmento c
  pinMode(9, OUTPUT);	//Segmento punto
  pinMode(7, OUTPUT);	//Segmento b
  pinMode(6, OUTPUT);	//Segmento a
  pinMode(5, OUTPUT);	//Segmento f
  pinMode(4, OUTPUT);	//Segmento g
}

void loop()
{
  digitalWrite(6, HIGH);//Segmento a
  digitalWrite(7, HIGH); //Segmento b
  digitalWrite(10, HIGH); //Segmento c
  digitalWrite(12, HIGH); //Segmento d
  digitalWrite(13, HIGH); //Segmento e
  digitalWrite(5, HIGH); //Segmento f
  digitalWrite(4, HIGH); //Segmento g
  digitalWrite(9, HIGH); //Segmento punto
  delay(1000);
}
```
## 10° Circuito

![tincir10](assets/img/Semana3/tincir10.png)
![fotcir10](assets/img/Semana3/fotcir10.jpg)
**Video:**[Video del circuito 10 funcionando (YouTube)](https://youtu.be/1Djhibp9MwU?si=X6Ys6APdpAAKXxQu)
```yml 
// C++ code
//
void setup()
{
  pinMode(13, OUTPUT);	//Segmento e
  pinMode(12, OUTPUT);	//Segmento d
  pinMode(10, OUTPUT);	//Segmento c
  pinMode(9, OUTPUT);	//Segmento punto
  pinMode(7, OUTPUT);	//Segmento b
  pinMode(6, OUTPUT);	//Segmento a
  pinMode(5, OUTPUT);	//Segmento f
  pinMode(4, OUTPUT);	//Segmento g
}

void loop()
{
    // Mostramos el numero 0
  digitalWrite(6, HIGH);//Segmento a
  digitalWrite(7, HIGH); //Segmento b
  digitalWrite(10, HIGH); //Segmento c
  digitalWrite(12, HIGH); //Segmento d
  digitalWrite(13, HIGH); //Segmento e
  digitalWrite(5, HIGH); //Segmento f
  digitalWrite(4, LOW); //Segmento g
  digitalWrite(9, LOW); //Segmento punto
  delay(1000);
  
    // Mostramos el numero 1
  digitalWrite(6, LOW);//Segmento a
  digitalWrite(7, HIGH); //Segmento b
  digitalWrite(10, HIGH); //Segmento c
  digitalWrite(12, LOW); //Segmento d
  digitalWrite(13, LOW); //Segmento e
  digitalWrite(5, LOW); //Segmento f
  digitalWrite(4, LOW); //Segmento g
  digitalWrite(9, LOW); //Segmento punto
  delay(1000);
  
    // Mostramos el numero 2
  digitalWrite(6, HIGH);//Segmento a
  digitalWrite(7, HIGH); //Segmento b
  digitalWrite(10, LOW); //Segmento c
  digitalWrite(12, HIGH); //Segmento d
  digitalWrite(13, HIGH); //Segmento e
  digitalWrite(5, LOW); //Segmento f
  digitalWrite(4, HIGH); //Segmento g
  digitalWrite(9, LOW); //Segmento punto
  delay(1000);
  
}
```
## 11° Circuito

![tincir11](assets/img/Semana3/tincir11.png)
![fotcir11](assets/img/Semana3/fotcir11.jpg)
**Video:**[Video del circuito 11 funcionando (YouTube)](https://youtu.be/x4rmQv8Artw?si=59HWQjyqz2z_dLyO)
```yml
// C++ code
//

void setup()
{
  pinMode(13, OUTPUT);	//LED
  
  pinMode(8, INPUT);	//BOTON
}

void loop()
{
  digitalWrite(13, digitalRead(8)); //Escribimpos en el LED el valor del BOTON
}
```
## 12° Circuito

![tincir12](assets/img/Semana3/tincir12.png)
![fotcir12](assets/img/Semana3/fotcir12.jpg)
**Video:**[Video del circuito 12 funcionando (YouTube)](https://youtu.be/e91HsMz7TC0?si=h8mLBX680REmPRBF)
```yml
// C++ code
//

void setup()
{
  pinMode(13, OUTPUT);	//LED1
  pinMode(8, INPUT);	//BOTON1
  
  pinMode(11, OUTPUT);	//LED2
  pinMode(2, INPUT);	//BOTON2
}

void loop()
{
  
  digitalWrite(13, digitalRead(8)); //Escribimpos en el LED1 el valor del BOTON1
  digitalWrite(11, digitalRead(2)); //Escribimpos en el LED2 el valor del BOTON2
}
```
## 13° Circuito

![tincir13](assets/img/Semana3/tincir13.png)
![fotcir13](assets/img/Semana3/fotcir13.jpg)
**Video:**[Video del circuito 13 funcionando (YouTube)](https://youtu.be/tY-GWnorAdo?si=8mNczIZf4OHHZR98)
```yml
// C++ code
//

void setup()
{
  pinMode(13, OUTPUT);	//LED
  
  pinMode(8, INPUT);	//BOTON
}

void loop()
{
  
  if (digitalRead(8) == HIGH)		//Pregunta si el boton1 esta activado
  {
    digitalWrite(13, HIGH);			//SI: encendemos el led1
  }
  else if(digitalRead(8) == LOW)	//Pregunta si el boton1 esta desactivado
  {
    digitalWrite(13, LOW);			//SI: apagamos el led1
  }
}
```
## 14° Circuito

![tincir14](assets/img/Semana3/tincir14.png)
![fotcir14](assets/img/Semana3/fotcir14.jpg)
**Video:**[Video del circuito 14 funcionando (YouTube)](https://youtu.be/THGUtYVkBB8?si=s8locrJbJ2duXXFE)
```yml
// C++ code
//

void setup()
{
  pinMode(13, OUTPUT);	//LED1
  pinMode(8, INPUT);	//BOTON1
  
  pinMode(11, OUTPUT);	//LED2
  pinMode(2, INPUT);	//BOTON2
}

void loop()
{
  
  if (digitalRead(8) == HIGH)		//Pregunta si el boton1 esta activado
  {
    digitalWrite(13, HIGH);			//SI: encendemos el led1
  }
  else if(digitalRead(8) == LOW)	//Pregunta si el boton1 esta desactivado
  {
    digitalWrite(13, LOW);			//SI: apagamos el led1
  }
  
  if (digitalRead(2) == HIGH)		//Pregunta si el boton2 esta activado
  {
    digitalWrite(11, HIGH);			//SI: encendemos el led2
  }
  else if(digitalRead(2) == LOW)	//Pregunta si el boton2 esta desactivado
  {
    digitalWrite(11, LOW);			//SI: apagamos el led2
  }
}
```
## 15° Circuito

![tincir15](assets/img/Semana3/tincir15.png)
![fotcir15](assets/img/Semana3/fotcir15.jpg)
**Video:**[Video del circuito 15 funcionando (YouTube)](https://youtu.be/h30HCgBj6zM?si=bGn3ScuOgziIoCxY)
```yml
// C++ code
//

void setup()
{
  //Inicializamos puertos
  pinMode(13, OUTPUT);	//LED1
  
  pinMode(8, INPUT);	//BOTON1
  pinMode(2, INPUT);	//BOTON2
}

void loop()
  
{
  if (digitalRead(8) == HIGH || digitalRead(2) == HIGH)		//Pregunta si se cumple la condición
  {
    digitalWrite(13, HIGH);			//SI: encendemos el led1
  }
  else	//En caso contrario
  {
    digitalWrite(13, LOW);			//NO: apagamos el led1
  }

}
```
## 16° Circuito

![tincir16](assets/img/Semana3/tincir16.png)
![fotcir16](assets/img/Semana3/fotcir16.jpg)
**Video:**[Video del circuito 16 funcionando (YouTube)](https://youtu.be/DiiEJSx_h1g?si=G6smIfZQGmCcW21o)
```yml
// C++ code
//

void setup()
{
  //Inicializamos puertos
  pinMode(13, OUTPUT);	//LED1
  
  pinMode(8, INPUT);	//BOTON1
  pinMode(2, INPUT);	//BOTON2
}

void loop()
{
  
  if (digitalRead(8) == HIGH && digitalRead(2) == HIGH)		//Pregunta si se cumple la condición
  {
    digitalWrite(13, HIGH);			//SI: encendemos el led1
  }
  else	//En caso contrario
  {
    digitalWrite(13, LOW);			//NO: apagamos el led1
  }

}
```
## 17° Circuito

![tincir17](assets/img/Semana3/tincir17.png)
![fotcir17](assets/img/Semana3/fotcir17.jpg)
**Video:**[Video del circuito 17 funcionando (YouTube)](https://youtu.be/tkFDoZR8kcc?si=ZEEhFyLY-ftpW8zC)
```yml
// C++ code
// CONTADOR

int cuenta = 0;		//Variable que guarda el numero de veces que se ha contado

void setup()
{
  //Inicializamos puertos
  pinMode(13, OUTPUT);	//LED1
  pinMode(12, OUTPUT);	//LED2
  pinMode(11, OUTPUT);	//LED3
  pinMode(10, OUTPUT);	//LED4
  pinMode(2, INPUT);	//BOTON
}

void loop()
{
  if (digitalRead(2) == HIGH)		//Pregunta si el boton esta activado
  {
    cuenta++;
    delay(500);
  }
  if(cuenta >= 5)
  {
    cuenta = 0;
  }
  
  if(cuenta == 0)
  {
  	digitalWrite(13, LOW);
    digitalWrite(12, LOW);
    digitalWrite(11, LOW);
    digitalWrite(10, LOW);
  } 
  else if(cuenta == 1)
  {
  	digitalWrite(13, HIGH);
    digitalWrite(12, LOW);
    digitalWrite(11, LOW);
    digitalWrite(10, LOW);
  } 
  else if(cuenta == 2)
  {
  	digitalWrite(13, HIGH);
    digitalWrite(12, HIGH);
    digitalWrite(11, LOW);
    digitalWrite(10, LOW);
  }
  else if(cuenta == 3)
  {
  	digitalWrite(13, HIGH);
    digitalWrite(12, HIGH);
    digitalWrite(11, HIGH);
    digitalWrite(10, LOW);
  }
  else if(cuenta == 4)
  {
  	digitalWrite(13, HIGH);
    digitalWrite(12, HIGH);
    digitalWrite(11, HIGH);
    digitalWrite(10, HIGH);
  }
}
```
## 18° Circuito

![tincir18](assets/img/Semana3/tincir18.png)
![fotcir18](assets/img/Semana3/fotcir18.jpg)
**Video:**[Video del circuito 18 funcionando (YouTube)](https://youtu.be/wxzb1nuZ_Fw?si=5iwkVhriuLhPJsmM)
```yml
// C++ code
// Incluímos la librería para poder controlar el servo
#include <Servo.h>

// Declaramos la variable para controlar el servo
Servo servoMotor;

void setup()
{ 
  // Iniciamos el servo para que empiece a trabajar con el pin 9
  servoMotor.attach(9);
}

void loop()
{
  // Desplazamos a la posición 90º
  servoMotor.write(90);
}
```
## 19° Circuito

![tincir19](assets/img/Semana3/tincir19.png)
![fotcir19](assets/img/Semana3/fotcir19.jpg)
**Video:**[Video del circuito 19 funcionando (YouTube)](https://youtu.be/wxzb1nuZ_Fw?si=5iwkVhriuLhPJsmM)
```yml
// C++ code
// Incluímos la librería para poder controlar el servo
#include <Servo.h>

// Declaramos la variable para controlar el servo
Servo servoMotor;

void setup()
{
  // Iniciamos el servo para que empiece a trabajar con el pin 9
  servoMotor.attach(9);
}

void loop()
{
  // Desplazamos a la posición 0º
  servoMotor.write(0);
  // Esperamos 1 segundo
  delay(1000);
  
  // Desplazamos a la posición 90º
  servoMotor.write(90);
  // Esperamos 1 segundo
  delay(1000);
  
  // Desplazamos a la posición 180º
  servoMotor.write(180);
  // Esperamos 1 segundo
  delay(1000);
}
```
## 20° Circuito

![tincir20](assets/img/Semana3/tincir20.png)
![fotcir20](assets/img/Semana3/fotcir20.jpg)
**Video:**[Video del circuito 20 funcionando (YouTube)](https://youtu.be/wxzb1nuZ_Fw?si=5iwkVhriuLhPJsmM)
```yml
// C++ code
// Incluímos la librería para poder controlar el servo
#include <Servo.h>

// Declaramos la variable para controlar el servo
Servo servoMotor;
int valor;		//variable que almacena la lectura analógica raw
int pos;        //Variable que almacena la posicion del servo

void setup()
{
  // Iniciamos el servo para que empiece a trabajar con el pin 9
  servoMotor.attach(9);
}

void loop()
{
  // leemos del pin A0 valor
  valor = analogRead(A0);
  //Convertimos el valor del potenciometro a una 
  //que entienda el servo
  pos = map(valor, 0, 1023, 0, 180);
  //Mandamos la posicion al servo 
  servoMotor.write(pos);
  // Esperamos 1 segundo
  delay(1000);
}
```
# 21° Circuito

![tincir21](assets/img/Semana3/tincir21.png)
![fotcir21](assets/img/Semana3/fotcir21.jpg)
**Video:**[Video del circuito 21 funcionando (YouTube)](https://youtu.be/wxzb1nuZ_Fw?si=5iwkVhriuLhPJsmM)
```yml
// C++ code
#include <Servo.h>
int valor;		//variable que almacena la lectura analógica raw
int pos;        //Variable que almacena la posicion del servo


//Le decimos al codigo que va a existir un servo
//llamado my servo
Servo myservo1;
Servo myservo2;

void setup()
{
  //Le decimos al codigo donde esta conectado el servo 1
  myservo1.attach(9);
  //Le decimos al codigo donde esta conectado el servo 2
  myservo2.attach(2);
}

void loop()
{
  // leemos el valor de potenciometro
  valor = analogRead(A0);
  //Convertimos el valor del potenciometro a una 
  //que entienda el servo
  pos = map(valor, 0, 1023, 0, 180);
  //Mandamos la posicion al servo 1
  myservo1.write(pos);
  //Mandamos la posicion al servo 2
  myservo2.write(pos);
  //esperamos un poco para que se mueva
  delay(10);
}
```
# 22° Circuito

![tincir22](assets/img/Semana3/tincir22.png)
![fotcir22](assets/img/Semana3/fotcir22.jpg)
**Video:**[Video del circuito 22 funcionando (YouTube)](https://youtu.be/wxzb1nuZ_Fw?si=5iwkVhriuLhPJsmM)
```yml
// C++ code
#include <Servo.h>
int valor1;		//variable que almacena la 
				//lectura analógica1
int valor2;		//variable que almacena la 
				//lectura analógica2
int pos1;        //Variable que almacena la posicion del servo1
int pos2;        //Variable que almacena la posicion del servo2


//Le decimos al codigo que va a existir un servo
//llamado my servo
Servo myservo1;
Servo myservo2;

void setup()
{
  //Le decimos al codigo donde esta conectado el servo 1
  myservo1.attach(9);
  //Le decimos al codigo donde esta conectado el servo 2
  myservo2.attach(2);
}

void loop()
{
  // leemos el valor de potenciometro1
  valor1 = analogRead(A0);
  // leemos el valor de potenciometro2
  valor2 = analogRead(A1);
  //Convertimos el valor del potenciometro a una 
  //que entienda el servo
  pos1 = map(valor1, 0, 1023, 0, 180);
  pos2 = map(valor2, 0, 1023, 0, 180);
  //Mandamos la posicion al servo 1
  myservo1.write(pos1);
  //Mandamos la posicion al servo 2
  myservo2.write(pos2);
  //esperamos un poco para que se mueva
  delay(10);
}
```
# 23° Circuito

![tincir23](assets/img/Semana3/tincir23.png)
![fotcir23](assets/img/Semana3/fotcir23.jpg)
**Video:**[Video del circuito 23 funcionando (YouTube)](https://youtu.be/wxzb1nuZ_Fw?si=5iwkVhriuLhPJsmM)
```yml
// C++ code
#include <Servo.h>
int valor;		//variable que almacena la lectura analógica raw
int pos;        //Variable que almacena la posicion del servo


//Le decimos al codigo que va a existir un servo
//llamado my servo
Servo myservo1;
Servo myservo2;

void setup()
{
  //Le decimos al codigo donde esta conectado el servo 1
  myservo1.attach(9);
  //Le decimos al codigo donde esta conectado el servo 2
  myservo2.attach(2);
}

void loop()
{
  // leemos el valor de potenciometro
  valor = analogRead(A0);
  //Convertimos el valor del potenciometro a una 
  //que entienda el servo
  pos = map(valor, 0, 1023, 0, 180);
  //Mandamos la posicion al servo 1
  myservo1.write(pos);
  //Mandamos la posicion al servo 2
  myservo2.write(pos);
  //esperamos un poco para que se mueva
  delay(10);
}
```
## Conclusión 

Aprendí 