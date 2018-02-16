$(document).ready(function() {
    
    $("#fotoDeteccionForm").submit(function(e) {
        e.preventDefault();
    });
    
    $("#adjuntarBoton").click(function(){
        agregarSeñalización();
    });

} );

function agregarSeñalización() {
    let nombre = $("#nombre").val();
    let tipo = $("#tipo").val();
    let latitud = $("#latitudSenalizacion").val();
    let longitud = $("#longitudSenalizacion").val();
    if(nombre != "" && tipo != "" && latitud != "" && longitud != ""){
       $('#modal-senalizacion').modal('hide');
    }
}