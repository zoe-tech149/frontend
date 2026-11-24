const product1Name = "Wireless Mouse";
const product1NameEl = document.querySelector("#product-1-name");
product1NameEl.textContent = product1Name;

const product2Name = "Keyboard";
const product2NameEl = document.querySelector("#product-2-name");
product2NameEl.textContent = product2Name;

const product3Name = "USB Cable";
const product3NameEl = document.querySelector("#product-3-name");
product3NameEl.textContent = product3Name;


const product1Price = 250;
const product1PriceEl = document.querySelector("#product-1-price");
product1PriceEl.textContent = product1Price;

const product2Price = 450;
const product2PriceEl = document.querySelector("#product-2-price");
product2PriceEl.textContent = product2Price;

const product3Price = 80;
const product3PriceEl = document.querySelector("#product-3-price");
product3PriceEl.textContent = product3Price;


const product1Quantity = 2;
const product1QuantityEl = document.querySelector("#product-1-quantity");
product1QuantityEl.textContent = product1Quantity;

const product2Quantity = 1;
const product2QuantityEl = document.querySelector("#product-2-quantity");
product2QuantityEl.textContent = product2Quantity;

const product3Quantity = 3;
const product3QuantityEl = document.querySelector("#product-3-quantity");
product3QuantityEl.textContent = product3Quantity;


const product1Subtotal = product1Price * product1Quantity;
const product1SubtotalEl = document.querySelector("#product-1-subtotal");
product1SubtotalEl.textContent = `R ${product1Subtotal}`;

const product2Subtotal = product2Price * product2Quantity;
const product2SubtotalEl = document.querySelector("#product-2-subtotal");
product2SubtotalEl.textContent = `R ${product2Subtotal}`;

const product3Subtotal = product3Price * product3Quantity;
const product3SubtotalEl = document.querySelector("#product-3-subtotal");
product3SubtotalEl.textContent = `R ${product3Subtotal}`;


const cartTotal = product1Subtotal + product2Subtotal + product3Subtotal;

const cartTotalEl = document.querySelector("#cart-total");
cartTotalEl.textContent = `R ${cartTotal}`;
