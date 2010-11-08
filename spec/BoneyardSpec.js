describe("Boneyard", function() {
	beforeEach(function() {
    	boneyard = new Boneyard
  	});
    
    it("should have 28 dominoes", function(){
		expect(boneyard.length).toEqual(28)
	})
	
	it("should have 7 of each suit", function(){
		suits = [0,1,2,3,4,5,6]
		for(i=0; i < suits.length; i++){
			expect(boneyard.find_all_dominoes_of_suit(suits[i]).length).toEqual(7)
		}
	})
	
	describe("#draw_one", function(){
		it("should return one domino", function(){
			expect(boneyard.draw_one()).toBeTruthy()
		})
		it("hould change the size of the boneyard by 1", function(){
			boneyard.draw_one()
			expect(boneyard.length).toEqual(27)
		})		
	})
	describe("#draw_seven", function(){
		it("should return seven dominoes", function(){
			expect(boneyard.draw_seven().length).toEqual(7)
		})
		it("hould change the size of the boneyard by -7", function(){
			boneyard.draw_seven()
			expect(boneyard.length).toEqual(21)
		})		
	})	
})
