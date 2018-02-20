$(document).ready(function() {
//    $("#dtTablaSolicitudes").hide(); 
    $("#dtFechaInicioCInvalida").hide(); 
    $("#dtFechaFinCInvalida").hide(); 
    $("#dtFechaInicioSInvalida").hide(); 
    $("#dtFechaFinSInvalida").hide(); 
    
    $("#dtConsultaForm").submit(function(e) {
        e.preventDefault();
    });
    
    $("#dtBuscarSolicitudes").click(function(){
        let fecha_inicio_solicitud = $("#dtFechaInicioS").val();
        let fecha_fin_solicitud = $("#dtFechaFinS").val();
        let fecha_inicio_concepto = $("#dtFechaInicioC").val();
        let fecha_fin_concepto = $("#dtFechaFinC").val();                            
        let fechaInicioSValid = isValidDate(fecha_inicio_solicitud);
        let fechaFinSValid = isValidDate(fecha_fin_solicitud);
        let fechaInicioCValid = isValidDate(fecha_inicio_concepto);
        let fechaFinCValid = isValidDate(fecha_fin_concepto);
        
        if(fechaInicioSValid && fechaFinSValid && fechaInicioCValid && fechaFinCValid ){
             $("#dtTablaSolicitudes").show();
             $("#dtFechaInicioSInvalida").hide(); 
             $("#dtFechaFinSInvalida").hide(); 
             $("#dtFechaInicioCInvalida").hide(); 
             $("#dtFechaFinCInvalida").hide(); 
             table.ajax.reload();
        }else {
             $("#dtTablaSolicitudes").hide(); 
            if(!fechaInicioSValid && fecha_inicio_solicitud!=""){
               $("#dtFechaInicioSInvalida").show();
            }
            if(!fechaFinSValid && fecha_fin_solicitud!=""){
               $("#dtFechaFinSInvalida").show();
            }
            if(!fechaInicioCValid && fecha_inicio_concepto!=""){
               $("#dtFechaInicioCInvalida").show();
            }
            if(!fechaFinCValid && fecha_fin_solicitud!=""){
               $("#dtFechaFinCInvalida").show();
            }
            
        }
    });
    
    var listaSolicitudes = [
            {
                entidad:"Doppler",
                fecha_radicacion:"2017-12-20",
                codigo:"ARLT1233",
                fecha_solicitud: "2018-01-25",
                observaciones: "Niguna"
            },
            {
                entidad:"Doppler",
                fecha_radicacion:"2017-12-20",
                codigo:"ARLT1233",
                fecha_solicitud: "2018-01-25",
                observaciones: "Niguna"
            }
            ];
    
    /* Componente DataTable JQUERY*/
    var table = $('#dtSolicitudes').DataTable( {
        
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

       data: listaSolicitudes,
        columns: [
        {data: 'checkbox'},
        { data: 'entidad' },
        { data: 'fecha_radicacion' },
        { data: 'codigo' },
        { data: 'fecha_solicitud' },
        { data: 'observaciones' },
        {data: "<button class='btn btn-primary btn-xs dt-edit' id='dtVerSolicitud'>Ver</button>&nbsp <button class='btn btn-primary btn-xs dt-edit' id='dtVerConcepto'>Concepto</button>"}
        ],
        columnDefs: [ {
            "targets": -1,
            "data": null,
            "defaultContent": "<button class='btn btn-primary btn-xs dt-edit' id='dtVerSolicitud'>Ver</button>&nbsp <button class='btn btn-primary btn-xs dt-edit' id='dtVerConcepto'>Concepto</button>"
        },
         {
         'targets': 0,
         'searchable': false,
         'orderable': false,
         'className': 'dt-body-center',
         'render': function (data, type, full, meta){
             return '<input type="checkbox" name="id[]" value="' + $('<div/>').text(data).html() + '">';
         }
      } ]
    } );

    /*Acciones */
    $('#dtSolicitudes tbody').on( 'click', '#dtVerSolicitud', function () {
        var data = table.row( $(this).parents('tr') ).data();
        //LLAMAR PANTALLA VER SOLICITUD
    } );
    
    $('#dtSolicitudes tbody').on( 'click', '#dtVerConcepto', function () {
        var data = table.row( $(this).parents('tr') ).data();
        //LLAMAR PANTALLA EDITAR SOLICITUD
    } );
    
    $('#dtFirmarConcepto').click(function() {
    // handle deletion here
  	  $('#dtFirmarModalModal').modal('show');
    });
    
     $('#dtRechazarConcepto').click(function() {
    // handle deletion here
  	  $('#dtRechazarModalModal').modal('show');
    });
    
    $('#dtFirmarBtn').click(function() {
    // handle deletion here
  	 $('#dtFirmarModalModal').modal('hide');
    });
    
    $('#dtRechazarBtn').click(function() {
    // handle deletion here
  	 $('#dtRechazarModalModal').modal('hide');
    });
    
    /*Seleccion de conceptos*/
    var rows_selected = [];
    $('#dtSolicitudes tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');

      // Get row data
      var data = table.row($row).data();

      // Get row ID
      var rowId = data.codigo;

      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, rows_selected);

      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         rows_selected.push(rowId);

      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         rows_selected.splice(index, 1);
      }

      if(this.checked){
         $row.addClass('selected');
      } else {
         $row.removeClass('selected');
      }


      // Prevent click event from propagating to parent
      e.stopPropagation();
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