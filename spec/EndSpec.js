describe("End", function() {
	beforeEach(function() {
    	_end_with_six = new End(6, "double");
    	_another_end_with_six = new End(6, "double");
  	});

	it("should belong to a domino", function() {
		expect(_end_with_six.domino).toBeTruthy
  	});

	it("should_return_suit", function() {
		expect(_end_with_six.suit).toEqual(6)
  	});

	describe("#has_suit", function() {

    	it("should return true if suit matches given suit", function() {
      		expect(_end_with_six.has_suit(6)).toBeTruthy();
    	});

    	it("should return false if suit doesn't match given suit", function() {
      		expect(_end_with_six.has_suit(5)).toBeFalsy();
    	});
  	});

  	describe("#is_connected", function() {

    	it("should return true if it's connected to another side", function() {
			_end_with_six.connect_to(_another_end_with_six)
      		expect(_end_with_six.is_connected()).toBeTruthy();
    	});

    	it("should return false if it's not connected", function() {
      		expect(_end_with_six.is_connected()).toBeFalsy();
    	});
  	});

  	describe("#is_open", function() {

    	it("should return true if it's not connected", function() {
      		expect(_end_with_six.is_open()).toBeTruthy();
    	});

    	it("should return false if it's connected to another side", function() {
			_end_with_six.connect_to(_another_end_with_six)
      		expect(_end_with_six.is_open()).toBeFalsy();
    	});
  	});
})