describe("filter", function () {
    it("Filter returns filtered string by banned string list",
        function () {
            assert.equal("IT good!", new String("IT is not good!").filter(['is', 'not']));
        });
});

describe("bubbleSort", function () {
    it("Filter returns filtered string by banned string list",
        function () {
            assert.equal("1,2,3,4,0,-1,-9,3", new Arr([1,2,3,4,0,-1,-9,3]).bubbleSort().toString());
        });
});
