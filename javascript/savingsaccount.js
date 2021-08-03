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
    
    toString() {
        return "Account " + this._number + ": balance " + this._balance + ": overdraft " + this._overdraft;
    }
}

class Bank {
	constructor() {
		this._nextNumber = 0;
		this._accounts = [];
	}
	
	addAccount() {
	  this._nextNumber += 1;
		this._accounts.push(new Account(this._nextNumber));
		return this._nextNumber;
	}
	
	addSavingsAccount(interest) {
	  this._nextNumber += 1;
		this._accounts.push(new SavingsAccount(this._nexNumber, interest));
		return this._nextNumber;
	}
	
	addCheckingAccount(overdraft) {
	  this._nextNumber += 1;
		this._accounts.push(new CheckingAccount(this._nextNumber, overdraft));
		return this._nextNumber;
	}
	
	closeAccount(number) {
		for(let i=0; i<this._accounts.length; i++) {
			if(this._accounts[i].getNumber() == number) {
				this._accounts.splice(i, 1);
			}
		}
	}
	
	accountReport() {
		return this._accounts.toString();
	}
}
