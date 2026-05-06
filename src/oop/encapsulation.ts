class BankAccount {
    private _balance: number = 0
    constructor(balance: number) {
        this._balance = balance
    }
    print() {
        console.log(`Balance is ${this._balance}`)
    }
    get balance() {
        return this._balance
    }
    set balance(amount: number) {
        if (typeof amount !== 'number' || amount < 0) {
            console.log("amount is not valid!");
            return
        }
        this._balance += amount
    }
}

const account = new BankAccount(1000)
account.print()
account.balance = 100