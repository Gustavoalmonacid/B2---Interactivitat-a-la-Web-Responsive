# B2 - Interactivitat a la Web Responsive

## Documentación

Mi nombre es Gustavo Almonacid y he creado esta página web como el trabajo de segunda avaluació de la asignatura de lenguaje de marcas. Primero he de mencionar que he realizado este trabajo yo solo y que no he usado la misma web que cree en la primera avaluación, ya que preferí usar una web que hize el año pasado.

### Formulario

Uno de los requisitos obligatorios del proyecto era crear un formulario con el que el usuario pudiese interactuar, por lo que he creado un formulario en la página _index.html_ donde el usuario puede introducir su nombre, su email y alguna duda con respecto a la página.

![image](https://github.com/Gustavoalmonacid/B2---Interactivitat-a-la-Web-Responsive/assets/114769152/bcc9993e-0480-4e15-940e-fec770110e80)  
Código

![image](https://github.com/Gustavoalmonacid/B2---Interactivitat-a-la-Web-Responsive/assets/114769152/64a38289-9c2c-43a8-8361-ef2724342d57)  
Resultado final

Quiero añadir que en el botón hay un evento _onclick_ que lo único que hace es imprimir en un _alert_ 'Gracias por contactar con nosotros' y el nombre que se ha introducido en u_name.

### Scripts

Otro de los requisitos que había que hacer era la inclusió de ciertos scripts de javascript. Cinco de ellos eran obligatorios y luego, si nos daba tiempo podíamos añadir algunos por nuestra cuenta.

### Script de carga dinámica de contenido.

El objetivo de este script es coger el contenido de una página y hacerlo desaparecer o aparecer.  
En este caso, he cogido el contenido del div con el id _text_ y lo he hacho desaparecer, y en su lugar aparece el formulario previamente nombrado. el proces es simple, se selecciona el contenido usando **document.getElementById("")** y se le cambia el estilo con _style.dysplay_.

![image](https://github.com/Gustavoalmonacid/B2---Interactivitat-a-la-Web-Responsive/assets/114769152/5054d56f-dedf-49f0-92ef-d3fbab586e60)

### Script para notificaciones emergentes.

El objetivo de este script es que cuando se pulse alfgo, ya sea un botón o una imagen, apasrezca una notificación por alert o que se abra una ventana emergente.  
En mi caso, he seleccionado las imagenes que hay en la página _characters.html_ y, usando su id como indice, he creado un array que contiene citas mencionadas por estos personajes o por otros haciendo referencia ha estos, ya que no todos los personajes tienen una voz en el juego, y he hecho que cada vez que se pulse una imagen salga esta cita mediante un **alert**.

![image](https://github.com/Gustavoalmonacid/B2---Interactivitat-a-la-Web-Responsive/assets/114769152/e0fce53d-8113-44b0-8dd0-65f20659d14c)

### Script para una encuesta interactiva.

El objetivo de este script es que, mediante un formulario, se introduzca, por ejemplo, un comentario y este aparezca en la página.  
para este script no he usado el formulario obligatorio, sino que he creado uno nuevo en una páginan aparte llamada _coments.html_ a la que se puede acceder si se pulsa esta imagen:  
![image](https://github.com/Gustavoalmonacid/B2---Interactivitat-a-la-Web-Responsive/assets/114769152/21926cf4-5f9b-4abd-a4a0-b383c6d5e1f7)  
O, si lo seleccionas en el menu horizontal.  
En esta página hay una formulario en el que introduces tu nombre y el mensaje que quieras introducir y una vez que pulsas el botón para comentar se crea una _<p>_ y se inserta en el div con el id **impresion**. Sin embargo, he de mencionar que una vez que la página se recarga, todos los comentarios hechos previamente desaparecen.

![image](https://github.com/Gustavoalmonacid/B2---Interactivitat-a-la-Web-Responsive/assets/114769152/7969ada1-7046-457b-b0f3-c7988a5d9efa)

### Script para canvios de estilo.

El objetivo de este scrip es sencillo, pulsas un boton o algun elemento del hatml y los estilos de la página cambian.  
En este caso se pulsa el logo de la página:  
![image](https://github.com/Gustavoalmonacid/B2---Interactivitat-a-la-Web-Responsive/assets/114769152/38cabbe7-f1e9-4230-af92-b16452c52d7e)  
Y el logo, junto con la imagen de fondo cambian de esto:  
![image](https://github.com/Gustavoalmonacid/B2---Interactivitat-a-la-Web-Responsive/assets/114769152/32ec527f-b78c-499a-8cc9-5358b753ace6)  
A esto:  
![image](https://github.com/Gustavoalmonacid/B2---Interactivitat-a-la-Web-Responsive/assets/114769152/deb380f6-a003-4ca6-bf57-0c9efaacd429)  
Quería cambiar algunos otros elementos como la letra y el cursor, pero me di cuenta que si me entretenía haciendo eso no tendría tiempo de hacer los otros scripts, así que lo dejé un poco de lado. También quiero mencionar que este script, a diferencia de otros, fuinciona en todas las páginas.

![image](https://github.com/Gustavoalmonacid/B2---Interactivitat-a-la-Web-Responsive/assets/114769152/31eef8bb-b248-4f96-b92b-5445242df3d9)

He añadidio un if, para que si quieres volver al estilo original puedas si vuelves a clicar en el logo.

### Script relacionado con imágenes.

Probablemente el más complicado de todos, este script tiene el objetovo de crear un carrusel de imagenes que vaya cambiando cada cierto tiempo.  
En este caso lo he incluido en cada archivo, a excepción de las páginas _characters.html_ y _coments.html_ para que, lo que era previamente una lista:  
![image](https://github.com/Gustavoalmonacid/B2---Interactivitat-a-la-Web-Responsive/assets/114769152/587cc345-810d-4299-97d1-6a4f54e04e37)  
Pase a ser un carrusel que cambia la imagen cada 5 segundos, a menos que pases el cursor por encima que mantiene la imagen en la que te has quedado. A diferencia de los otros scripts, que estan situados en un archivo aparte conocido como _scripts.js_ este script se encuentra al En el archivo _carrusel.js_.

![image](https://github.com/Gustavoalmonacid/B2---Interactivitat-a-la-Web-Responsive/assets/114769152/486f4b94-aff3-4111-aae3-f2fb261cfaa0)

### Script para cargar el menu.

El objetivo que tiene este script es cargar dentro de cada página el header junto con el menu horizontal sin la necesidad de copiar y pegar todo el contenidoen cada página que creas.  
Este script se encuentra en el archivo _menu.js_ que se inicia al final de cada página. Para ello, crea todos los elementos con _crateElement_ y los añade al documento con _appendChild_. A su vez le atribuye a estos elementos sus **atributos**, ya seas el _src_ si se trata de una imagen, el _href_ si se trata de un enlace, el _id_ del elemento, ... 

![image](https://github.com/Gustavoalmonacid/B2---Interactivitat-a-la-Web-Responsive/assets/114769152/0ff3a3ed-3ba0-4b83-b72c-78a6564fb58f)
