/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
   const cache = new Map();
   return function (...args) {
      let key = JSON.stringify(args); //passa os argumentos ...args para a constante key;
      if (cache.has(key)) {
         return cache.get(key) //adiciona o valor de key na array cache
      } else {
         let b = fn(...args);
         cache.set(key, b);
         return b
      }
   }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */