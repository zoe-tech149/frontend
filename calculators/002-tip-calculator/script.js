const billAmountEl = document.querySelector("#bill-amount");
const tipPercentageEl = document.querySelector("#tip-percentage");

const calcateBtnEl = document.querySelector("#calculateBtn");

const totalBillEl = document.querySelector("#bill-total");

const billAmountResults = document.querySelector("#bill-amount-results");

calcateBtnEl.addEventListener("click", function() {

  if(billAmountEl.value === "") {
    billAmountResults.textContent = "Please enter the bill amount.";
    return;
  }

})
  


