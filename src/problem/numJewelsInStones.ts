function numJewelsInStones(jewels: string, stones: string) {
    const freqStone = new Set(jewels)
    let count = 0
    freqStone.forEach(ch => {
        for (let i = 0; i < stones.length; i++){
            if (ch === stones[i]){
                count++
            }
        }
    })
    return count
    
};