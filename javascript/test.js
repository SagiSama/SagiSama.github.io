describe("getNumber", function () {
    it("getNumber returns account's number",
        function () {
            assert.equal(12, new Account(12).getNumber());
        });
});

describe("getBalance", function () {
    it("getBalance returns account's balance",
        function () {
            assert.equal(0.0, new Account(12).getBalance());
        });
});

describe("deposit", function () {
    it("deposit add balance, return nothing",
        function () {
            assert.equal(undefined, new Account(12).deposit(2));
        });
});

describe("withdraw", function () {
	it("withdraw return balance minus withdraw",
        function () {
            assert.equal(1, new Account(12).withdraw(11));
        });
});

describe("toString", function () {
	it("toString return balance minus withdraw",
        function () {
            assert.equal("Account 12: balance 0.0", new Account(12).toString());
        });
});