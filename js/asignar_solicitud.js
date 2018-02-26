$(document).ready(function() {
    
    
    /*INSERTAR ANALISTAS*/
    var listAnalistas = [{id:1,nombre:"Juan",num_solicitudes: 5,num_elementos: 560},{id:2,nombre:"Natalia",num_solicitudes: 1,num_elementos: 20}];
    
    /* Componente DataTable JQUERY*/
    var table = $('#coTablaAnalistas').DataTable( {
        
        "searching": false,
        paging:false,
        "language": {
            "url": "pace/Spanish.json"
        },
        "data": listAnalistas,
        columns: [
            {data: 'radio'},
            { data: 'nombre'},
            { data: 'num_solicitudes' },
            { data: 'num_elementos' } ],
        columnDefs: [ 
         {
         'targets': 0,
         'searchable': false,
         'orderable': false,
         'className': 'select-checkbox',
         'render': function (data, type, full, meta){
             return '<input type="radio" name="id[]" value="' + $('<div/>').text(data).html() + '">';
         }
      } ],
        select: {
            style:    'os',
            selector: 'td:first-child'
        }
        
    } );
    
    /*Seleccion de conceptos*/
    var row_selected = [];
    $('#coTablaAnalistas tbody').on('click', 'input[type="radio"]', function(e){
    console.log("Entre");
      var $row = $(this).closest('tr');

      // Get row data
      var data = table.row($row).data();

      // Get row ID
      var rowId = data.id;

      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked ){
        row_selected = rowId;
      } 

      if(this.checked){
         $row.addClass('selected');
      } else {
         $row.removeClass('selected');
      }


      // Prevent click event from propagating to parent
      e.stopPropagation();
   });
    
    
     $("#coAsignarSolicitud").click(function(){
       console.log(row_selected);
    });

   
    
    } );

