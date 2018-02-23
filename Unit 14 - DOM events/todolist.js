document.addEventListener('DOMContentLoaded', function() {
	var lis = document.querySelectorAll('li');

	for(var i = 0; i < lis.length; i++) {
		lis[i].addEventListener('mouseover', function(event){
			event.target.classList.add('green');
		});
	}
	for(var i = 0; i < lis.length; i++) {
		lis[i].addEventListener('mouseout', function(){
			this.classList.remove('green');
		});
	}
	for(var i = 0; i < lis.length; i++) {
		lis[i].addEventListener('click', function(){
			this.classList.toggle('done');
		});
	}
});