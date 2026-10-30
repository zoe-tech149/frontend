const billAmount = document.querySelector("#bill-amount");

const tipPercentage = document.querySelector("#tip-percentage");

const inputsResult = document.querySelector("#inputs-results");

const calcateBtn = document.querySelector("#calculateBtn");

const totalBill = document.querySelector("#bill-total");

calculateBtn.addEventListener("click", function() {

  totalBill.textContent = "";

  if (billAmount.value === "" && tipPercentage.value === "") {
    inputsResult.textContent = "Please enter the bill amount and tip percentage.";
    return;
  } 
    else if (billAmount.value === "") {
    inputsResult.textContent = "Please enter the bill amount.";
    return;
    } 
      else if (tipPercentage.value === "") {
      inputsResult.textContent = "Please enter the tip percentage.";
      return;
      }

  const billAmountInput = Number(billAmount.value);

  const tipPercentageInput = Number(tipPercentage.value);
  
  if (billAmountInput < 0 || tipPercentageInput < 0) {
    inputsResult.textContent = "Invalid bill amount or tip  percentage." 
    return;
  }

  const totalBillValue = billAmountInput * (1 + tipPercentageInput/100);

  totalBill.textContent = `R${totalBillValue.toFixed(2)}`;

})

function clearPreviousResult() {
  inputsResult.textContent = "";
  totalBill.textContent = "";
}

billAmount.addEventListener("input", clearPreviousResult);
tipPercentage.addEventListener("input", clearPreviousResult);

