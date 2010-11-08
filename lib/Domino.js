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



//        
//    def open?
//      @ends.any?{|e| e.open?}
//    end
//
//    def connected?
//      @ends.any?{|e| e.connected?}
//    end
//
//    def find_end_of_suit suit
//     @ends.find {|e| e.suit?(suit)}
//    end
//
//    def find_all_open_ends
//      @ends.find_all{|e| e.open?}
//    end
//    
//    def score
//      if open?
//        find_all_open_ends.collect{|e| e.suit}.inject{|sum, x| sum + x}
//      else
//        0
//      end
//    end
//    
//    def connect_to_another_domino_by_suit(other_domino, suit)
//      end1 = find_open_end_of_suit(suit)
//      end2 = other_domino.find_open_end_of_suit(suit)
//      end1.connect_to(end2)
//    end    
//    
//    def find_open_end_of_suit suit
//      @ends.find {|e| e.suit?(suit) && e.open?}
//    end
//    
//    def suit_of_end1
//      @ends[0].suit
//    end
//
//    def suit_of_end2
//      @ends[1].suit
//    end
//    
//    
//  end
//end