# B2 - Interactivitat a la Web Responsive

## Documentación

Mi nombre es Gustavo Almonacid y he creado esta página web como el trabajo de segunda avaluació de la asignatura de lenguaje de marcas. Primero he de mencionar que he realizado este trabajo yo solo y que no he usado la misma web que cree en la primera avaluación, ya que estaba más conforme con una web que hize el año pasado.

### Form

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

