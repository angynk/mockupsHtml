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
    $("#departamentos").html(listItemsDepartamentos);


    /*MUNICIPIOS*/
    var municipios = [];
    $("#departamentos").on('change', function() {
        //LLAMADA REST API
        municipios = ["Soacha","Chia","Choachi","Fomeque","Ubaque"];
        var listItemsMunicipios = '<option selected="selected" value="0">- Seleccione -</option>';
        for (var i = 0; i < municipios.length; i++) {
            listItemsMunicipios += "<option>" + municipios[i] + "</option>";
        }
        $("#municipios").html(listItemsMunicipios);

    });



    /*JURISDICCION*/
    var jurisdicciones = [ "A","B","C","D"];
    var listItemsJurisdicciones = [];
    for (var i = 0; i < jurisdicciones.length; i++) {
        listItemsJurisdicciones += "<option>" + jurisdicciones[i] + "</option>";
    }
    $("#jurisdicciones").html(listItemsJurisdicciones);


    /*ADJUNTAR SOPORTES*/

    var listaSoportes = [];

    $("#adjuntarBoton").click(function(){
        agregarSoporte();
    });

    var table = $('#soportesTabla').DataTable( {
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
    } );
    
    $("#nuevaSolicitudForm").submit(function(e) {
        e.preventDefault();
    });

} );

  function agregarSoporte() {
    let tipoArchivo = $("#tipoArchivo").val();
    let archivo = $("#archivo").val();
    if(archivo != "" && tipoArchivo != ""){
       $('#modal-senalizacion').modal('hide');
        //ENVIAR DATA A REST API
        ActualizarTabla({tipo_documento:tipoArchivo,nombre_documento:archivo.name});
        $('#modal-soporte').modal('hide');
    }      
  }
    
    function ActualizarTabla(soporte) {
        // listaSoportes.push(soporte);
        // table.rows.add(soporte);
        // table.draw();
        //$('#soportesTabla').dataTable().fnAddData(myData2);
    }