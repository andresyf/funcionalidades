$(document).ready(function(){

    reloadLinks();
    
    $('#add_button')
        .removeAttr('disabled')
        //removeAttr- elimia del DOM el atributo disabled que está en el button
        .click(function(){
            $('#menu').append('<li><a href="'+$("#add_link").val()+'"></a></li>');
            
            $("#add_link").val('');
            //se vacía el button del input después de que escriba un texto y pulse añadir
            reloadLinks();
            // prepend - añadiría el link al principio de la lista
            // html - añadiría el enlace pero los sustituiría por los que tenemos en el DOM
            // before - añadiría el enlace antes de la lista -ul- del DOM que es la que tenemos seleccionada
            // after - haría lo mismo que el caso anterior pero añadiéndolo después de la lista -ul-

    });
    
});

function reloadLinks(){
    $('a').each(function(index){
        var that = $(this);
        var enlace = that.attr("href");
        // attr- vale para añadir atributos

        that.attr('target','_blank');
        // attr - añade atributos target_blank a los elementos creados
        // removeAttr - puedes eliminar cualquier atributo que tengas en el DOM
        that.text(enlace);
    });
}