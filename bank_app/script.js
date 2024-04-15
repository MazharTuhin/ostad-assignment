class BankAccount {
    constructor(accountNumber, ownerName, balance) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`Diposited ${amount} from account number ${this.accountNumber}`);
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log('Insufficient funds'); 
        } else {
            this.balance -= amount;
            console.log(`Withdrawn ${amount} from account number ${this.accountNumber}`);
        }
    }

    getBalance() {
        return this.balance;
    }

    displayAccountInfo() {
        console.log(`Account Number: ${this.accountNumber}`);
        console.log(`Owner Name: ${this.ownerName}`);
        console.log(`Balance: ${this.balance}`);
    }
}

// Create two instances
const account1 = new BankAccount(1001, 'John Doe', 1000);
const account2 = new BankAccount(1002, 'Mazhar Tuhin', 500);

// Demonstrate the functionality
console.log('Initial accounts information: ');
account1.displayAccountInfo();
account2.displayAccountInfo();

console.log('\nDeposit and Withdrawal: ');
account1.deposit(200);
account1.withdraw(500);
account2.deposit(100);
account2.withdraw(200);

// Updated account information
console.log(`\nUpdated accounts information: `);
account1.displayAccountInfo();
account2.displayAccountInfo();