var tramitarListaSoportes = [
    {tipo_arhivo:"Ejmplo 1",nombre:"Plan seguridad",estado:"Aprobado"},
    {tipo_arhivo:"Ejmplo 2",nombre:"Plan seguridad",estado:"Rechazado"},
    {tipo_arhivo:"Ejmplo 2",nombre:"Plan seguridad",estado:"Pendiente"},
    {tipo_arhivo:"Ejmplo 2",nombre:"Plan seguridad",estado:"Con Requerimientos"}
];
var tramitarTablaSoportes = {};
var tramitarListaEquipos = [
    {codigo_equipo:"001",estado:"Aprobado",movilidad:false,infraccion:false,prevencion:true,siniestralidad:true},
    {codigo_equipo:"001",estado:"Pendiente",movilidad:true,infraccion:false,prevencion:true,siniestralidad:true}
];
var tramitarTablaEquipos = {};


$(document).ready(function() {
    
/* SOPORTES */    
 tramitarTablaSoportes = $('#an-tramitar-soportes').DataTable({

        "searching": false,
        paging:false,
        info:false,
        language: {
            "url": "../static/pace/Spanish.json"
        },

        data: tramitarListaSoportes,
        columns: [
            { data: 'tipo_arhivo'},
            { data: 'nombre' },
            { data: "<span class='label label-default pull-right'>Aprobado</span>" },
            { data: "<button class='btn btn-primary btn-xs dt-edit' id='an-tramite-ver'>Ver</button> &nbsp; <button class='btn btn-primary btn-xs dt-edit' id='an-tramite-evaluar'>Evaluar</button>" }
        ],
         columnDefs: [
             {
                'targets': -2,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, full, meta){
                        if(full.estado == "Aprobado"){
                            return "<span class='label label-success pull-center'>Aprobado</span>"
                        }else if(full.estado == "Rechazado"){
                            return "<span class='label label-danger pull-center'>Rechazado</span>"
                        }else if(full.estado == "Pendiente"){
                            return "<span class='label label-default pull-center'>Pendiente</span>"
                        }
                        return "<span class='label label-warning pull-center'>Con Requerimientos</span>"
                }          
            },
             {
            "targets": -1,
            "data": null,
            "defaultContent": "<button class='btn btn-primary btn-xs dt-edit' id='an-tramite-ver'>Ver</button> &nbsp; <button class='btn btn-primary btn-xs dt-edit' id='an-tramite-evaluar'>Evaluar</button>"
            } 
             
         ]

    });
    
        $('#an-tramitar-soportes tbody').on( 'click', '#an-tramite-evaluar', function () {
        var data = tramitarTablaSoportes.row( $(this).parents('tr') ).data();
        $('#an-tramitar-soporte').modal('show');
         } );
    
     $('#an-tramitar-soportes tbody').on('click', '#an-tramite-ver', function () {
       var data = tramitarTablaSoportes.row( $(this).parents('tr') ).data();
       var win = window.open(data.archivo, '_blank');
       win.focus();
    });
    
     $('#an-tramitar-sol-aceptar').click(function() {
        // handle deletion here
  	     $('#an-tramitar-soporte').modal('hide');
    });
    
     $('#an-tramitar-sol-rechazar').click(function() {
    // handle deletion here
  	 $('#an-tramitar-soporte').modal('hide');
    });
    
     $('#an-tramitar-sol-requerimiento').click(function() {
    // handle deletion here
  	 $('#an-tramitar-soporte').modal('hide');
    });
    
    
  /* EQUIPOS */  
    tramitarTablaEquipos = $('#an-tramitar-equipos').DataTable({
        language: {
            "url": "../static/pace/Spanish.json"
        },

        data: tramitarListaEquipos,
        columns: [
            { data: 'codigo_equipo'},
            { data: 'movilidad',
                "render": function (data, type, row) {
                          return (data === true) ? "<span class='fa ion-checkmark-round'></span>"
                          : "<span class='fa ion-close-round'></span>";
                }
            },
            { data: 'siniestralidad',
                "render": function (data, type, row) {
                          return (data === true) ? "<span class='fa ion-checkmark-round'></span>"
                          : "<span class='fa ion-close-round'></span>";
                } },
            { data: 'prevencion',
                "render": function (data, type, row) {
                          return (data === true) ? "<span class='fa ion-checkmark-round'></span>"
                          : "<span class='fa ion-close-round'></span>";
                } },
            { data: 'infraccion',
                "render": function (data, type, row) {
                          return (data === true) ? "<span class='fa ion-checkmark-round'></span>"
                          : "<span class='fa ion-close-round'></span>";
                } },
            { data: "<span class='label label-default pull-right'>Aprobado</span>" },
            { data: "<button class='btn btn-primary btn-xs dt-edit' id='an-equipo-evaluar'>Evaluar</button>" }
        ],
         columnDefs: [
             {
                'targets': -2,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, full, meta){
                        if(full.estado == "Aprobado"){
                            return "<span class='label label-success pull-center'>Aprobado</span>"
                        }else if(full.estado == "Rechazado"){
                            return "<span class='label label-danger pull-center'>Rechazado</span>"
                        }else if(full.estado == "Pendiente"){
                            return "<span class='label label-default pull-center'>Pendiente</span>"
                        }
                        return "<span class='label label-warning pull-center'>Con Requerimientos</span>"
                }          
            },
             {
            "targets": -1,
            "data": null,
            "defaultContent": "<button class='btn btn-primary btn-xs dt-edit' id='an-equipo-evaluar'>Evaluar</button>"
            } 
             
         ]

    });
    
    
    
   


});