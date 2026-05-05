class User {
    constructor(){}
    print(p: string){
        console.log('hello ', p)
    }
}
class Student extends User {
    constructor(){
        super()
    }
    
}
const res = new Student()

