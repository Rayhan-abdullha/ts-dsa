function countConsistentStrings(allowed: string, words: string[]): number {
    const allowedSet = new Set(allowed);
    
    let count = 0;

    for (const word of words) {
        let consistent = true;

        for (const ch of word) {
            if (!allowedSet.has(ch)) {
                consistent = false;
                break;
            }
        }

        if (consistent) {
            count++;
        }
    }

    return count;
}
countConsistentStrings("ab", ["ad","bd","aaab","baa","badab"])