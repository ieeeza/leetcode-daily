/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
   if (num === 0) return 1;

   bitLength = num.toString(2).length;

   mask = (1 << bitLength) - 1;

   return num ^ mask;
};