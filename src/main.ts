// import './oop/oop';
// import './phase-1/practice'
// import './phase-2/practice'
// import './phase-3/practice'

// import './array/index'
// import './hash_table/index'
// import './linkedlist/index'
// import './stack_and_queue/index'

// import './practice/practice'
// import './practice/union_intresection'
// import './practice/practice'
// import './task/typescript-mastary/solution'
// import './oop/class'

const map = new Map()
const arr = [1,1,1,2,3,44,3,4,5,66,6,6,7,5,4]

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    const count = map.get(element)
    map.set(element, (count ?? 0)+1)
}
console.log(map)