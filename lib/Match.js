function Match ( number_of_players, number_of_houses ) {
	this.number_of_players = number_of_players || 4;
	this.number_of_houses = number_of_houses || 5;
	this.scorecard = new Scorecard(this)
	this.current_game = new Game(this)
	this.dom = null
	this.announcer = new Announcer
	this.players = new PlayerGroup	
	this.players.push(new HumanPlayer(this))
	for(i = 1; i < this.number_of_players; i++){
		this.players.push(new ComputerPlayer(this))		
	}
}

Match.prototype.start_match = function(){
	this.current_game.start_game()
	return this.announcer.welcome()
}

