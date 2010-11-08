function End ( suit, domino ) {
	this.suit =  suit
	this.domino = domino
	this.connected_end = null
}

End.prototype.has_suit = function(suit){
	return this.suit == suit
}

End.prototype.is_connected = function(){
	return this.connected_end ? true : false
}

End.prototype.is_open = function(){
	return this.connected_end ? false : true	
}

End.prototype.connect_to = function(another_end){
	this.connected_end = another_end
	another_end.connected_end = this
}