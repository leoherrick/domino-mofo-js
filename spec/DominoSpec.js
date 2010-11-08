describe("Domino", function() {
	beforeEach(function() {
    	one_two = new Domino(1,2);
    	two_three = new Domino(2,3);
  	});
	
	it("should have two ends", function(){
		expect(one_two.ends.length).toEqual(2)
	})

	it("should return the suit of end #1", function(){
		expect(one_two.suit_of_end1()).toEqual(1)
	})

	it("should return the suit of end #2", function(){
		expect(one_two.suit_of_end2()).toEqual(2)
	})
	
	describe("#has_suit?", function(){
		it("should return true if one of domino's ends matches given suit", function(){
			expect(one_two.has_suit(2)).toBeTruthy()
		})
		it("should return false if none of domino's ends matches given suit", function(){
			expect(one_two.has_suit(3)).toBeFalsy()
		})
	})
	
	describe("#has_both_suits", function(){
		it("should return true if has an end with suit matching both suits given", function(){
			expect(one_two.has_both_suits(1,2)).toBeTruthy();
			expect(one_two.has_both_suits(2,1)).toBeTruthy();
		})
		it("should return false if only one or fewer ends match", function(){
			expect(one_two.has_both_suits(2,2)).toBeFalsy();
			expect(one_two.has_both_suits(5,3)).toBeFalsy();
			expect(two_three.has_both_suits(2,4)).toBeFalsy();
			expect(two_three.has_both_suits(5,4)).toBeFalsy();
		})
	})
	
	describe("#is_double?", function(){
		it("should return true if given domino has two of the same suits", function(){
			two_two = new Double(2)
			expect(two_two.is_double()).toBeTruthy()
		})
	})
})

//    
//    describe "#open?" do
//      it "should return true if 1+ ends are not connected" do
//        one_two.should be_open
//        one_two.connect_to_another_domino_by_suit(two_three, 2)
//        one_two.should be_open
//      end
//      it "should reutrn false if both ends are connected" do
//        one_two.connect_to_another_domino_by_suit(two_three, 2)
//        one_two.connect_to_another_domino_by_suit(Double.new(1), 1)
//        one_two.should_not be_open
//      end
//    end
//    describe "#connected?" do
//      it "should return true if 1+ ends are connected" do
//        one_two.connect_to_another_domino_by_suit(two_three, 2)
//        one_two.should be_connected
//        one_two.connect_to_another_domino_by_suit(Double.new(1), 1)
//        one_two.should be_connected
//      end
//      it "should return false if no ends are connected" do
//        one_two
//        one_two.should_not be_connected
//      end
//    end    
//    
//    describe "#find_end_of_suit" do
//      it "should return the End object with given suit belonging to given domino" do
//        one_two.find_end_of_suit(2).should be_kind_of(End)
//        one_two.find_end_of_suit(2).should be_a_suit(2)
//      end
//      it "should return nil if no ends of domino match given suit" do
//        one_two.find_end_of_suit(5).should be_nil
//      end
//    end
//    
//    describe "#find_all_open_ends" do
//      it "should return two ends if given domino has two open ends" do
//        one_two.find_all_open_ends.should have(2).ends
//      end
//      it "should return one ends if given domino has one open ends" do
//        one_two.connect_to_another_domino_by_suit(two_three, 2)        
//        one_two.find_all_open_ends.should have(1).end
//      end
//      it "should return [] if given domino has no open ends" do
//        one_two.connect_to_another_domino_by_suit(two_three, 2)
//        one_two.connect_to_another_domino_by_suit(Double.new(1), 1)
//        one_two.find_all_open_ends.should have(0).ends
//        one_two.find_all_open_ends.should == []
//      end
//    end
//    
//    describe "#score" do
//      it "should return all pips of a domino with two open ends" do
//        one_two.score.should equal(3)
//      end
//      it "should return pips only from open side (if other side is connected)" do
//        one_two.connect_to_another_domino_by_suit(two_three, 2)     
//        one_two.score.should equal(1)
//      end
//      it "should return 0 if both sides are connected" do
//        one_two.connect_to_another_domino_by_suit(two_three, 2)
//        one_two.connect_to_another_domino_by_suit(Double.new(1), 1)
//        one_two.score.should equal(0)
//      end
//    end
//    
//    describe "#connect_to_another_domino_by_suit" do
//      it "should connect correct end of self" do
//        two_end_of_12 = one_two.ends[1]
//        expect{
//          one_two.connect_to_another_domino_by_suit(two_three, 2)          
//        }.to change{
//          two_end_of_12.connected?
//        }.from(false).to(true)
//      end
//      it "should connect correct end of other domino" do
//        two_end_of_23 = two_three.ends[0]
//        expect{
//          one_two.connect_to_another_domino_by_suit(two_three, 2)          
//        }.to change{
//          two_end_of_23.connected?
//        }.from(false).to(true)
//      end
//    end
//  end
//end
//