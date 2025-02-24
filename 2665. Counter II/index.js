
var createCounter = function (init) {
   let value = init;

   return {
      increment() { return ++value; },
      decrement() { return --value; },
      reset() { return (value = init); }
   }
};



var createCounter = function (init) {
   let count = init

   return {
      increment: function () {
         return ++count
      },
      decrement: function () {
         return --count
      },
      reset: function () {
         return count = init
      }
   }
};
