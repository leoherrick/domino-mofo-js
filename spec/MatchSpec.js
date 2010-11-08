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
    
})

//    
//    it "should create a group of players for a match" do
//      @match.players.should be_kind_of(PlayerGroup)
//    end
//    
//    it "should add one human player to the match" do
//      @match.players.find_all{|p| p.human_player?}.should have(1).human_player
//    end
//    
//    describe "should add computer players to match" do 
//      
//      context "by default" do
//        it "should have 3 computer players" do
//          @match.players.find_all{|p| p.computer_player?}.should have(3).computer_players
//        end
//      end
//      
//      context "when in a 3 player match" do
//        it "should have 2 computer players" do
//          @match = Match.new(players = 3, houses = 3)
//          @match.players.find_all{|p| p.computer_player?}.should have(2).computer_players
//        end
//      end
//    end
//    
//    it "should have a scorecard" do
//      @match.scorecard.should be_true
//    end
//  
//    it "should have an active game" do
//      @match.current_game.should be_true
//    end
//  end
//end