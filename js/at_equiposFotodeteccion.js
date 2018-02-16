$(document).ready(function() {
  
    /*var table = $('#soportesTabla').DataTable( {
        "paging":   false,
        "ordering": false,
        "info":     false,
        "language": {
            "url": "pace/Spanish.json"
        },
        "data": listaSoportes,
        "columns": [
            { title: "Tipo Documento" },
            { title: "Nombre" },
            { title: "Acciones" }
        ],
        "columnDefs": [ {
            "targets": -1,
            "data": null,
            "defaultContent": "<button class='btn btn-primary btn-xs dt-edit' id='botonEliminar'><span class='fa fa-edit'></span></button>"
        } ]
    } );*/
    
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