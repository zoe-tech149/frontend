function calculateRangeSum() {
  let sum = 0;

  for (let i = 1; i <= 10000; i++) {
    sum += i;
  }

  console.log(sum);
}

let n = 3;

for (let i = 0; i < n; i++) {
  calculateRangeSum();
}

