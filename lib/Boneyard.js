
Boneyard.prototype = new DominoGroup();
Boneyard.prototype.constructor = Boneyard;

function Boneyard(){
	ary = [ 
		new Double(0), new Domino(0,1), new Domino(0,2), new Domino(0,3), new Domino(0,4), new Domino(0,5), new Domino(0,6),
		new Double(1), new Domino(1,2), new Domino(1,3), new Domino(1,4), new Domino(1,5), new Domino(1,6),
		new Double(2), new Domino(2,3), new Domino(2,4), new Domino(2,5), new Domino(2,6),
		new Double(3), new Domino(3,4), new Domino(3,5), new Domino(3,6),
		new Double(4), new Domino(4,5), new Domino(4,6),
		new Double(5), new Domino(5,6),
		new Double(6)
	]
	for(var i = 0; i < ary.length; i++) { this.push(ary[i]) }
	this.wash();	
};

Boneyard.prototype.draw_one = function(){
	return this.pop();
}

Boneyard.prototype.draw_seven = function(){
	result = new DominoGroup
	for(i=0; i<7; i++){
		result.push(this.pop())
	}
	return result
}

Boneyard.prototype.wash = function(){
	this.shuffle()
}