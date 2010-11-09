
DominoGroup.prototype = new Array();
DominoGroup.prototype.constructor = DominoGroup;

function DominoGroup(){
}

DominoGroup.prototype.has_domino_with_suits = function(suit1, suit2){
	result = this.has_any(
		function(domino){return domino.has_both_suits(suit1, suit2)}
	)
	return result
}

DominoGroup.prototype.find_all_dominoes_of_suit = function(suit){
	result = new DominoGroup
	dominoes = this.find_all(
		function(domino){return domino.has_suit(suit)}
	)
	for(var i=0; i < dominoes.length; i++){
		result.push(dominoes[i])
	}
	return result
}

DominoGroup.prototype.find_all_doubles = function(){
	result = new DominoGroup
	dominoes = this.find_all(
		function(domino){return domino.is_double()}
	)
	for(var i=0; i < dominoes.length; i++){
		result.push(dominoes[i])
	}
	return result
}

DominoGroup.prototype.find_domino_with_suits = function(suit1, suit2){
	result = this.find(
		function(domino){ return domino.has_both_suits(suit1, suit2)}
	)
	return result
}

DominoGroup.prototype.find_highest_double = function(){
	if (doubles = this.find_all_doubles()){
		suits_of_doubles = doubles.map(
			function(domino){return domino.suit_of_end1()}
		)
		highest_suit = suits_of_doubles.max()
		result = doubles.find(
			function(domino){return domino.has_suit(highest_suit)}
		)
		return result
	}
}

DominoGroup.prototype.remove_domino_with_suits = function(suit1, suit2){
	domino_to_remove = this.find(
		function(domino){ return domino.has_both_suits(suit1, suit2) }
	)
	index = this.indexOf(domino_to_remove)
	this.splice(index, index)
}