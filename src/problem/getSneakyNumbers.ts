function getSneakyNumbers(nums: number[]): number[] {
    const seen = new Map()
    for (const item of nums){
        console.log(item)
        if (seen.has(item)){
            seen.set(item, seen.get(item)! + 1)
        } else {
            seen.set(item, 1)
        }
    }
    let res: number[] = []
    console.log(seen)
    seen.forEach((item, key) => {
        if (item > 1){
            res.push(key)
        }
    })
    return res
};
console.log(getSneakyNumbers([0,1,0,1]))