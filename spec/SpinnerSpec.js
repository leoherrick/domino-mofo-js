describe("Spinner", function() {
	beforeEach(function() {
    	four_four = new Spinner(4);
  	});
      
    it("should have four ends", function(){
		expect(four_four.ends.length).toEqual(4)
	})
	
	describe("#score", function(){
		it("should score all pips if 0 or 1 ends are connected", function(){
			expect(four_four.score()).toEqual(8)
			four_four.ends[0].connect_to = new End(4, "double")
			expect(four_four.score()).toEqual(8)
		})
		it("should score no pips if 2 - 4 sides are connected", function(){
			four_four.ends[0].connect_to(new End(4, "double"))
			four_four.ends[1].connect_to(new End(4, "double"))
			expect(four_four.score()).toEqual(0)
			four_four.ends[2].connect_to(new End(4, "double"))
			expect(four_four.score()).toEqual(0)
			four_four.ends[3].connect_to(new End(4, "double"))
			expect(four_four.score()).toEqual(0)
		})
	})
});