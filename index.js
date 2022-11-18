
class BankAccount {
    constructor(accountNumber, owner, Transactions) {
        this.accountNumber = accountNumber;
        this.owner = owner;
        this.Transactions = [];
    }
    balance() {
        const total = this.Transactions.reduce((starting, next) => 
        starting + next.amt, 0)
        return total;
    }
    deposit(amt) {
        if(amt > 0){ //make sure deposits are not negative
            let deposit = new Transaction(amt, this.owner);
            this.Transactions.push(deposit);
        }
    }
    charge(amt, payee) {
       if(this.balance() > amt) { //only apply charges if the balance is > amt
            let charge = new Transaction(-1*amt, payee); //multiply by -1 to subtract charges
            this.Transactions.push(charge);
        }
    }
    
}

class Transaction {
    constructor(amt, payee) {
        this.amt = amt;
        this.payee = payee;
        this.date = new Date();
    }
}

