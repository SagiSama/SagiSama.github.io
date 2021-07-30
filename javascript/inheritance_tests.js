describe("filter", function () {
    it("Filter returns filtered string by banned string list",
        function () {
        	var string = new String("IT is not good!");
			var bannedList = ['is', 'not'];
            assert.equal("IT good!", string.filter(bannedList));
        });
});