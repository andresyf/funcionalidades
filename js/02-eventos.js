$(document).ready(function(){
    
    // MouseOver y MouseOut
    var caja = $("#caja");

    caja.mouseover(function(){
        $(this).css("background","red");
    });

    caja.mouseout(function(){
        $(this).css("background", "green");
    });

    // Hover
    function cambiaRojo(){
        $(this).css("background","red");
    }

    function cambiaVerde(){
        $(this).css("background", "blue");
    }

    caja.hover(cambiaRojo, cambiaVerde);

    // Click, Doble click

    caja.click(function(){
        $(this).css("background", "blue")
                .css("color", "white");
    });

    caja.dblclick(function(){
        $(this).css("background", "pink")
                .css("color", "yellow");
    });

    // Focus y Blur

    var nombre = $("#nombre");

    nombre.focus(function(){
        $(this).css("border", "5px solid green");
    });

    nombre.blur(function(){
        $(this).css("border", "1px solid #ccc");
        
        $("#datos").text($(this).val()).show();
    });

    // Mousedown y mouseup

    var nombre = $("#nombre");
    var datos = $("#datos");
    var sigueme = $("sigueme");

    nombre.focus(function(){
        $(this).css("border", "5px solid green");
    });

    nombre.blur(function(){
        $(this).css("border", "1px solid #ccc");
        
        datos.text($(this).val()).show();
    });

    datos.mousedown(function(){
        $(this).css("border-color", "grey");
    });

    datos.mouseup(function(){
        $(this).css("border-color", "black");
    });

    // Mousemove

    $(document).mousemove(function(){
        $('body').css("cursor", "none");
        $("#sigueme").css("left", event.clientX)
                    .css("top", event.clientY);
    });



});