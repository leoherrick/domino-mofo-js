
Double.prototype = new Domino();
Double.prototype.constructor = Double;

function Double(suit){
	this.ends = [
		new End(suit, this),
		new End(suit, this)
	]
};

Double.prototype.score = function () {
	connected_ends = this.ends.
		find_all( function(end){ 
			return end.connected_end ? true : false 
		} );
	num_of_connected_ends = connected_ends.length;
	
	if (num_of_connected_ends <= 1) {
		return this.suit_of_end1() * 2; 
	}
	else {
		return 0;
	}
}