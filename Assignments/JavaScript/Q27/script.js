for (let num = 0; num <= 100; num++) {
  const isPrime = (num) => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
      if (num % i === 0) return false;
    }
    return num > 1;
  };
  console.log(isPrime);
}
