describe("filter", function () {
    it("Filter returns filtered string by banned string list",
        function () {
        	var string = new String("IT is not good!");
			var bannedList = ['is', 'not'];
            assert.equal("IT good!", string.filter(bannedList));
        });
});

describe("bubbleSort", function () {
    it("Filter returns filtered string by banned string list",
        function () {
	    	var arr = new Arr([1,2,3,4,0,-1,-9,3]);
			var bannedList = ['is', 'not'];
            assert.equal("1,2,3,4,0,-1,-9,3", arr.bubbleSort().toString());
        });
});
