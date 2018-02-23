document.addEventListener('DOMContentLoaded', function(){
	var colors = []
	var easyOrHard = 6;
	colorsArrayCreator(easyOrHard);
	
	var squares = document.querySelectorAll('.square');
	var pickedColor = colors[pickColor()];
	var chosenColor = document.querySelector('#chosenColor');
	var message = document.querySelector('#message');
	var h1 = document.querySelector('h1');
	var newGameButton = document.querySelector('#newGameButton');
	var easyBtn = document.querySelector('#easyButton');
	var hardBtn = document.querySelector('#hardButton');
	var container = document.querySelector('#container');

	chosenColor.textContent = pickedColor.toUpperCase();

	init();

	function init() {
		for(var i = 0; i < squares.length; i++) {
			squares[i].style.backgroundColor = colors[i];

			squares[i].addEventListener('click', function() {
				var thisColor = this.style.backgroundColor;
				if(thisColor === pickedColor) {
					message.textContent = 'Correct!';
					changeColor(pickedColor);
					h1.style.backgroundColor = pickedColor;
					newGameButton.textContent = 'PLAY AGAIN?';

				} else {
					this.style.backgroundColor = '#232323';
					message.textContent = 'Try Again!'
				}
			});
		}
		
		newGameButton.addEventListener('click', function() {
			layDownTiles();
		});

		easyBtn.addEventListener('click', function() {
			if(easyOrHard !== 3) {
				this.classList.add('selected');
				hardBtn.classList.remove('selected');
				
				easyOrHard = 3;
				
				for(var i = 3; i < squares.length; i++) {
					squares[i].style.display = 'none';
				}

				layDownTiles();
			}
		});

		hardBtn.addEventListener('click', function() {
			if(easyOrHard === 3) {
				this.classList.add('selected');
				easyBtn.classList.remove('selected');
				
				easyOrHard = 6;
				
				for(var i = 3; i < squares.length; i++) {
					squares[i].style.display = 'initial';
				}

				layDownTiles();
			}
		});
	}

	function changeColor(color) {
		for(var i = 0; i < squares.length; i++) {
			squares[i].style.backgroundColor = color;
		}
	}

	function colorRandomizer() {
		var r = Math.floor(Math.random() * 256);
		var g = Math.floor(Math.random() * 256);
		var b = Math.floor(Math.random() * 256);
		return 'rgb(' + r + ', ' + g + ', ' + b + ')';
	}

	function colorsArrayCreator(num) {
		colors = [];
		for(var i = 0; i < num; i++) {
			colors.push(colorRandomizer());
		}
	}

	function pickColor() {
		return Math.floor(Math.random() * colors.length);
	}

	function renderSquares(num) {
		for(var i = 0; i < num; i++) {
			squares[i].style.backgroundColor = colors[i];
		}
	}

	function layDownTiles() {
		colorsArrayCreator(easyOrHard);
		pickedColor = colors[pickColor()];
		chosenColor.textContent = pickedColor;
		newGameButton.textContent = 'NEW COLORS';
		renderSquares(easyOrHard);
		h1.style.backgroundColor = 'steelblue';
		message.textContent = '';
	}
});