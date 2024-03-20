# B2 - Interactivitat a la Web Responsive

## Documentación

Mi nombre es Gustavo Almonacid y he creado esta página web como el trabajo de segunda avaluació de la asignatura de lenguaje de marcas. Primero he de mencionar que he realizado este trabajo yo solo y que no he usado la misma web que cree en la primera avaluación, ya que preferí usar una web que hize el año pasado.

### Formulario

Uno de los requisitos obligatorios del proyecto era crear un formulario con el que el usuario pudiese interactuar, por lo que he creado un formulario en la página _index.html_ donde el usuario puede introducir su nombre, su email y algun comentario con respecto a la página.

![image](https://github.com/Gustavoalmonacid/B2---Interactivitat-a-la-Web-Responsive/assets/114769152/bcc9993e-0480-4e15-940e-fec770110e80)  
Código

![image](https://github.com/Gustavoalmonacid/B2---Interactivitat-a-la-Web-Responsive/assets/114769152/64a38289-9c2c-43a8-8361-ef2724342d57)  
Resultado final

Quiero añadir que en el botón hay un evento _onclick_ que lo único que hace es imprimir en un _alert_ 'Gracias por contactar con nosotros' y el nombre que se ha introducido en _u_name_.

### Scripts

Otro de los requisitos que había que hacer era la inclusió de ciertos scripts de javascript. Cinco de ellos eran obligatorios y luego, si nos daba tiempo podíamos añadir algunos por nuestra cuenta.

### 1. Script de carga dinámica de contenido.

El objetivo de este script es coger el contenido de una página y hacerlo desaparecer o aparecer.  
En este caso, al clicar el boton, en vez de abrir una página hace desaparecer el texto y revela el formulario. Para hacerlo se selecciona el contenido usando **document.getElementById("")** y se le cambia el estilo con _style.display_ sustituyendo **none** por **block**.

![image](https://github.com/Gustavoalmonacid/B2---Interactivitat-a-la-Web-Responsive/assets/114769152/5054d56f-dedf-49f0-92ef-d3fbab586e60)

### 2. Script para notificaciones emergentes.

El objetivo de este script es que cuando se pulse algun elemento aparezca una notificación por alert o que se abra una ventana emergente.  
En mi caso, he seleccionado las imagenes que hay en la página _characters.html_ y, usando su **id** como indice, he creado un array que contiene citas mencionadas por estos personajes o por otros haciendo referencia a estos, ya que no todos los personajes tienen una voz en el juego, y he hecho que cada vez que se pulse una imagen salga esta cita mediante un **alert**.

![image](https://github.com/Gustavoalmonacid/B2---Interactivitat-a-la-Web-Responsive/assets/114769152/e0fce53d-8113-44b0-8dd0-65f20659d14c)

### 3. Script para una encuesta interactiva.

El objetivo de este script es que, mediante un formulario, se introduzca, por ejemplo, un comentario y este aparezca en la página.  
Para este script no he usado el formulario obligatorio, sino que he creado uno nuevo en una páginan aparte llamada _coments.html_ a la que se puede acceder si se pulsa esta imagen:  
![image](https://github.com/Gustavoalmonacid/B2---Interactivitat-a-la-Web-Responsive/assets/114769152/21926cf4-5f9b-4abd-a4a0-b383c6d5e1f7)  
O, si lo seleccionas en el menu horizontal.  
En esta página hay una formulario en el que introduces tu nombre y el mensaje que quieras introducir y una vez que pulsas el botón para comentar se crea un parrafo _<p>_ y se inserta en el div con el id **impresion**. Sin embargo, he de mencionar que una vez que la página se recarga, todos los comentarios hechos previamente desaparecen.

![image](https://github.com/Gustavoalmonacid/B2---Interactivitat-a-la-Web-Responsive/assets/114769152/7969ada1-7046-457b-b0f3-c7988a5d9efa)

### 4. Script para canvios de estilo.

El objetivo de este script es pulsar un boton o algun elemento del html y los estilos de la página cambian.  
En este caso se pulsa el logo de la página:  
![image](https://github.com/Gustavoalmonacid/B2---Interactivitat-a-la-Web-Responsive/assets/114769152/38cabbe7-f1e9-4230-af92-b16452c52d7e)  
Y el logo, junto con la imagen de fondo cambian de esto:  
![image](https://github.com/Gustavoalmonacid/B2---Interactivitat-a-la-Web-Responsive/assets/114769152/32ec527f-b78c-499a-8cc9-5358b753ace6)  
A esto:  
![image](https://github.com/Gustavoalmonacid/B2---Interactivitat-a-la-Web-Responsive/assets/114769152/deb380f6-a003-4ca6-bf57-0c9efaacd429)  

Al hacer click de nuevo se va alternando de un estilo al otro.

![image](https://github.com/Gustavoalmonacid/B2---Interactivitat-a-la-Web-Responsive/assets/114769152/31eef8bb-b248-4f96-b92b-5445242df3d9)


### 5. Script relacionado con imágenes.

Este script tiene el objetovo de crear un carrusel de imagenes que vaya cambiando cada cierto tiempo.  
En este caso lo he incluido en cada archivo, a excepción de las páginas _characters.html_ y _coments.html_. Inicialmente era una lista:  
![image](https://github.com/Gustavoalmonacid/B2---Interactivitat-a-la-Web-Responsive/assets/114769152/587cc345-810d-4299-97d1-6a4f54e04e37)  
Pero gracias al script ha pasado a ser un carrusel que cambia la imagen cada 5 segundos. Al situar el cursor encima del carrusel se mantiene la imagen que hay en ese momento. El script se carga llamando al archivo _carrusel.js_ al final de cada página.

![image](https://github.com/Gustavoalmonacid/B2---Interactivitat-a-la-Web-Responsive/assets/114769152/486f4b94-aff3-4111-aae3-f2fb261cfaa0)

### 6. Script para cargar el menu.

El objetivo de este script es cargar el menu en cada página de modo que cualquier posterior modificación solo sea necesario hacerlo una vez, en vez de copiar y pegar en todas las páginas.  
El modo de hacerlo es hacer que el código html se genere mediante _javascript_ para que pueda llamarse, ya que a diferencia de otros lenguajes, como _php_ con el comando **include**, _html_ no permite incorporar código de otras páginas si no es de este modo.
Este script se encuentra en el archivo _menu.js_ que se llama al final de cada página porque necesita ser ejecutado cuando la página ya ha sido cargada. Para ello, crea todos los elementos con _crateElement_ y los añade al documento con _appendChild_. A su vez le atribuye a estos elementos sus **atributos**, ya seas el _src_ si se trata de una imagen, el _href_ si se trata de un enlace, el _id_ del elemento, ... 

![image](https://github.com/Gustavoalmonacid/B2---Interactivitat-a-la-Web-Responsive/assets/114769152/0ff3a3ed-3ba0-4b83-b72c-78a6564fb58f)
