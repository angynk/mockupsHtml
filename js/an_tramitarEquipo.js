var tramitarListaSenales = [
    {codigo:"Ejmplo 1",latitud:2.1,longitud:13.45}
];

$(document).ready(function() {
    
    var tramitarTablaSenales = $('#an-avisos-equipo').DataTable({

        "searching": false,
        paging:false,
        info:false,
        language: {
            "url": "../static/pace/Spanish.json"
        },

        data: tramitarListaSoportes,
        columns: [
            { data: 'codigo'},
            { data: 'latitud' },
            { data: 'longitud' }
        ]
    });
    
});