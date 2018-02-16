$(document).ready(function() {
    $("#atTablaSolicitudes").hide(); 
    $("#atFechaInicioInvalida").hide(); 
    $("#atFechaFinInvalida").hide(); 
    
    
    $("#atConsultaForm").submit(function(e) {
        e.preventDefault();
    });
    
    $("#atBuscarSolicitudes").click(function(){
        var estado = $("#atEstado").find(":selected").text();
        let fecha_inicio = $("#atFechaInicio").val();
        let fecha_fin = $("#atFechaFin").val();
        let fechaInicioValid = isValidDate(fecha_inicio);
        let fechaFinValid = isValidDate(fecha_fin);
        
        if(fechaInicioValid && fechaFinValid){
             $("#atTablaSolicitudes").show();
             $("#atFechaInicioInvalida").hide(); 
             $("#atFechaFinInvalida").hide(); 
             table.ajax.reload();
        } else {
             $("#atTablaSolicitudes").hide(); 
            if(!fechaInicioValid && fecha_inicio!=""){
               $("#atFechaInicioInvalida").show();
            }
            if(!fechaFinValid && fecha_fin!=""){
               $("#atFechaFinInvalida").show();
            }
            
        }
    });
    /* Componente DataTable JQUERY*/
    var table = $('#atSolicitudes').DataTable( {
        
        "searching": false,
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
            "defaultContent": "<button class='btn btn-primary btn-xs dt-edit' id='at-verbutton'>Ver</button> &nbsp <button class='btn btn-primary btn-xs dt-edit' id='at-editarbutton'>Editar</button> &nbsp <button class='btn btn-primary btn-xs dt-edit' id='at-cancelarbutton'>Cancelar</button>"
        } ]
    } );

    /*Acciones */
    $('#atSolicitudes tbody').on( 'click', '#at-verbutton', function () {
        var data = table.row( $(this).parents('tr') ).data();
        //LLAMAR PANTALLA VER SOLICITUD
    } );
    
    $('#atSolicitudes tbody').on( 'click', '#at-editarbutton', function () {
        var data = table.row( $(this).parents('tr') ).data();
        //LLAMAR PANTALLA EDITAR SOLICITUD
    } );
    
      $('#atSolicitudes tbody').on( 'click', '#at-cancelarbutton', function (e) {
        var data = table.row( $(this).parents('tr') ).data();
        $('#atCancelarModal').modal('show');
      });
    
    $('#atSiBtn').click(function() {
    // handle deletion here
  	 $('#atCancelarModal').modal('hide');
    });
    
    } );


function isValidDate(dateString)
{
    // First check for the pattern
    if(!/^([0-9]{4})-([0-9]{2})-([0-9]{2})$/.test(dateString))
        return false;

    // Parse the date parts to integers
    var parts = dateString.split("-");
    var day = parseInt(parts[2], 10);
    var month = parseInt(parts[1], 10);
    var year = parseInt(parts[0], 10);

    // Check the ranges of month and year
    if(year < 2018 || year > 3000 || month == 0 || month > 12)
        return false;

    var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

    // Adjust for leap years
    if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
        monthLength[1] = 29;

    // Check the range of the day
    return day > 0 && day <= monthLength[month - 1];
};