function calculateSum(numb1, numb2) {
  return numb1 + numb2;
}

console.log(calculateSum(2, 5)); // 7
console.log(calculateSum(10,10)); // 20
console.log(calculateSum(5, 5)); // 10

function calculateDifference(numb1, numb2) {
  return numb1 - numb2;
}

console.log(calculateDifference(22, 5)); // 17
console.log(calculateDifference(12, 1)); // 11
console.log(calculateDifference(17, 9)); // 8

function calculateProduct(numb1, numb2) {
  return numb1 * numb2;
}

console.log(calculateProduct(13, 5)); //65

function calculateQuotient(numb1, numb2) {
  if (numb2 === 0) {
    return "Error: Division by zero";
  }
  return numb1 / numb2;
}

console.log(calculateQuotient(3, 0)); // Error: Division by zero

function calculateSquare(num) {
  return num ** 2;
}

console.log(calculateSquare(2));
console.log(calculateSquare(9));