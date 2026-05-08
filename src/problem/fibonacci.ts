function fibonacci(num: number){
    let febo = new Array(num)
    febo[0] = 0
    febo[1] = 1
    for (let i = 2; i < num; i++){
        const sumPrevTwo = febo[i-1] + febo[i-2]
        febo[i] = sumPrevTwo
    }
    return febo
}
console.log(fibonacci(10))