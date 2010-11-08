function Player ( match ) {
	this.match = match;
	this.hand = new Hand;
	this.is_human = false;
}

Player.prototype.is_computer = function(){
	return this.is_human ? false : true
}

Player.prototype.lead_out = function(domino){
	this.remove_from_hand(domino)
	this.board.lead_out(domino)
	this.advance_turn()
}      

Player.prototype.play_domino_on_board_by_suit = function(domino_in_hand, domino_on_board, suit){
    this.remove_from_hand(domino_in_hand)
    this.board.play_domino_on_board_by_suit(domino_in_hand, domino_on_board, suit)
    this.advance_turn	
}

Player.prototype.draw_from_boneyard = function(){
	this.hand.push(this.boneyard.draw_one())
}

Player.prototype.knock = function(){
	this.advance_turn();
}

Player.prototype.board = function(){
	return this.match.current_game().board
}

Player.prototype.boneyard = function(){
	return this.match.current_game().boneyard
}
   
Player.prototype.remove_from_hand = function(domino){
	this.hand.remove_domino_with_suits(domino.suit_of_end1, domino.suit_of_end2)
} 

Player.prototype.advance_turn = function(domino){
	this.match.current_game().queue.shift_queue()
} 

