/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn) {
   let call = 0
   return function (...args) {
      call++;
      if (call > 1) {
         return undefined
      } else {
         return fn(...args)
      }
   }
};