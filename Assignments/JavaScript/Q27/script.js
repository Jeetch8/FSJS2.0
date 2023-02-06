// Write all prime numbers between 0 and 100 (including 0 and 100)

const numArr = [];
for (let p = 0; p <= 100; p++) {
  const innerArr = [];
  for (let i = 1; i <= p; i++) {
    if (p % i === 0) {
      innerArr.push(i);
    }
  }
  if (innerArr[0] == 1 && innerArr[1] == p) {
    numArr.push(p);
  }
}
console.log(numArr);
