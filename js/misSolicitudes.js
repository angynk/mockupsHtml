$(document).ready(function() {
    var table = $('#example').DataTable( {
        
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
            "defaultContent": "<button class='btn btn-primary btn-xs dt-edit' id='editbutton'><span class='fa fa-edit'></span></button>"
        } ]
    } );
 
    $('#example tbody').on( 'click', 'button', function () {
        var data = table.row( $(this).parents('tr') ).data();
        alert( "hola" );
    } );
} );