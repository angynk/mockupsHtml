$(document).ready(function() {
    //ESCONDER TABLA Y VALIDACIONES
    $("#coTablaSolicitudes").hide(); 
    $("#coFechaInicioInvalida").hide(); 
    $("#coFechaFinInvalida").hide(); 
    
    /*INSERTAR ANALISTAS*/
    var analistas = [{id:1,nombre:"Juan"},{id:2,nombre:"Natalia"}];
    var listItemsAnalistas = [];
    for (var i = 0; i < analistas.length; i++) {
        listItemsAnalistas += "<option value='" + analistas[i].id + "'>" + analistas[i].nombre + "</option>";
    }
    $("#coAnalistas").html(listItemsAnalistas);
    $("#coUsuariosAsignar").html(listItemsAnalistas);//Datos Modal 
    
    /*INSERTAR ENTIDADES TERRITORIALES*/
    var entidades = [{id:1,nombre:"Entidad 1"},{id:2,nombre:"Entidad 2"}];
    var listItemsEntidades = [];
    for (var i = 0; i < entidades.length; i++) {
        listItemsEntidades += "<option value='" + entidades[i].id + "'>" + entidades[i].nombre + "</option>";
    }
    $("#coAutoridades").html(listItemsEntidades);
    
    
    $("#coConsultaForm").submit(function(e) {
        e.preventDefault();
    });
    
    // EVENTO BUSQUEDA
    $("#coBuscarSolicitudes").click(function(){
        var estado = $("#coEstado").find(":selected").text();
        let fecha_inicio = $("#coFechaInicio").val();
        let fecha_fin = $("#coFechaFin").val();
        let fechaInicioValid = isValidDate(fecha_inicio);
        let fechaFinValid = isValidDate(fecha_fin);
        
        if(fechaInicioValid && fechaFinValid){
             $("#coTablaSolicitudes").show();
             $("#coFechaInicioInvalida").hide(); 
             $("#coFechaFinInvalida").hide(); 
             table.ajax.reload();
        } else {
             $("#coTablaSolicitudes").hide(); 
            if(!fechaInicioValid && fecha_inicio!=""){
               $("#coFechaInicioInvalida").show();
            }
            if(!fechaFinValid && fecha_fin!=""){
               $("#coFechaFinInvalida").show();
            }
            
        }
    });
    
    
    /* Componente DataTable JQUERY*/
    var table = $('#coSolicitudes').DataTable( {
        
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
            "defaultContent": "<button class='btn btn-primary btn-xs dt-edit' id='coVerBtn'>Ver</button> &nbsp <button class='btn btn-primary btn-xs dt-edit' id='coAsignarBtn'>Asignar</button>"
        } ]
    } );

    /*Acciones */
    $('#coSolicitudes tbody').on( 'click', '#coVerBtn', function () {
        var data = table.row( $(this).parents('tr') ).data();
        //LLAMAR PANTALLA VER SOLICITUD
    } );
    
      $('#coSolicitudes tbody').on( 'click', '#coAsignarBtn', function (e) {
        var data = table.row( $(this).parents('tr') ).data();
        $('#modal-asignar').modal('show');
      });
    
      $('#coAsignarBtn').click(function() {
    //SERVICIO ASIGNACION TAREA
  	 $('#modal-asignar').modal('hide');
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