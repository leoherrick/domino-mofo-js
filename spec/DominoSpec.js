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
	
	describe("#connect_to_another_domino_by_suit", function(){
		it("should connect correct end of self", function(){
			two_end_of_12 = one_two.ends[1]
			one_two.connect_to_another_domino_by_suit(two_three, 2)
			expect(two_end_of_12.is_connected()).toBeTruthy()
		})
		it("should connect correct end other domino", function(){
			two_end_of_23 = two_three.ends[0]
			one_two.connect_to_another_domino_by_suit(two_three, 2)
			expect(two_end_of_23.is_connected()).toBeTruthy()
		})
	})


	describe("#score", function(){
		it("should return all pips of a domino with two open ends", function(){
			expect(one_two.score()).toEqual(3)
		})
		it("should return pips only from open side (if other side is connected)", function(){
			one_two.connect_to_another_domino_by_suit(two_three, 2)
			expect(one_two.score()).toEqual(1)
		})
		it("should return 0 if both sides are connected", function(){
			one_two.connect_to_another_domino_by_suit(two_three, 2)
			one_two.connect_to_another_domino_by_suit(new Double(1), 1)
			expect(one_two.score()).toEqual(0)
		})
	})
	
	describe("#find_end_of_suit", function(){
		it("should return the End object with given suit belonging to given domino", function(){
			expect(one_two.find_end_of_suit(2).has_suit(2)).toBeTruthy()
		})
		it("should return nil if no ends of domino match given suit", function(){
			expect(one_two.find_end_of_suit(5)).toBeFalsy()
		})
	})
	
	describe("#is_open", function(){
		it("should return true if 1+ ends are not connected", function(){
			expect(one_two.is_open()).toBeTruthy()
			one_two.connect_to_another_domino_by_suit(two_three, 2)
			expect(one_two.is_open()).toBeTruthy()			
		})
		it("should return false if both ends are connected", function(){
			one_two.connect_to_another_domino_by_suit(two_three, 2)
			one_two.connect_to_another_domino_by_suit(new Double(1), 1)
			expect(one_two.is_open()).toBeFalsy()			
		})
	})
	
	describe("#is_connected", function(){
		it("should return true if 1+ ends are connected", function(){
			one_two.connect_to_another_domino_by_suit(two_three, 2)
			expect(one_two.is_connected()).toBeTruthy()			
			one_two.connect_to_another_domino_by_suit(new Double(1), 1)
			expect(one_two.is_connected()).toBeTruthy()			
		})
		it("should return false if no ends are connected", function(){
			expect(one_two.is_connected()).toBeFalsy()			
		})
	})
	
	describe("#find_all_open_ends", function(){
		it("should return 2 ends if given domino has 2 open ends", function(){
			expect(one_two.find_all_open_ends().length).toEqual(2)
		})
		it("should return 1 end if given domino has 1 open end", function(){
			one_two.connect_to_another_domino_by_suit(two_three, 2)
			expect(one_two.find_all_open_ends().length).toEqual(1)
		})
		it("should return [] if given domino has no open ends", function(){
			one_two.connect_to_another_domino_by_suit(two_three, 2)
			one_two.connect_to_another_domino_by_suit(new Double(1), 1)
			expect(one_two.find_all_open_ends().length).toEqual(0)
		})
	})		
})

