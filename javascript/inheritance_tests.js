describe("filter", function () {
    it("Filter returns filtered string by banned string list",
        function () {
        	assert.equal("IT good!", "IT is not good!".filter(['is', 'not']));
        });
});

describe("bubbleSort", function () {
    it("bubbleSort returns sorted array",
        function () {
        	assert.equal([-9,-1,0,1,2,3,3,4].toString(), [1,2,3,4,0,-1,-9,3].bubbleSort().toString());
        });
});

describe("teach", function () {
    it("teach returns Teacher object inherited from Person",
        function () {
        	me.initialize("John", 25);
        	assert.equal("John is now teaching Inheritance", me.teach("Inheritance"));
        });
});