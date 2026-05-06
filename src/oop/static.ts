class Login {
    static count: number = 0
    login(){
        const date = new Date()
         if (Login.count === 2 && date.getHours() < 24) {
            console.log('you can not login today')
            return
        }
        Login.count++
        console.log('logged in successfull')
        
    }
}
const l = new Login()
const l1 = new Login()
l.login()
l1.login()
l1.login()
