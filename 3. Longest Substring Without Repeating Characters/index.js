var lengthOfLongestSubstring = function (s) {
    let letters = new Set();
    let l = 0, maxLength = 0

    for (let i = 0; i < s.length; i++) {
        while (letters.has(s[i])) {
            letters.delete(s[l])
            l++
        }

        letters.add(s[i]);
        maxLength = Math.max(maxLength, i - l + 1);
    }

    return maxLength

};