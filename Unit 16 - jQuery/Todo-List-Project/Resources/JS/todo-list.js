document.addEventListener("DOMContentLoaded", function(){
	// toggle class (grey + strike-through) when clicked
	$('li').on('click', function() {
		$(this).toggleClass('completed');
	});

	// create delete functionality
	$('span').on('click', function(event) {
		$(event.target).parent().remove();
		event.stopPropagation();
	});
});