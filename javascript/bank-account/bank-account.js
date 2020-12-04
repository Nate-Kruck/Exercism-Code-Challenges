//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {

  constructor(amount = 0) {
    this.amount = amount;
  }

  open() {
    return this.amount;
  }
  
  close() {
    throw new Error('Remove this statement and implement this function');
  }
  
  deposit(amount) {
    this.amount = this.amount + amount;
    return this.amount;
  }
  
  withdraw(amount) {
    this.amount = this.amount - amount;
  }
  
  get balance() {
    const account = new BankAccount(0);
    account.deposit(100);
    account.deposit(50);
    account.withdraw(100);
    account.withdraw(50);
    return this.amount;
  }

}

export class ValueError extends Error {

  constructor() {
    super('Bank account error');
  }

}
