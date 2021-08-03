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
    it("deposit add deposit to balance",
        function () {
        	let acc = new Account(12);
        	acc.deposit(2);
            assert.equal(2, acc.getBalance());
        });
});


describe("withdraw", function () {
	it("withdraw minus withdraw from balance",
        function () {
            let ac = new Account(12);
            ac.deposit(2);
            ac.withdraw(1);
            assert.equal(1, ac.getBalance());
        });
});

describe("toString", function () {
	it("toString return string",
        function () {
			let acc = new Account(12);
            assert.equal("Account 12: balance 0", acc.toString());
        });
});

let account = new Account(12);
describe("endOfMonth", function () {
	it("endOfMonth do nothing",
        function () {
            assert.equal("", account.endOfMonth());
        });
});

let savinAccount = new SavingAccount(10, 2)
describe("addInterest", function () {
	it("addInterest multiply deposit",
        function () {
			savingAccout.addInterest();
            assert.equal(20, savingAccout.getBalance());
        });
});

describe("toString", function () {
	it("toString of saving account return string",
        function () {
            assert.equal("Account 20: balance 0: interest: 10", savingAccout.toString());
        });
});