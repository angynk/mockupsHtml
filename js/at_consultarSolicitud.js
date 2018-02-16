$(document).ready(function() {

    /*Buscar solicitudes*/
    $("#tablaSolicitudes").hide();

    $("#buscarSolicitudes").click(function(){
        var estado = $("#estado").find(":selected").text();
        var fecha_inicio = $("#fechaInicio").val();
        var fecha_fin = $("#fechaFin").val();
        // if(fecha_inicio != '' && fecha_fin != ''){
        //     $("#tablaSolicitudes").show();
        //     if(fecha_inicio.valid() && fecha_fin.valid()){
        //         $("#tablaSolicitudes").show();
        //     }
        // }

        $("#tablaSolicitudes").show();
    });

    /* Componente DataTable JQUERY*/
    var table = $('#example').DataTable( {

        "language": {
            "url": "pace/Spanish.json"
        },

       /* Para Consumir el API
       "processing": true,
        "serverSide": true,
        "ajax": {
            "url": "scripts/server_processing.php",
            "data": function ( d ) {
                d.myKey = "myValue";
                // d.custom = $('#myInput').val();
                // etc
            }
        },*/

        "ajax": "arrays.json",
        "columnDefs": [ {
            "targets": -1,
            "data": null,
            "defaultContent": "<button class='btn btn-primary btn-xs dt-edit' id='editbutton'><span class='fa fa-edit'></span></button>"
        } ]
    } );

    /*Accion */
    $('#example tbody').on( 'click', 'button', function () {
        var data = table.row( $(this).parents('tr') ).data();
        alert( "hola" );
    } );



} );