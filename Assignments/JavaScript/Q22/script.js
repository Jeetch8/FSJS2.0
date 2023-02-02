const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array and find the min and max age
const sortedAges = ages.sort();
Math.min(...sortedAges);
Math.max(...sortedAges);

// Find the median age(one middle item or two middle items divided by two)
if ((ages.length - 1) % 2 != 0) {
  const median = [Math.min(ages.length / 2) - 1, Math.max(ages.length / 2)];
  console.log(median);
} else {
  const median = (ages.length - 1) / 2;
  console.log(median);
}

// Find the average age(all items divided by number of items)
let total = 0;
ages.forEach((num) => {
  total = total + num;
});
const avgAge = total / ages.length;

// Find the range of the ages(max minus min)
const range = Math.max(...ages) - Math.min(...ages);

// Compare the value of (min - average) and (max - average), use abs() method
const comparision = Math.min(...ages) - avgAge - (Math.max(...ages) - avgAge);
