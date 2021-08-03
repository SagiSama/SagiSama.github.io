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
	let acc = new Account(12);
	acc.deposit(2);
	it("withdraw return balance minus withdraw",
        function () {
            assert.equal(1, acc.withdraw(1));
        });
});

describe("toString", function () {
	let acc = new Account(12);
	it("toString return string",
        function () {
            assert.equal("Account 12: balance 1", acc.toString());
        });
});

let account = new Account(12);
describe("endOfMonth", function () {
	it("endOfMonth do nothing",
        function () {
            assert.equal("", account.endOfMonth());
        });
});