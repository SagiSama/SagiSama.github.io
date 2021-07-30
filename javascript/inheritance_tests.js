describe("filter1", function () {
    it("Filter returns filtered string by banned string list",
        function () {
            assert.equal("IT good!", "IT is not good!".filter1(['is', 'not']));
        });
});
