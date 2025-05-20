var reverse = function (x) {
        const isNegative = x < 0;
        const absReversed = parseInt(Math.abs(x).toString().split("").reverse().join(""));

        const reversed = isNegative ? -absReversed : absReversed;

        const INT_MIN = -(2 ** 31); // -2147483648
        const INT_MAX = 2 ** 31 - 1; // 2147483647

        if (reversed < INT_MIN || reversed > INT_MAX) {
            return 0;
        }

        return reversed;
};
