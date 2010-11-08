describe("Match", function() {
	beforeEach(function() {
    	match = new Match
  	});
    
    it("should have 5 houses by default", function(){
		expect(match.number_of_houses).toEqual(5)
	})
	
	it("should have 4 houses when passed 4 as optional argument upon intialization", function(){
		match = new Match(4,4)
		expect(match.number_of_houses).toEqual(4)
	})
	
	it("should have 4 players by default", function(){
		expect(match.number_of_players).toEqual(4)
	})
	
	it("should have 3 players when passed 3 as optional argument upon intialization", function(){
		match = new Match(3)
		expect(match.number_of_players).toEqual(3)
	})
	
	it("should have created one human plauer", function(){
		expect(match.players.find(
			function(player){return player.is_human}
		).length).toEqual(1)
	})
	
	it("should have created 3 computer players by default", function(){
		expect(match.players.find(
			function(player){return player.is_computer()}
		).length).toEqual(3)
	})
	
	it("should have a scorecard", function(){
		expect(match.scorecard).toBeTruthy();
	})
	
	it("should have an current game", function(){
		expect(match.current_game).toBeTruthy();
	})    

	describe("#start_match", function(){
		it("should return welcome message", function(){
			expect(match.start_match()).toEqual(
				"Hope you ready to throw some bones playa! Let's do this!"
			);			
		})
	})    
})
