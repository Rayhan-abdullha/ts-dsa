const add = (a: number, b: number | string) => {
    if (typeof a === 'number' && typeof b === 'number'){
        return a + b
    }
    console.log('is not number')
}
add(1,2)