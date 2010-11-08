describe("Double", function() {
	beforeEach(function() {
    	four_four = new Double(4);
  	});
	
	describe("#score", function(){
		it("should score all pips if either 0 or 1 ends are connected", function(){
			expect(four_four.score()).toEqual(8)
			four_four.ends[0].connect_to = new End(4, "double")
			expect(four_four.score()).toEqual(8)
		})
		it("should score no pips if both ends are connected", function(){
			four_four.ends[0].connect_to(new End(4, "double"))
			four_four.ends[1].connect_to(new End(4, "double"))
			expect(four_four.score()).toEqual(0)
		})
	})
})