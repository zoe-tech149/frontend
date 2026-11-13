console.log("Bill Split Calculator");

let billAmount = 45.5;
let tipPercentage = 8;
let numPeople = 2;

const totalBill = billAmount +  billAmount * (tipPercentage/ 100);

const amountPerPerson = totalBill / numPeople;
