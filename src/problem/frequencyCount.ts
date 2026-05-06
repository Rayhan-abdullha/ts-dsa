const map = new Map()
const arr = [1,1,1,2,3,44,3,4,5,66,6,6,7,5,4]

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    const count = map.get(element)
    map.set(element, (count ?? 0)+1)
}
console.log(map)