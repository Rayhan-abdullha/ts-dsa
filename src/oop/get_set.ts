
class BankAccount {
    private _balance: number 
    constructor(balance: number){
        this._balance = balance
    }
    print(){
        console.log(`Balance is ${this._balance}`)
    }
    get get_balance(): number{
       return this._balance
    }
    set deposit(amount: number){
        this._balance -= amount
        return
    }
}

const t = new BankAccount(100000)

console.log(t.get_balance)
t.deposit = 1000
console.log(t.get_balance)
console.log(t.get_balance)
t.deposit = 1000
console.log(t.get_balance)
console.log(t.get_balance)
t.deposit = 1000
console.log(t.get_balance)