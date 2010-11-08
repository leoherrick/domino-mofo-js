describe("DominoGroup", function() {
	beforeEach(function() {
    	standard_set = create_standard_set();
  	});
	
	describe("#has_domino_with_suits", function(){
		it("should return true if group has dominoes with the fiven suits", function(){
			expect(standard_set.has_domino_with_suits(6,6)).toBeTruthy();
			expect(standard_set.has_domino_with_suits(1,6)).toBeTruthy();			
		})
		it("should return false if given two suits not found together in group", function(){
			expect(standard_set.has_domino_with_suits(6,7)).toBeFalsy();
		})		
	});
	
	describe("#find_all_dominoes_of_suit", function(){
		it("should return a DominoGroup with just those dominoes matching the given suit", function(){
			all_sixes = standard_set.find_all_dominoes_of_suit(6)
			expect(all_sixes.length).toEqual(7)
		})
	})
	
	describe("#find_all_doubles", function(){
		it("should return another DominoGroup with just the Doubles", function(){
			all_doubles = standard_set.find_all_doubles()
			expect(all_doubles.length).toEqual(7)
		})
	})

	describe("#find_domino_with_suits", function(){
		it("should return a single Domino from the group matching the given suits", function(){
			boxcars = standard_set.find_domino_with_suits(6,6)
			expect(boxcars.has_both_suits(6,6)).toBeTruthy()
		})
	})
	
	describe("#find_highest_double", function(){
		it("should return the highest suit in a hand with one or more", function(){
			expect(standard_set.find_highest_double().has_both_suits(6,6)).toBeTruthy()
		})
	})
	
	describe("#remove_domino_with_suits", function(){
		it("should remove domino with given ends from the group", function(){
			standard_set.remove_domino_with_suits(6,6)
			expect(standard_set.find_domino_with_suits(6,6)).toBeFalsy()
		})
	})
});

function create_standard_set(){
	standard_set = new DominoGroup
	ary = [ 
		new Double(0), new Domino(0,1), new Domino(0,2), new Domino(0,3), new Domino(0,4), new Domino(0,5), new Domino(0,6),
		new Double(1), new Domino(1,2), new Domino(1,3), new Domino(1,4), new Domino(1,5), new Domino(1,6),
		new Double(2), new Domino(2,3), new Domino(2,4), new Domino(2,5), new Domino(2,6),
		new Double(3), new Domino(3,4), new Domino(3,5), new Domino(3,6),
		new Double(4), new Domino(4,5), new Domino(4,6),
		new Double(5), new Domino(5,6),
		new Double(6)
	]
	for(var i = 0; i < ary.length; i++) { standard_set.push(ary[i]) }
	return standard_set
}