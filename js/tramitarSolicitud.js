$(document).ready(function() {
    
     $("#anArchivoInvalido").hide(); 
     $("#anFormatoInvalido").hide(); 

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
            {data:"<span class='label label-default pull-center'>Completed</span>"},
        {data: "<button class='btn btn-primary btn-xs dt-edit' id='anBotonAprobar'>Aprobar</button>&nbsp<button class='btn btn-primary btn-xs dt-edit' id='anBotonRechazar'>Rechazar</button>"}
        ],
        columnDefs: [ {
            "targets": -3,
            "data": null,
            "defaultContent": "<button class='btn btn-primary btn-xs dt-edit' id='anBotonSenalizacion'><span class='fa ion-flag'></span></button>"
        },
        {
            "targets": -2,
            "data": null,
            "defaultContent": "<span class='label label-default pull-center'>Completed</span>"
        },
        {
            "targets": -1,
            "data": null,
            "defaultContent": "<button class='btn btn-primary btn-xs dt-edit' id='anBotonAprobar'>Aprobar</button>&nbsp<button class='btn btn-primary btn-xs dt-edit' id='anBotonRechazar'>Rechazar</button>"
        }]
    } );

    /*Acciones */
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
        $('#aprobarDocumentoModal').modal('show');
    });
    
     $('#anRechazarDocBtn').click(function() {
         $('#rechazarDocumentoModal').modal('show');
    });
    
     $('#rechazarDocBtn').click(function() {
    // handle deletion here
  	 $('#rechazarDocumentoModal').modal('hide');
    });
    
     $('#aprobarDocBtn').click(function() {
    // handle deletion here
  	 $('#aprobarDocumentoModal').modal('hide');
    });
    
    /*Validar archivo*/
    var uploadField = document.getElementById("atArchivo");
    var allowedFiles = [".rar", ".zip", ".pdf"];
    var regex = new RegExp("([a-zA-Z0-9\s_\\.\-:])+(" + allowedFiles.join('|') + ")$");
    
            uploadField.onchange = function() {
                $("#anArchivoInvalido").hide(); 
                $("#anFormatoInvalido").hide(); 
                
                if(this.files[0].size > 31457280){
                    $("#anArchivoInvalido").show(); 
                }else{
                   
                    console.log(regex.test(this.files[0].name.toLowerCase()));
                    if(!regex.test(this.files[0].name.toLowerCase())){
                        $("#anFormatoInvalido").show(); 
                    }  
                }
            };
    
    /*Guardar Archivo de concepto*/
    $('#anGuardar').click(function() {
        
    });
    
   


});