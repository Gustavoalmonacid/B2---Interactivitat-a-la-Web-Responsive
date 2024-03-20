//Creación del contenido del encabezado con los menus, tanto el horizontal para formatos de pantalla amplios, como el vertical para formatos de pantalla estrecha (móvil) que se activan al clicar sobre un icono

let header = document.getElementById("header");
// left
let left = document.createElement("div");
left.id = "left";
header.appendChild(left);

//logo
let logo = document.createElement("div");
logo.id = "logo";
left.appendChild(logo);
let logoimg = document.createElement("img");
logoimg.id = "logoimg";
logoimg.src = "imagenes/logo.png";
logoimg.alt = "Bendy";
logoimg.setAttribute("onclick", "cambio_estilo();");
logo.appendChild(logoimg);

// menuv
let menuv = document.createElement("div");
menuv.id = "menuv";
left.appendChild(menuv);
let rayas = document.createElement("a");
rayas.innerHTML = "☰";
menuv.appendChild(rayas);
let navv = document.createElement("ul");
navv.setAttribute("class", "navv");
menuv.appendChild(navv);
let li01 = document.createElement("li");
navv.appendChild(li01);
let a01 = document.createElement("a");
a01.setAttribute("href", "index.html");
a01.innerHTML = "Inicio";
li01.appendChild(a01);
let li02 = document.createElement("li");
navv.appendChild(li02);
let a02 = document.createElement("a");
a02.innerHTML = "Chapters";
li02.appendChild(a02);
let ul02 = document.createElement("ul");
li02.appendChild(ul02);
for (let i = 1; i < 6; i++) {
    let li20 = document.createElement("li");
    ul02.appendChild(li20);
    let a20 = document.createElement("a");
    a20.setAttribute("href", "chapter_"+i+".html");
    a20.innerHTML = "Chapter "+i;
    li20.appendChild(a20);
}
let li03 = document.createElement("li");
navv.appendChild(li03);
let a03 = document.createElement("a");
a03.setAttribute("href", "characters.html");
a03.innerHTML = "Personajes";
li03.appendChild(a03);
let li04 = document.createElement("li");
navv.appendChild(li04);
let a04 = document.createElement("a");
a04.setAttribute("href", "ending.html");
a04.innerHTML = "Reflexión";
li04.appendChild(a04);

//Joey
let joey = document.createElement("div");
joey.id = "joey";
header.appendChild(joey);
let aj = document.createElement("a");
aj.setAttribute("href", "coments.html");
joey.appendChild(aj);
let logoj = document.createElement("img");
logoj.src = "imagenes/jds.png";
logoj.title = "Click aquí para comentarios";
aj.appendChild(logoj);

//clear
let clear1 = document.createElement("div");
clear1.setAttribute("class", "clear");
header.appendChild(clear1);

//menuh
let menuh = document.createElement("div");
menuh.id = "menuh";
header.appendChild(menuh);
let navh = document.createElement("ul");
navh.setAttribute("class", "navh");
menuh.appendChild(navh);
let lih01 = document.createElement("li");
navh.appendChild(lih01);
let ah01 = document.createElement("a");
ah01.setAttribute("href", "index.html");
ah01.innerHTML = "Inicio";
lih01.appendChild(ah01);
let lih02 = document.createElement("li");
navh.appendChild(lih02);
let ah02 = document.createElement("a");
ah02.innerHTML = "Chapters";
lih02.appendChild(ah02);
let ulh02 = document.createElement("ul");
lih02.appendChild(ulh02);
for (let i = 1; i < 6; i++) {
    let li20 = document.createElement("li");
    ulh02.appendChild(li20);
    let a20 = document.createElement("a");
    a20.setAttribute("href", "chapter_"+i+".html");
    a20.innerHTML = "Chapter "+i;
    li20.appendChild(a20);
}
let lih03 = document.createElement("li");
navh.appendChild(lih03);
let ah03 = document.createElement("a");
ah03.setAttribute("href", "characters.html");
ah03.innerHTML = "Personajes";
lih03.appendChild(ah03);
let lih04 = document.createElement("li");
navh.appendChild(lih04);
let ah04 = document.createElement("a");
ah04.setAttribute("href", "ending.html");
ah04.innerHTML = "Reflexión";
lih04.appendChild(ah04);
let lih05 = document.createElement("li");
navh.appendChild(lih05);
let ah05 = document.createElement("a");
ah05.setAttribute("href", "coments.html");
ah05.innerHTML = "Comentarios";
lih05.appendChild(ah05);

//clear
header.appendChild(clear);

/*
            <div id="header">
                <div id="left">
                    <div id="logo">
                        <img src="imagenes/logo.png" alt="Bendy" id="logoimg" onclick="cambio_estilo()"/>
                    </div>
                    <div id="menuv">
                        <a>☰</a>
                        <ul class="navv">
                            <li><a href="index.html">Inicio</a></li>
                            <li><a>Chapters</a>
                                <ul>
                                    <li><a href="chapter_1.html">Chapter 1</a></li>
                                    <li><a href="chapter_2.html">Chapter 2</a></li>
                                    <li><a href="chapter_3.html">Chapter 3</a></li>
                                    <li><a href="chapter_4.html">Chapter 4</a></li>
                                    <li><a href="chapter_5.html">Chapter 5</a></li>
                                </ul>
                            </li>
                            <li><a href="characters.html">Personajes</a></li>
                            <li><a href="ending.html">Reflexión</a></li>
                        </ul>
                    </div>
                </div>
                <div id="joey">
                    <a href="coments.html"><img src="imagenes/jds.png" title="Click aquí para comentarios"/></a>
                </div>
                <div class="clear"></div>
                <div id="menuh">
                    <ul class="navh">
                        <li><a href="index.html">Inicio</a></li>
                        <li><a>Chapters</a>
                            <ul>
                                <li><a href="chapter_1.html">Chapter 1</a></li>
                                <li><a href="chapter_2.html">Chapter 2</a></li>
                                <li><a href="chapter_3.html">Chapter 3</a></li>
                                <li><a href="chapter_4.html">Chapter 4</a></li>
                                <li><a href="chapter_5.html">Chapter 5</a></li>
                            </ul>
                        </li>
                        <li><a href="characters.html">Personajes</a></li>
                        <li><a href="ending.html">Reflexión</a></li>
                    </ul>
                    <div class="clear"></div>
                </div>
            </div>
 */