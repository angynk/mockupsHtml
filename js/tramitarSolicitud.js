$(document).ready(function() {

    var anListaEquipos = [
            {
                tipo_tecnologia:"Doppler",
                utilizacion:"Multa",
                latitud: 1.523,
                longitud: 1.523
            }
            ];

    var anTable = $('#anTablaEquipos').DataTable( {
        "searching": false,
        language: {
            "url": "pace/Spanish.json"
        },
        data: anListaEquipos,
        columns: [
        { data: 'tipo_tecnologia' },
        { data: 'utilizacion' },
        { data: 'latitud' },
        { data: 'longitud' },
        {data: "<button class='btn btn-primary btn-xs dt-edit' id='anBotonSenalizacion'><span class='fa ion-flag'></span></button>"},
        {data: "<button class='btn btn-primary btn-xs dt-edit' id='anBotonAprobar'>Aprobar</button>&nbsp<button class='btn btn-primary btn-xs dt-edit' id='anBotonRechazar'>Rechazar</button>"}
        ],
        columnDefs: [ {
            "targets": -2,
            "data": null,
            "defaultContent": "<button class='btn btn-primary btn-xs dt-edit' id='anBotonSenalizacion'><span class='fa ion-flag'></span></button>"
        },
        {
            "targets": -1,
            "data": null,
            "defaultContent": "<button class='btn btn-primary btn-xs dt-edit' id='anBotonAprobar'>Aprobar</button>&nbsp<button class='btn btn-primary btn-xs dt-edit' id='anBotonRechazar'>Rechazar</button>"
        }]
    } );

    /*Accion */
    $('#anTablaEquipos tbody').on( 'click', '#anBotonSenalizacion', function () {
        var data = anTable.row( $(this).parents('tr') ).data();
        //Redireccionar
        // alert(data.tipo_tecnologia);
        console.log( $('#an-modal-senalizacion').find('#anTipoSenal'));
        $('#anTipoSenal').val(data.tipo_tecnologia);
        $('#an-modal-senalizacion').modal('show');
    } );

      $('#anTablaEquipos tbody').on( 'click', '#anBotonAprobar', function () {
        var data = anTable.row( $(this).parents('tr') ).data();
         $('#anAprobarModal').modal('show');
    } );
    
     $('#anTablaEquipos tbody').on( 'click', '#anBotonRechazar', function () {
        var data = anTable.row( $(this).parents('tr') ).data();
         $('#anRechazarModal').modal('show');
    } );
    
    $('#anAprobarBtn').click(function() {
    // handle deletion here
  	 $('#anAprobarModal').modal('hide');
    });
    
    $('#anRechazarBtn').click(function() {
    // handle deletion here
  	 $('#anRechazarModal').modal('hide');
    });
    
     $('#anAprobarDocBtn').click(function() {
    // handle deletion here
    });
    
     $('#anRechazarDocBtn').click(function() {
    // handle deletion here
    });
    
   


});