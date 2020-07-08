$(document).ready(function(){
   // console.log("Estamos listos!!");

   // 1. Selector de ID
    var rojo = $("#rojo").css("background","red")
                        .css("color","white");

    // Podemos poner o no el var porque aquí 
    // no hacemos nada con la variable:

    $("#amarillo").css("background","yellow")
                        .css("color","green");

    $("#verde").css("background","green")
                        .css("color","white");

    // 2. Selector de clases:
    var mi_clase = $('.zebra').css("padding","5px");

    // Con el array podemos acceder a cada elemento de la clase
   //  console.log(mi_clase[0]);



   $('.sin_borde').click(function(){
       console.log("Click dado!!!");
        $(this).addClass('zebra');
   });

   //3. Selectores por etiqueta:

   var parrafos = $('p').css("cursor","pointer");

   /* Dos formas de ponerlo:

   a--------------
   parrafos.click(function(){
       if($(this).hasClass('zebra')){
        $(this).addClass("grande");
       }
        
   });  

   b--------------
   Para optimizar código pq así solo se busca
   una vez en el DOM.
   */
   parrafos.click(function(){
    var thisi = $(this);

    if(!thisi.hasClass('grande')){
        thisi.addClass('grande');
    }else{
        thisi.removeClass('grande');
    }
});  

    // 4.Selectores de atributo:

    $('[title="Google"]').css('background','#ccc');
    $('[title="Facebook"]').css('background','blue');

    // 5.Otros selectores:
    //Margen superior para párrafos y as:
    //$('p, a').addClass('margen-superior');

    var busqueda = $("#caja").find('.resaltado');
        console.log(busqueda);
});

