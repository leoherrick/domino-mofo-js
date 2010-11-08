
Spinner.prototype = new Double();
Spinner.prototype.constructor = Spinner;

function Spinner(suit){
	this.ends = [
		new End(suit, this),
		new End(suit, this), 
		new End(suit, this), 
		new End(suit, this)
	]
};