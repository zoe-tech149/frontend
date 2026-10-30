const billAmount = document.querySelector("#bill-amount");
const billAmountResults = document.querySelector("#bill-amount-results");

const tipPercentage = document.querySelector("#tip-percentage");
const tipPercentageResults = document.querySelector("#percentage-results")

const calcateBtn = document.querySelector("#calculateBtn");

const totalBill = document.querySelector("#bill-total");

calcateBtn.addEventListener("click", function() {

  if(billAmount.value === "") {
    billAmountResults.textContent = "Please enter the bill amount.";
    return;
  }

  if(tipPercentage.value === "") {
    tipPercentageResults.textContent = "Please enter the tip percentage.";
    return;
  }  

})
  


