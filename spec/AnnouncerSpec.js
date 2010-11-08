describe("Announcer", function() {
	beforeEach(function() {
    	announcer = new Announcer
  	});

    it("should welcome the player", function(){
      expect(announcer.welcome()).toEqual("Hope you ready to throw some bones playa! Let's do this!")
    });
    
    it("should ask for number of houses", function(){
      expect(announcer.ask_for_houses()).toEqual("And how many houses you down for? Three, Four, or Five?")
    });
    
    it("should ask for number of opponents", function(){
      expect(announcer.ask_for_opponents()).toEqual("How many playas you wanna to play dawg? One, two, or tre?")
    });
    
    it("should issue a 'game started' success message", function(){
      expect(announcer.say_game_is_ready()).toEqual("A'ight Playa. Let's do this thing.")
    });

    it("should ask player to play the double of a given number", function(){
      expect(announcer.please_play_double()).toEqual("You have the highest double. Please lead out with your highest double.")
    });

    it("should say that the cpu has moved", function(){
      expect(announcer.cpu_has_made_move()).toEqual("The computer just made a play.")
    });
    
    it("should say it's the human player's turn", function(){
      expect(announcer.tell_player_it_is_their_turn()).toEqual("It's your turn, please make a play.")
    });    
 });
