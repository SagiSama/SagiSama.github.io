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

describe("addInterest", function () {
	it("addInterest multiply deposit",
        function () {
        	let savingAccount = new SavingsAccount(10, 2);
			savingAccount.deposit(1);
			savingAccount.addInterest();
            assert.equal(0.02, savingAccount.getBalance());
        });
});

let savingAccount = new SavingsAccount(10, 2);
describe("toString", function () {
	it("toString of saving account return string",
        function () {
            assert.equal("Account 10: balance 0: interest 2", savingAccount.toString());
        });
});

let checkingAccount = new CheckingAccount(1100, 5);
describe("withdraw", function () {
	it("withdraw overdraft set negative balance with limit",
        function () {
        	checkingAccount.deposit(10);
        	checkingAccount.withdraw(11);
            assert.equal(-1, checkingAccount.getBalance());
        });
});
describe("withdraw", function () {
    it('withdraw overdraft catching thrown errors', 
    	function () {
    		assert.throws(function () { checkingAccount.withdraw(5) }, RangeError, "Overdraft has to reached its limit");
	});
});

describe("getOverdraft", function () {
    it('getOverdraft return overdraft', 
    	function () {
    		checkingAccount.setOverdraft(10);
            assert.equal(10, checkingAccount.getOverdraft());
	});
});

describe("setOverdraft", function () {
    it('setOverdraft set overdraft', 
    	function () {
    		checkingAccount.setOverdraft(10);
            assert.equal(10, checkingAccount.getOverdraft());
	});
});

describe("toString", function () {
    it('toString return string', 
    	function () {
            assert.equal("Account 1100: balance -1: overdraft 10", checkingAccount.toString());
	});
});

let bank = new Bank();
describe("addAccount", function () {
    it('addAccount return account number', 
    	function () {
            assert.equal(1, bank.addAccount());
	});
});

describe("addSavingsAccount", function () {
    it('addSavingsAccount return account number', 
    	function () {
            assert.equal(2, bank.addSavingsAccount(12));
	});
});

describe("addCheckingAccount", function () {
    it('addCheckingAccount return account number', 
    	function () {
            assert.equal(3, bank.addCheckingAccount(123));
	});
});

describe("closeAccount", function () {
    it('closeAccount delete account by number', 
    	function () {
	    	bank.closeAccount(2);
            assert.equal('Account 1: balance 0,Account 3: balance 0: overdraft 123', bank.accountReport(2));
	});
});

describe("accountReport", function () {
    it('accountReport return accounts', 
    	function () {
            assert.equal('Account 1: balance 0,Account 3: balance 0: overdraft 123', bank.accountReport());
	});
});


describe("endOfMonth", function () {
    it("endOfMonth return each account endOfMonth by it's type", 
    	function () {
            assert.equal("Account 1: balance 0,Account 2: balance 0: interest 100,Account 3: balance 0: overdraft 1, "+
            			 "Interest SavingsAccount 2 balance 0 interest 100, CheckingAccount 3 balance: 0 overdraft limit: 1", bank.accountReport());
	});
});