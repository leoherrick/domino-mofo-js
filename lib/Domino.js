function Domino(suit1, suit2){
	this.ends = [
		new End(suit1, this),
		new End(suit2, this)
	]
};

Domino.prototype.has_suit = function ( suit ) {
	for(var i = 0; i < this.ends.length; i++) {
		if(this.ends[i].suit == suit){
			return true;
		}	
	}
	return false;
}

Domino.prototype.suit_of_end1 = function(){
	return this.ends[0].suit;
}

Domino.prototype.suit_of_end2 = function(){
	return this.ends[1].suit;
}

Domino.prototype.has_both_suits = function(suit1, suit2){
	if (	(this.ends[0].has_suit(suit1) && this.ends[1].has_suit(suit2)) ||
			(this.ends[1].has_suit(suit1) && this.ends[0].has_suit(suit2))	){
		return true
	}
	else {
		return false
	}
}

Domino.prototype.is_double = function(){
	return this.suit_of_end1() == this.suit_of_end2()
}

Domino.prototype.connect_to_another_domino_by_suit = function(other_domino, suit){
	end1 = this.find_open_end_of_suit(suit)
	end2 = other_domino.find_open_end_of_suit(suit)
	end1.connect_to(end2)
}

Domino.prototype.find_open_end_of_suit = function(suit){
	return this.ends.find(
		function(e){return (e.has_suit(suit) && e.is_open())}
	)
}

Domino.prototype.is_open = function(){
	return this.ends.has_any(
		function(e){return e.is_open()}
	)
}

Domino.prototype.is_connected = function(){
	return this.ends.has_any(
		function(e){return e.is_connected()}
	)
}

Domino.prototype.score = function(){
	if (this.is_open){
		suits_of_open_ends = this.find_all_open_ends().map(
			function(e){return e.suit}
		)
		return suits_of_open_ends.sum_recursive()
	}
	else {
		return 0
	}
}

Domino.prototype.find_all_open_ends = function(){
	return this.ends.find_all( 
		function(e){ return e.is_open() } 
	)
}

Domino.prototype.find_end_of_suit = function(suit){
	return this.ends.find(
		function(e){return e.has_suit(suit)}
	)
}

//
//    def find_end_of_suit suit
//     @ends.find {|e| e.suit?(suit)}
//    end
//


//    
//    
//  end
//end