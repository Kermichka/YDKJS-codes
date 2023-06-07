/* isPrime(11);        // true
isPrime(12);        // false

factorize(11);      // [ 11 ]
factorize(12);      // [ 3, 2, 2 ] --> 3*2*2=12
*/
const isPrime = (function hideCache () {
  const cache = {};
  function isPrime (v) {
    if (!(v in cache)) {
      if (v <= 3) {
        return v > 1;
      }
      if (v % 2 == 0 || v % 3 == 0) {
        cache[v] = false;
      } else {
        const vSqrt = Math.sqrt(v);
        for (let i = 5; i <= vSqrt; i += 6) {
          if (v % i == 0 || v % (i + 2) == 0) {
            cache[v] = false;
            return cache[v];
          }
        }
        cache[v] = true;
      }
    }
    return cache[v];
  }
  return isPrime;
})();
const factorize = (function hideCache () {
  const cache = {};
  function factorize (v) {
    if (!(v in cache)) {
      if (!isPrime(v)) {
        let i = Math.floor(Math.sqrt(v));
        while (v % i != 0) {
          i--;
        }
        cache[v] = [
          ...factorize(i),
          ...factorize(v / i)
        ];
        return cache[v];
      }
      cache[v] = [v];
    }
    return cache[v];
  }
  return factorize;
})();
console.log(isPrime(6));
console.log(factorize(6));
console.log(factorize(6));
console.log(factorize(12));
console.log(factorize(12));
console.log(factorize(11));
console.log(factorize(22));
console.log(factorize(121));
