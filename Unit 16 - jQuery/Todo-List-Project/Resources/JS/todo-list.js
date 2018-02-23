document.addEventListener("DOMContentLoaded", function(){
	// toggle class (grey + strike-through) when clicked
	$('ul').on('click', 'li', function() {
		$(this).toggleClass('completed');
	});

	// create delete functionality
	$('ul').on('click', 'span', function(event) {
		$(event.target).parent().fadeOut(500, function() {
			$(this).fadeOut();
		});
		event.stopPropagation();
	});

	// create ability to add todos
	$('input[type="text"]').keypress(function(event) {
		if(event.which === 13) {
			var newTodo = $(this).val();
			$(this).val('');
			$('ul').append('<li><span>X</span> ' + newTodo + '</li>');
		}
	});
});