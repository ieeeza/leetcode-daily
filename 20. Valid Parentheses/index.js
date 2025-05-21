var isValid = function (s) {
    const z = [];
    const x = {
        ")": "(",
        "}": "{",
        "]": "["
    };

    for (let i of s) {
        if (!x[i]) {
            z.push(i);
        } else {
            if (!z.length || z.pop() !== x[i]) return false;
        }
    }

    return z.length === 0;
};
