
Board.prototype = new DominoGroup();
Board.prototype.constructor = Board;

function Board(){
	this.spinner = null
};

Board.prototype.lead_out = function(domino){
	domino = this.promote_to_spinner_if_need_be(domino)
	this.add_to_board(domino)
}

Board.prototype.promote_to_spinner_if_need_be = function(domino){
	if ( (this.spinner == null) && (domino.is_double()) ) {
		return this.spinner = new Spinner(domino.suit_of_end1())
	}
	else{
		return domino
	}
}

Board.prototype.add_to_board = function(domino){
	this.push(domino)
}

Board.prototype.play_domino_on_board_by_suit = function(new_dom, dom_on_board, suit){
	new_dom = this.promote_to_spinner_if_need_be(new_dom)
	this.add_to_board(new_dom)
	new_dom.connect_to_another_domino_by_suit(dom_on_board, suit)
}

Board.prototype.dominoes_in_play = function(){
	domino_group = new DominoGroup
	open_dominoes = this.find_all(
		function(domino){ return domino.is_open }
	)
	for(i=0; i < open_dominoes.length; i++){
		domino_group.push(open_dominoes[i])
	}
	return domino_group
}

Board.prototype.suits_in_play = function(){
	if(this.is_empty){
		return [0,1,2,3,4,5,6]
	}
	else{
		result = this.ends_in_play.map( function(e){return e.suit} )
		return result.unique()
	}
}

Board.prototype.total_score = function(domino){
	scores_of_dominoes_in_play = this.dominoes_in_play().map(
		function(domino){return domino.score()}
	)
	return scores_of_dominoes_in_play.sum_recursive()
}




//     def playable_domino_of_suit suit
//       ends_in_play.find{|e| e.suit == suit}.domino
//     end    
//    
//     private    
//     
//     def ends_in_play
//       result = Array.new
//       dominoes_in_play.each do |dom|
//         dom.find_all_open_ends.each do |e|
//           result << e
//         end
//       end
//       result
//     end
//     
//     def promote_to_spinner_if_need_be domino
//       if @spinner == nil && domino.double?
//         @spinner = Spinner.new(domino.suit_of_end1)
//       else
//         domino
//       end     
//     end
//       
//     def add_to_board domino
//       domino = promote_to_spinner_if_need_be(domino)
//       self << domino
//     end
//     
//   end
// end