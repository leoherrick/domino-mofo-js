describe("Player", function() {
	beforeEach(function() {
		match = new Match
		player = new Player(match)
  	});

	it("should know if it's a human", function(){
		expect(player.is_human).toBeFalsy()
	})
	it("should know if it's a computer", function(){
		expect(player.is_computer).toBeTruthy()
	})
	
	it("should have a hand (of dominoes)", function(){
		expect(player.hand).toBeTruthy();
	})
	
	it("should belong to a match", function(){
		expect(player.match).toEqual(match);
	})

	it("should belong to a match", function(){
		expect(player.match).toEqual(match);
	})
	
	describe("#lead_out", function(){
		it("should add domino to board", function(){
			//TODO
		})
		it("should remove domino from hand", function(){
			//TODO
		})
		it("should send player to back of queue", function(){
			//TODO
		})
	})
	
})


//  
//  describe Player do 
//    before(:each) do
//      @match = Match.new
//      @cpu3 = @match.players[2]
//      @match.current_game.queue.shift_to_player!(@cpu3)
//      @board = @match.current_game.board
//    end
//
//    
//    
//    describe "#game play" do
//      
//      describe "#leading out" do
//        before(:each) do
//          @five_five = Double.new(5)
//          @hand = @cpu3.hand.clear
//          @hand << @five_five
//        end
//        
//        it "should increase number of dominoes on the board by one" do
//          expect {
//            @cpu3.lead_out(@five_five)
//          }.to change {
//            @board.length
//          }.by(1)
//        end
//        
//        it "should reduce the number of dominoes in a player's hand by one" do
//          expect {
//            @cpu3.lead_out(@five_five)
//          }.to change {
//            @hand.length
//          }.by(-1)
//        end
//        
//        it "should send them to the back of the queue" do
//          expect {
//            @cpu3.knock
//          }.to change {
//            @match.current_game.queue.index(@cpu3)
//          }.from(0).to(3)
//        end
//      end
//      
//      describe "#playing dominoes" do
//        before(:each) do
//          @five_five = Double.new(5)
//          @hand = @cpu3.hand.clear
//          @hand << @five_five
//          @board << Domino.new(5,4)
//        end
//        
//        it "should increase number of dominoes on the board by one" do
//          expect {
//            @cpu3.play_domino_on_board_by_suit(@five_five, @board.find_domino_with_suits(5,4), 5)
//          }.to change {
//            @board.length
//          }.by(1)
//        end
//        
//        it "should reduce the number of dominoes in a player's hand by one" do
//          expect {
//            @cpu3.play_domino_on_board_by_suit(@five_five, @match.current_game.board.find_domino_with_suits(5,4), 5)
//          }.to change {
//            @hand.length
//          }.by(-1)
//        end
//        
//        it "should send them to the back of the queue" do
//          expect {
//            @cpu3.knock
//          }.to change {
//            @match.current_game.queue.index(@cpu3)
//          }.from(0).to(3)
//        end
//      end
//      
//      describe "#drawing from the boneyard" do
//        before(:each) do
//          @boneyard = @match.current_game.boneyard
//          @boneyard << double("domino")          
//        end
//        
//        it "should reduce the number of dominoes in the boneyard by one" do
//          expect {
//            @cpu3.draw_from_boneyard
//          }.to change {
//            @boneyard.length
//          }.by(-1)
//        end
//        
//        it "should increase the number of dominoes in a player's hand by one" do
//          expect {
//            @cpu3.draw_from_boneyard
//          }.to change {
//            @cpu3.hand.length
//          }.by(1)
//        end
//        
//        it "should not chnage their position in the queue" do
//          expect {
//            @cpu3.draw_from_boneyard
//          }.to change {
//            @match.current_game.queue.index(@cpu3)
//          }.by(0)
//        end
//
//      end
//      
//      describe "#knocking" do
//        
//        it "should send them to the back of the queue" do
//          expect {
//            @cpu3.knock
//          }.to change {
//            @match.current_game.queue.index(@cpu3)
//          }.from(0).to(3)
//        end
//      end
//    end
//  end
//end
//