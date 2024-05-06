const symbolInput = document.getElementById('symbol');
const heightInput = document.getElementById('heightRange');
const output = document.getElementById('height');
const parent = document.getElementById('pyramid');

let symbol = symbolInput.value;
let height = +heightInput.value;

drawPyramid(symbol, height);

heightInput.addEventListener('input', (event) => {
	output.textContent = event.target.value;
	height = +event.target.value;
  	drawPyramid(symbol, height);
});

symbolInput.addEventListener('change', (event) => {
	symbol = event.target.value;
	drawPyramid(symbol, height);
});

function drawPyramid(symbol, height) {
  	while (parent.firstChild) {
		parent.removeChild(parent.firstChild);
  	}
	
  	if (height > 1) {
		for (let i = 1; i <= height; i++) {
			const p = document.createElement('p');
			p.innerHTML = symbol.repeat(i);
			parent.appendChild(p);
		}
  	}
	else {
		const p = document.createElement('p');
		p.textContent = symbol;
		parent.appendChild(p);
	}
}
