"use strict";

class SavingsAccount extends Account {
	constructor(number, interest) {
		super(number);
		this._interest = interest;
    }
    
    addInterest() {
    	this._balance *= this._interest / 100;
    }
    
    toString() {
        return "Account " + this._number + ": balance " + this._balance + ": interest " + this._interest;
    }
}

class CheckingAccount extends Account {
	constructor(number, overdraft) {
		super(number)
		this._overdraft = overdraft;
	}
	
	setOverdraft(overdraft) {
		this._overdraft = overdraft;
	}
	
	getOverdraft() {
		return this._overdraft;
	}
	
	withdraw(amount) {
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if((this._overdraft + this._balance) < amount) {
        	throw new RangeError("Overdraft has to reached its limit");
        }
        this._balance -= amount;
    }
}