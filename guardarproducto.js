$('#tercera input[type="button"]').on('click', function(){
	
	
	var cont = $('#cont').val();
	var cont_producto = $('<div></div>');
	
	
	var imagen = $(this).parent().parent().children('img').attr("src");
	
	console.log(imagen);
	
	var nombre = $(this).parent().parent().children('img').attr("alt");
	
	console.log(nombre);
	
	
		
	
	
	cont_producto.append("<img src='"+imagen+"' alt='foto' width='100'>");
	cont_producto.append("<p>Nombre: "+nombre+"</p>");

	$('#mis_deseos').prepend(cont_producto)
			 .css({ border: "none",
					margin: "20px 0px",
					backgroundColor: "none",
					padding: "20px"});
					
	
	
	var cantidad_divs = $('#mis_deseos > div').length;
	
	if( cantidad_divs % 2 == 2){
		
		cont_producto.attr("class", "ui-block-a");
		
	}else{
		
		cont_producto.attr("class", "ui-block-b");
		
	}
	
	$('#mis_deseos').append( cont_producto );
		
	guardarDeseo();
	
	$.mobile.navigate("#cuarta");
	return false;
});


;$('#borrar3').on('click', function(){
	
	var eliminarTodo = confirm("Estás seguro que querés elimimar todos los Deseos guardados? (Esta acción no se puede deshacer)");
	if(eliminarTodo){
		
		$('#mis_deseos div').remove();
		
		localStorage.clear();
	}
});





$('#mis_deseos').on('click', 'div', function(){
	
	var eliminarlo = confirm("Querés eliminar este deseo? (esta acción no se puede deshacer)");
		if(eliminarlo){
			$(this).remove();
			
			guardarDeseo();
		}
});	



var deseos = new Array();

function guardarDeseo(){
	
	deseos.length = 0;
	
	$('#mis_deseos div').each(function() {
		
		deseos.push( $(this).html() );
		
		var DeseosGuardados = JSON.stringify( deseos );
		
		localStorage.setItem( 'cont',DeseosGuardados );
	});
		
}



$( document ).on( 'ready', function(){
	var itemGuardado = window.localStorage.getItem( "cont" );
	
	if (itemGuardado != "undefined" && itemGuardado != null && itemGuardado != ""){
		var cont = JSON.parse(itemGuardado);
		$.each(cont, function(indice, valor){
			
			var cont_producto = $('<div></div>');
			cont_producto.html( valor );
			
			var cant_divs = $('#mis_deseos > div' ).length;
			
			if( cant_divs % 2 == 0 ){ 
				cont_producto.attr( 'class', 'ui-block-a');
			}else{
				cont_producto.attr( 'class',  'ui-block-b');
			}
			
			$('#mis_deseos').append( cont_producto );
			
			
		})
		
	}
	
	
})




