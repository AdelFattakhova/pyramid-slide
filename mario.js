const symbol = document.getElementById("symbol").value;
const height = document.getElementById("heightRange").value;

drawPyramid(symbol, height);

document.getElementById("heightRange").addEventListener("input", function() {
  const output = document.getElementById("height");
  output.value = this.value;
  height = this.value;
});

document.getElementById("symbol").addEventListener("change", function() {
  symbol = this.value;
  drawPyramid(symbol, height);
});

document.getElementById("heightRange").addEventListener("input", function() {
  drawPyramid(symbol, height);
});

function drawPyramid(symbol, height) {
	const parent = document.getElementById('pyramid');
  	while (parent.firstChild) {
    		parent.removeChild(parent.firstChild);
  	}
	
  	if (height > 1) {
    		for (let i = 1; i <= height + 1; i++) {
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
