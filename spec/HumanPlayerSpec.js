describe("Human Player", function() {
	beforeEach(function() {
		match = new Match
		human_player = new HumanPlayer(this)
  	});

	it("should know if it's a human", function(){
		expect(human_player.is_human).toBeTruthy()
	})
	it("should know if it's a computer", function(){
		expect(human_player.is_computer()).toBeFalsy()
	})
});