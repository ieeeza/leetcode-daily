function romanToInt(s) {
    const romanNumbers = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let result = 0;

    for (let i = 0; i < s.length - 1; i++) {
        if (romanNumbers[s[i]] < romanNumbers[s[i + 1]]) {
            result -= romanNumbers[s[i]];
        } else {
            result += romanNumbers[s[i]];
        }
    }

    return result + romanNumbers[s[s.length - 1]];
}

romanToInt(s);
