const billAmount = document.querySelector("#bill-amount");

const tipPercentage = document.querySelector("#tip-percentage");

const inputsResult = document.querySelector("#inputs-results");

const calcateBtn = document.querySelector("#calculateBtn");

const totalBill = document.querySelector("#bill-total");

calcateBtn.addEventListener("click", function() {

  if (billAmount.value === "" && tipPercentage.value === "") {
    inputsResult.textContent = "Please enter the bill amount and tip percentage.";
  } else if (billAmount.value === "") {
    inputsResult.textContent = "Please enter the bill amount.";
  } else if (tipPercentage.value === "") {
    inputsResult.textContent = "Please enter the tip percentage.";
    return;
  };

  const billAmountInput = Number(billAmount.value);

  const tipPercentageInput = Number(tipPercentage.value);
  
  if (billAmount.value < 0 || tipPercentage.value < 0) {
    inputsResult.textContent = "Invalid bill amount or tip  percentage." 
    return
  }

  const totalBillValue = billAmount.value * (1 + tipPercentage.value/100);

  totalBill.innerText = totalBillValue;

})
  


