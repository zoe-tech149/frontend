let n = 12;

for (let i = 0; i <= n; i++) {
  if (n % i === 0) {
      let partner = n / i;
      console.log(i, partner);
  }
}

