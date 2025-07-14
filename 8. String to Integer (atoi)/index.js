/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    s = s.trim()

    let nums = "0123456789"
    let sorted = ""
    let sign = 1
    let i = 0
    const INT_MIN = -2147483648;
    const INT_MAX = 2147483647;

    let result2 = parseInt(s)

    if (s[0] === "-") {
        sign = -1
        i++
    } else if (s[0] === "+") {
        i++
    }

    for (i; i < s.length; i++) {
        if (!nums.includes(s[i])) {
            break
        } else {
            sorted += s[i]
        }
    }

    if (sorted === "") return 0

    let result = parseInt(sorted) * sign;

    if (result2 < INT_MIN || result < INT_MIN) return INT_MIN;
    if (result2 > INT_MAX || result > INT_MAX) return INT_MAX;

    return result;
};