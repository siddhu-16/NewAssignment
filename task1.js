let even = [];
let odd = [];

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        even.push(i);
    } else {
        odd.push(i);
    }
}

console.log("Even Numbers: ", even);
console.log("Odd Numbers: ", odd);