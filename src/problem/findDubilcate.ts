function findDuplicate(nums: number[]) {
   let obj = new Map()
   for (const n of nums){
        obj.set(n, (obj.get(n) ?? 0)+1)
   }
   let res: number = 0
   obj.forEach((v, k) => {
        if (v > 1){
            if (!res){
                res = k
            }
        }
   })
   return res
};
console.log(findDuplicate([1, 2, 3, 1, 4, 5,2]))