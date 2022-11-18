class BankAccount {
    constructor(accountNumber, owner, transactions) {
        this.accountNumber = accountNumber;
        this.owner = owner;
        this.transactions = [];
    }
    balance() {
        const initial = 0;
        const total = this.transactions.reduce((starting, next) => starting + next, initial)
        return total;

    }
    deposit(amt) {
        if(amt > 0){ //make sure deposits are not negative
            let deposit = new Transaction(amt, this.owner);
            this.transactions.push(deposit);
        }
    }
    charge(payee, amt) {
        if(this.balance() > 0) { //only apply charges if the balance is > 0
            let charge = new Transaction(-1*amt, payee); //multiply by -1 to subtract charges
            this.transactions.push(charge);
        }
    }
}

class Transaction {
    constructor(amt, payee) {
        this.amt = amt;
        this.payee = payee;
        let today = new Date();
    }
}