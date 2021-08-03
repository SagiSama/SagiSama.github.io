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
    it("deposit returns account's balance add to deposit",
        function () {
            assert.equal(14, new Account(12).deposit(2));
        });
});

describe("withdraw", function () {
    it("withdraw returns account's balance",
        function () {
            assert.equal(new RangeError("Withdraw amount has to be greater than zero"), new Account(12).withdraw(14));
        });
});