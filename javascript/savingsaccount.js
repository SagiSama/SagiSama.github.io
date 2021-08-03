"use strict";

class SavingsAccount extends Account {
	constructor(number, interest) {
		super(number);
		this._interest = interest;
    }
    
    addInterest() {
    	this.balance * this.interest / 100;
    }
    
    toString() {
        return "Account " + this._number + ": balance " + this._balance + ": interest" + this.interest;
    }
}