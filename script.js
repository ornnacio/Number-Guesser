'use strict';

let numeroCerto = Math.floor(Math.random() * (20) + 1);
let highscore = 0;
let score = 20;
let finalizado = false;

document.querySelector('.check').addEventListener('click', function () {
	
	let guess = document.getElementById("guess").value;
	
	if(!finalizado){
		
		if(guess == numeroCerto){
			document.querySelector('.message').textContent = "GANHAMO!";
			document.querySelector('.number').textContent = numeroCerto;
			document.getElementById("main").style.backgroundImage = "url('https://c.tenor.com/Xh8ndEFOCJcAAAAM/dancing-grooving.gif')";
			
			if(score > highscore){
				highscore = score;
				document.querySelector('.highscore').textContent = score;
			}
			finalizado = true;
		}else{
			if(score > 1){
				if(guess < numeroCerto){
					document.querySelector('.message').textContent = "📉 muito baixo";
				}else if(guess > numeroCerto){
					document.querySelector('.message').textContent = "📈 muito alto";
				}else{
					document.querySelector('.message').textContent = "⛔ cadê o número?";
				}
				score -= 1;
				document.querySelector('.score').textContent = score;
			}else{
				document.querySelector('.message').textContent = "💥 Perdemo!";
				document.querySelector('.score').textContent = 0;
			}
		}
	}
});

document.querySelector('.again').addEventListener('click', function () {
	finalizado = false;
	numeroCerto = Math.floor(Math.random() * (20));
	score = 20;
	document.querySelector('.score').textContent = score;
	document.querySelector('.number').textContent = '?';
	document.querySelector('.message').textContent = '🔍 Adivinhe...';
	document.querySelector('.guess').textContent = '';
	document.getElementById("main").style.backgroundImage = null;
});