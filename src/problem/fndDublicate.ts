
const arr = [1, 2, 3, 1, 4, 5,2]
function findDub(arr: number[]){
    let map = new Map()
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (map.size === 0){
            map.set(element, 1)
        } else {
            if (map.has(element)){
                return element
            } else {
                map.set(element, 1)
            }
        }
    }
}
console.log(
findDub(arr))