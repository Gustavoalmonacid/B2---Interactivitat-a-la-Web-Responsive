// Función para mostrar el formulario y ocultar el texto
function showform() {
    // Obtener elementos del DOM
    formu = document.getElementById("formulario");
    text = document.getElementById("text");

    // Ocultar el texto y mostrar el formulario
    text.style.display = "none";
    formu.style.display = "block"; // Cambiado a "block" para mostrar el formulario
}


// Función para mostrar la cita basada en el ID pasado
function shownotification(id) {
    // Objeto con citas asociadas a IDs
    const quotes = {bendyimg:"My ink swells and boils. It consumes. I... am the Ink Demon. This realm is mine. You were born from it... you belong to it...", henryimg:"On the plus side, I got a new character I think people are going to love.", joeyimg:"Henry, come visit the old workshop. There's something I need to show you.", borisimg:"Good golly gosh!", twistedimg:"I was reborn with my perfection stolen from me. To get it back, I'll rip this rotted world apart. Angels are beautiful. Angels are beautiful.", allisonimg:"You're here for a reason Henry, there's always a reason! Even when you can't understand it. It's time, set us free!", tomimg:"I keep telling these people, if Mister Joey Drew keeps cutting corners like this, someone's sure to end up falling to their death. And it sure ain't gonna be me.", butcherimg:"The disgusting wretches have wandered my halls, have gone unchecked! They're trying to drag me back to the darkness! Don't let them take your angel", projeimg:"It’s just the nature of us projectionists to seek out the dark places."}
    // Mostrar alerta con la cita correspondiente al ID
    alert(quotes[id])
};


// Función para cambiar el estilo del logo y fondo
function cambio_estilo() {
    var logo = document.getElementById("logoimg");
    var back = document.body;
    console.log(logo.src)

    // Cambiar imagen y fondo dependiendo del estado actual
    if (logo.alt == "Bendy") {
        logo.alt = "Bendy2";
        logo.src = "imagenes/logo2.png";
        back.style.backgroundImage = "url('imagenes/background_change.jpg')";
    } else {
        logo.alt = "Bendy";
        logo.src = "imagenes/logo.png";
        back.style.backgroundImage = "url('imagenes/background.jpg')";
    }
}

// Función para enviar comentario
function enviaComentario(){
    // Obtener valores del comentario y nombre
    var content = document.getElementById("contenido").value;
    console.log(content);
    var name = document.getElementById("u_name").value;

    // Crear nuevo elemento <p> para mostrar el comentario
    var noucomment = document.createElement("p");
    // Agregar contenido al <p> con formato
    noucomment.innerHTML = "<i>" + name + ": </i> <br>" + "&emsp;" + content;

    // Agregar el nuevo comentario al div de impresión
    document.getElementById("impresion").appendChild(noucomment);

    // Limpiar campos después de enviar
    document.getElementById("contenido").value = "";
    document.getElementById("u_name").value = "";
}