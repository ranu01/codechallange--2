function findPrimes(nums) {

    const primes = [];
    for (const number of nums) {
      if (number <= 1) continue;
      let isPrime = true;
    
      for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) primes.push(number);           //.push adds a new elemet 
    }
    return primes;                                 // returns A list of integers that has only prime numbers from the input list.
  }
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const output= findPrimes(list);
console.log(output);

