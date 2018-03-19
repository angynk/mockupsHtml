var solicitudesPendientes =[];
var tableSolPendientes = null;


$(document).ready(function() {
    tableSolPendientes = $('#an-solicitudes-pendientes').DataTable( {
        
        "language": {
           "url": "../static/pace/Spanish.json"
        },
        
        data: solicitudesPendientes,
        columns: [
            { data: 'codigo_solicitud'},
            { data: 'usuario_solicitante.username' },
            { data: 'fecha_ingreso' },
            { data: 'fecha_vencimiento' },
            { data: 'estado' },
            {data: "<button class='btn btn-primary btn-xs dt-edit' id='an-tramitar-button'>Tramitar</button>"}
        ],        
        "columnDefs": [ {
            "targets": -1,
            "data": null,
            "defaultContent": "<button class='btn btn-primary btn-xs dt-edit' id='an-tramitar-button'>Tramitar</button>"
        } ]
    } );
 
    $('#an-solicitudes-pendientes tbody').on( 'click', '#an-tramitar-button', function () {
        var data = table.row( $(this).parents('tr') ).data();
        alert( "hola" );
    } );
} );

function getSolicitudesPendientesAnalista(){
$(document).ready(function() {
    $.ajax({
        url: window.location.protocol+"//"+window.location.host+"/api/solicitudes/"
    }).then(function(data) {
        var solicitudesLista = data.results;
          $('#an-solicitudes-pendientes').DataTable().clear();
          $('#an-solicitudes-pendientes').DataTable().rows.add(solicitudesLista).draw();
    }).catch(function(e){
          if(e.status==403){}else{
             $(location).attr('href', '/error-de-aplicativo/')
          }
    });
});
}