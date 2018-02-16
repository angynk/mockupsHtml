$(document).ready(function() {

    var listaEquipos = [
            {
                tipo_tecnologia:"Doppler",
                utilizacion:"Multa",
                latitud: 1.523,
                longitud: 1.523
            }
            ];

    var table = $('#tablaEquipos').DataTable( {
        language: {
            "url": "pace/Spanish.json"
        },
        data: listaEquipos,
        columns: [
        { data: 'tipo_tecnologia' },
        { data: 'utilizacion' },
        { data: 'latitud' },
        { data: 'longitud' },
        {data: "<button class='btn btn-primary btn-xs dt-edit' id='botonSenalizacion'><span class='fa ion-flag'></span></button>"}
        ],
        columnDefs: [ {
            "targets": -1,
            "data": null,
            "defaultContent": "<button class='btn btn-primary btn-xs dt-edit' id='botonSenalizacion'><span class='fa ion-flag'></span></button>"
        } ]
    } );

    /*Accion */
    $('#tablaEquipos tbody').on( 'click', 'button', function () {
        var data = table.row( $(this).parents('tr') ).data();
        //Redireccionar
        // alert(data.tipo_tecnologia);
        console.log( $('#modal-senalizacion').find('#tipoSenal'));
        $('#tipoSenal').val(data.tipo_tecnologia);
        $('#modal-senalizacion').modal('show');
    } );



});