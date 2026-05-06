class Person {
    getSleep() {
        console.log('I am normal person, I sleep 8 hours a day')
    }
}
class Student extends Person {
    getSleep() {
        console.log('I am a student, I sleep 6 hours a day')
    }
    print() {
        console.log('I am a student')
    }
}
class Developer extends Person {
    getSleep() {
        console.log('I am a developer, I sleep 5 hours a day')
    }
}

const person = new Person()
const student = new Student()
const developer = new Developer()

function getSleepFunc(p: Person) {
    p.getSleep()
    
}

getSleepFunc(person)
getSleepFunc(student)
getSleepFunc(developer)