// creates a bank account with the person's information and puts the Transactions into an array
class BankAccount {
    constructor(accountNumber, owner, Transactions) {
        this.accountNumber = accountNumber;
        this.owner = owner;
        this.Transactions = [];
    }
    balance() { //calculates the total from all the Transactions at that point
        const total = this.Transactions.reduce((starting, next) => 
        starting + next.amt, 0)
        return total;
    }
    deposit(amt) { //deposits an amount into the owner's account
        if(amt > 0){ //make sure deposits are not negative
            let deposit = new Transaction(amt, this.owner);
            this.Transactions.push(deposit); //pushes the deposit into the Transactions array
        }
    }
    charge(amt, payee) { // creates a charge with the amount and the location it was charged
       if(this.balance() > amt) { //only apply charges if the balance is > amt
            let charge = new Transaction(-1*amt, payee); //multiply by -1 to subtract charges
            this.Transactions.push(charge); //pushes the charge into the Transactions array
        }
    }
    
}

//creates a transaction that will be used to put into the Transactions array
class Transaction {
    constructor(amt, payee) {
        this.amt = amt;
        this.payee = payee;
        this.date = new Date();
    }
}

