function moveZeroes(nums: number[]): void {
    let lastNonZero = 1;
    
    // First pass: move all non-zero elements to front
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            const temp = nums[lastNonZero];
            console.log(temp)
            nums[lastNonZero] = nums[i]!;
            nums[i] = temp!;
            lastNonZero++;
        }
    }
    console.log(nums)    
}
moveZeroes([0,10,0,3,12])
