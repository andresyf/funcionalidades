$(document).ready(function(){
    
    // Método Load - hacemos una petición ajax a la url https://reqres.in/
    //$("#datos").load("https://reqres.in/");

    // Métodos Get y Post - 
    $.get("https://reqres.in/api/users", {page: 2}, function(response){
        response.data.forEach((element, index) => {
            $("#datos").append("<p>"+element.first_name+ " "+element.last_name+"</p>");
        });
    });

});