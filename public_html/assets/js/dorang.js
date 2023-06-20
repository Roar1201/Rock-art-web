$(document).ready(function(){
    
    $('.search-toggle').click(function(){
        $('.search-wrapper').toggleClass('show');
    });

    $('.modal-toggle').click(function(){
        $('.modalBox').toggleClass('show');
    })

    $('.modalBox').click(function(){
        $(this).removeClass('show');
    });

    $('.spinner').click(function(){
        $(".theme-selector").toggleClass('show');
    });
    $('.light').click(function(){
        $('body').addClass('light-theme');
        $('body').removeClass('dark-theme');
    });
    $('.dark').click(function(){
        $('body').toggleClass('dark-theme');
        $('body').removeClass('light-theme');
    });
});

var flechaIzquierda = document.getElementById("flecha-izquierda");
            var flechaDerecha = document.getElementById("flecha-derecha");
            var cerrarImagenes = document.getElementById("cerrar-imagenes");
            var mostrarImagenes = document.getElementById("mostrar-imagenes");
            var elementos = document.getElementsByClassName("mover-al-scroll");
            var flechaIzquierda = document.getElementById("flecha-izquierda");
            var flechaDerecha = document.getElementById("flecha-derecha");
            var cerrarImagenes = document.getElementById("cerrar-imagenes");
            var fondoDifuminado = document.getElementById("fondo-difuminado");
            
            var imagen1 = document.getElementById("imagen1");
            var imagen2 = document.getElementById("imagen2");
            var imagen3 = document.getElementById("imagen3");
            var imagen4 = document.getElementById("imagen4");
            var fondoDifuminado = document.getElementById("fondo-difuminado");
            var imagenes = [imagen1, imagen2, imagen3, imagen4];
            var indiceActual = 0;
            flechaIzquierda.style.display = "none";
            flechaDerecha.style.display = "none";
            cerrarImagenes.style.display = "block";
            fondoDifuminado.style.display = "none";

            
            mostrarImagenes.addEventListener("click", function() {
                imagenes[indiceActual].style.display = "block";
                document.getElementById("imagen1").style.display = "block";
                document.getElementById("imagen2").style.display = "none";
                document.getElementById("imagen3").style.display = "none";
                document.getElementById("imagen4").style.display = "none";
                document.getElementById("fondo-difuminado").style.display = "block";
                cerrarImagenes.style.display = "block";

            });
            cerrarImagenes.addEventListener("click", function() {
            document.getElementById("imagen1").style.display = "none";
            document.getElementById("imagen2").style.display = "none";
            document.getElementById("imagen3").style.display = "none";
            document.getElementById("imagen4").style.display = "none";
            document.getElementById("fondo-difuminado").style.display = "none";
            });

            flechaIzquierda.addEventListener("click", function() {
                imagenes[indiceActual].style.display = "none";
                indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
                imagenes[indiceActual].style.display = "block";
            });

            flechaDerecha.addEventListener("click", function() {
                imagenes[indiceActual].style.display = "none";
                indiceActual = (indiceActual + 1) % imagenes.length;
                imagenes[indiceActual].style.display = "block";
            })
            
            mostrarImagenes.addEventListener("click", function() {
                document.getElementById("imagen1").style.display = "block";
                document.getElementById("imagen2").style.display = "none";
                document.getElementById("imagen3").style.display = "none";
                document.getElementById("imagen4").style.display = "none";
                document.getElementById("fondo-difuminado").style.display = "block";
                if(imagenes.length > 1) {
                    flechaIzquierda.style.display = "block";
                    flechaDerecha.style.display = "block";
                }
            });
            document.addEventListener("DOMContentLoaded", function() {
            
            flechaIzquierda.style.display = "none";
            flechaDerecha.style.display = "none";
            fondoDifuminado.style.display = "none";

            // El resto de tu código
            });

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
}); 
