function iniciarCarrusel() {
    let index = 0;
    const slides = document.querySelectorAll('#characters ul li');

    function showSlide(n) {
      slides.forEach((slide) => {
        slide.style.display = "none";
      });
      slides[n].style.display = "block";
    }

    function nextSlide() {
      index++;
      if (index >= slides.length) {
        index = 0;
      }
      showSlide(index);
    }

    let timer = setInterval(nextSlide, 5000); // Cambia la imagen cada 5 segundos

    // Mostrar siguiente slide automáticamente cada 5 segundos
    function autoPlay() {
      timer = setInterval(nextSlide, 5000);
    }

    // Detener el carrusel al pasar el mouse
    document.querySelector('#characters').addEventListener('mouseenter', () => {
      clearInterval(timer);
    });

    // Continuar el carrusel al sacar el mouse
    document.querySelector('#characters').addEventListener('mouseleave', () => {
      autoPlay();
    });

    autoPlay(); // Comenzar el carrusel automáticamente

    showSlide(index); // Mostrar la primera imagen al cargar
}

// Llamar a la función para inicializar el carrusel
iniciarCarrusel();
