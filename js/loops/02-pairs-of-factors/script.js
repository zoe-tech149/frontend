let n = 12;

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        if (i * j === n) {
            console.log(i, j);
        }
    }
}