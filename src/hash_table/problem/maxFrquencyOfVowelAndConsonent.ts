function maxFreqSum(s: string): number {
    const vowels = new Set(["a", "e", "i", "o", "u"]);

    const vowelFreq = new Map<string, number>();
    const consonantFreq = new Map<string, number>();

    // Count frequencies
    for (const ch of s) {
        if (vowels.has(ch)) {
            vowelFreq.set(ch, (vowelFreq.get(ch) ?? 0) + 1);
        } else {
            consonantFreq.set(ch, (consonantFreq.get(ch) ?? 0) + 1);
        }
    }

    let maxVowel = 0;
    let maxConsonant = 0;

    // Find max vowel frequency
    for (const freq of vowelFreq.values()) {
        maxVowel = Math.max(maxVowel, freq);
    }

    // Find max consonant frequency
    for (const freq of consonantFreq.values()) {
        maxConsonant = Math.max(maxConsonant, freq);
    }
        console.log('consonent', maxConsonant)
        console.log('vowel', maxVowel)

    console.log(maxVowel)
    console.log(maxConsonant)
    return maxVowel + maxConsonant;
}
