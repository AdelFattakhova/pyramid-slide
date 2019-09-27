var symbol = document.getElementById("symbol").value;
var height = document.getElementById("heightRange").value;

drawPyramid(symbol, height);

document.getElementById("heightRange").addEventListener("input", function() {
  var output = document.getElementById("height");
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
	var parent = document.getElementById('pyramid');
  	while (parent.firstChild) {
    	parent.removeChild(parent.firstChild);
  	}
	
  	if (height>1) {
    	for (var i=2; i<=height+1; i++) {
      		var result = '&nbsp;'.repeat(height-i+1) + symbol.repeat(i);
      		var p = document.createElement('p');
      		p.innerHTML = result;
      		parent.appendChild(p);
    	}
  	}
    else {
    	var p = document.createElement('p');
    	p.textContent = symbol;
    	parent.appendChild(p);
    }
}