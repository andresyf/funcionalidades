$(document).ready(function(){

    var caja = $("#caja");

    // efectos para que aparezca o desaparezca texto

    $("#mostrar").hide();
    // ocultamos el boton de mostrar

    //capturamos los efectos click en mostrar y ocultar
    $("#mostrar").click(function(){
        // se oculta el botón de mostrar
        $(this).hide();
        $("#ocultar").show();
        //caja.show("fast");
        // metodo -show- muestra la caja
        // fast/normal - hace un efecto visual de mostrado
        
        //caja.fadeIn('slow');
        //efecto de degradato en style de div, no none como el anterior

        caja.fadeTo('slow', 0.8);
        // faceTo - hace que vaya de un estado a otro
        // 0.8 - parámetro de opacidad
    });

    $("#ocultar").click(function(){
        // se oculta el botón de ocultar
        $(this).hide();
        $("#mostrar").show();
        //caja.hide("fast");
        // metodo -hide- oculta la caja - hace div display none
        // fast/normal - hace un efecto visual de recogido
        
        //caja.fadeOut('slow');
        //efecto de degradato en style de div, no none como el anterior

        caja.fadeTo('slow', 0.2);
        // faceTo - hace que vaya de un estado a otro
        // 0.2 - parámetro de opacidad
        console.log("Cartel ocultado");
    });

    // con el fin de simplicar el html en los botones
    // vamos a optimizar el código utilizando un solo botón
    $("#todoenuno").click(function(){
        caja.toggle('fast');
        //toggle - hace el efecto de aparecer y desaparecer
        // faceToggle - slideToggle - ejemplos de otros efectos
    });

    $("#animar").click(function(){
        caja.animate({
                       marginLeft: '500px',
                       fontSize: '40px',
                       height: 'auto'
                      }, 'slow')
            .animate({
                      borderRadius: '900px',
                      marginTop: '50px'   
                     }, 'slow')
            .animate({
                      borderRadius: '0px',
                      marginLeft: '0px'
            })
            .animate({
                borderRadius: '100px',
                marginTop: '0px'   
               }, 'slow')
               .animate({
                marginLeft: '500px',
                fontSize: '40px',
                height: 'auto'
               }, 'slow')
    });

});