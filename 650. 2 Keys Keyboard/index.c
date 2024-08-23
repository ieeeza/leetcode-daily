int main(int n) {
   if (n == 1 ) return 0;

   int steps = 0;
   int divisor = 3;

   while (n > 1 ) {
      while (n % divisor == 0) {
         steps += divisor;
         n /= divisor;
      };
      divisor++;
   };
   return steps;
};