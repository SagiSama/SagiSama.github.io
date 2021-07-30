describe("filter", function () {
    it("Filter returns filtered string by banned string list",
        function () {
        	var string = new String("IT is not good!");
            assert.equal("IT good!", "IT is not good!".filter(bannedList));
        });
});