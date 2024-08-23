/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function (n) {
   if (n === 1) return 0;

   let steps = 0;
   let divisor = 2;

   while (n > 1) {
      while (n % divisor === 0) {
         steps += divisor;
         n = n / divisor;
      };
      divisor++;
   };

   return steps;
};