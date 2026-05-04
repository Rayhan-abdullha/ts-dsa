type Coordinates<X,Y> = [X, Y]

const coordinates: Coordinates<number, number> = [1,2]

function merge<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

const merged = merge({ name: "Rayhan" }, { age: 25 });
// Type: { name: string; age: number }


interface IRunable<T, U>{
    run:(input: T) => U
}
const runable: IRunable<string, number> = {
    run(input: string){
        return input.length
    }
}
const result = runable.run("Hello World")
console.log(result)



interface CB {
    (a: number, b: number): number
}
function myFunc(cb: CB){
    return cb
}
myFunc(function(a: number, b: number){
    return a + b
})
