
function firstMissingPositive(nums: number[]) {
    let stack: number[] = []
    if (nums.length === 0){
        return 1
    }
    if (nums.length === 1 && nums[0] !== 1){
        return 1
    }
    let flag = false
    for (const num of nums){
        if (num >= 0){
            flag = true
            stack[num] = num as number
        }
    }
    
    if (!flag){
        return 1
    }
    for (let i = 0; i <= stack.length; i++){
        const curr = stack[i]
        if (curr === undefined && i > 0){
            return i
        }
    }
};
console.log(firstMissingPositive([-5, -4, -3, -2, -1]))