document.addEventListener('DOMContentLoaded', function() {
	var playerOneScore = document.querySelector('#playerOneScore');
	var playerTwoScore = document.querySelector('#playerTwoScore');
	var playLimit = document.querySelector('#playLimit');
	var limitInput = document.querySelector('input');
	var playerOneButton = document.querySelector('#playerOneButton');
	var playerTwoButton = document.querySelector('#playerTwoButton');
	var reset = document.querySelector('#reset');
	var p1Score = 0;
	var p2Score = 0;
	var limit = 5;
	var gameOver = false;

	playerOneButton.addEventListener('click', function() {
		if(!gameOver) {
			p1Score++;
			if(p1Score === limit) {
				gameOver = true;
				playerOneScore.classList.add('winner');
			}
			playerOneScore.textContent = p1Score;
		}
	});
	
	playerTwoButton.addEventListener('click', function() {
		if(!gameOver) {
			p2Score++;
			if(p2Score === limit) {
				gameOver = true;
				playerTwoScore.classList.add('winner');
			}
			playerTwoScore.textContent = p2Score;
		}
	});

	reset.addEventListener('click', resetAll);

	limitInput.addEventListener('change', function() {
		limit = parseInt(this.value);
		playLimit.textContent = limit;

		resetAll();
	});

	function resetAll() {
		p1Score = 0;
		playerOneScore.textContent = p1Score;
		playerOneScore.classList.remove('winner');
		
		p2Score = 0;
		playerTwoScore.textContent = p2Score;
		playerTwoScore.classList.remove('winner');
		
		gameOver = false;
	}

});