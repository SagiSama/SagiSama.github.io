describe("filter", function () {
    it("Filter returns filtered string by banned string list",
        function () {
        	assert.equal("IT good!", "IT is not good!".filter(['is', 'not']));
        });
});

describe("filter1", function () {
    it("Filter returns filtered string by banned string list",
        function () {
        	assert.equal([-9,-1,0,1,2,3,3,4], [1,2,3,4,0,-1,-9,3].bubbleSort());
        });
});
