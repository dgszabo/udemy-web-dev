document.addEventListener("DOMContentLoaded", function(){
	$('li').on('click', function() {
		$(this).toggleClass('completed');
	});
});