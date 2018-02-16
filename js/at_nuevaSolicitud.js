$(document).ready(function() {

    /*DEPARTAMENTO*/
    // $.ajax({
    //     url: "http://rest-service.guides.spring.io/greeting"
    // }).then(function(data) {
    //
    // });
    var departamentos = [
        {
            "id":1,
            "nombre":"Cundinamarca"
        },
        {
            "id":2,
            "nombre":"Bolivar"
        },
        {
            "id":3,
            "nombre":"Antioquia"
        }
    ];
    var listItemsDepartamentos = '<option selected="selected" value="0">- Seleccione -</option>';
    for (var i = 0; i < departamentos.length; i++) {
        listItemsDepartamentos += "<option value='" + departamentos[i].id + "'>" + departamentos[i].nombre + "</option>";
    }
    $("#atDepartamentos").html(listItemsDepartamentos);


    /*MUNICIPIOS*/
    var municipios = [];
    $("#atDepartamentos").on('change', function() {
        //LLAMADA REST API
        municipios = ["Soacha","Chia","Choachi","Fomeque","Ubaque"];
        var listItemsMunicipios = '<option selected="selected" value="0">- Seleccione -</option>';
        for (var i = 0; i < municipios.length; i++) {
            listItemsMunicipios += "<option>" + municipios[i] + "</option>";
        }
        $("#atMunicipios").html(listItemsMunicipios);

    });



    /*JURISDICCION*/
    var jurisdicciones = [ "A","B","C","D"];
    var listItemsJurisdicciones = [];
    for (var i = 0; i < jurisdicciones.length; i++) {
        listItemsJurisdicciones += "<option>" + jurisdicciones[i] + "</option>";
    }
    $("#atJurisdicciones").html(listItemsJurisdicciones);


    /*ADJUNTAR SOPORTES*/

    var listaSoportes = [];

    $("#atAdjuntarBoton").click(function(){
        agregarSoporte();
    });

    var table = $('#atSoportesTabla').DataTable( {
        "paging":   false,
        "ordering": false,
        "searching": false,
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
    } );
    
    $("#atNuevaSolicitudForm").submit(function(e) {
        e.preventDefault();
    });

} );

  function agregarSoporte() {
    let tipoArchivo = $("#atTipoArchivo").val();
    let archivo = $("#atArchivo").val();
    if(archivo != "" && tipoArchivo != ""){
       $('#modal-senalizacion').modal('hide');
        //ENVIAR DATA A REST API
        ActualizarTabla({tipo_documento:tipoArchivo,nombre_documento:archivo.name});
        $('#modal-soporte').modal('hide');
    }      
  }
    
    function ActualizarTabla(soporte) {
       // table.ajax.reload();
    }

/*ADJUNTAR Equipos*/
var listaEquipos = [];
   var tableEquipos = $('#atEquiposTabla').DataTable( {
        "paging":   false,
        "ordering": false,
        "searching": false,
        "info":     false,
        "language": {
            "url": "pace/Spanish.json"
        },
        "data": listaEquipos,
        "columnDefs": [ {
            "targets": -1,
            "data": null,
            "defaultContent": "<button class='btn btn-primary btn-xs dt-edit' id='atSenalizacionBoton'><span class='fa fa-edit'></span></button>"
        } ]
    } );