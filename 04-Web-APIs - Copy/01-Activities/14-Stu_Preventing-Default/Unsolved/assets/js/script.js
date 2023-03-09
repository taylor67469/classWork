var tipEl = document.querySelector("#tip-percentage");
var totalEl = document.querySelector("#total");
var submitEl = document.querySelector("#submit");

function calculateTip(total, tipPercentage) {
  //rounds result actual value
  var roundedResult = (total * tipPercentage).toFixed(2);
  //returns value of actual value
  return roundedResult;
}

function calculateTotal(total, tipAmount) {
  //returns total and tip amount
  return parseFloat(total) + parseFloat(tipAmount);
}

function addTip(event) {
  event.preventDefault();
  var tipPercentage = tipEl.value * .01;
  var total = totalEl.value;  
  //calculates tip 
  var tipAmount = calculateTip(total, tipPercentage);
  //calcs new total
  var newTotal = calculateTotal(tipAmount, total);
  //
  document.querySelector("#tip-amount").textContent = tipAmount;
  document.querySelector("#new-total").textContent = newTotal.toFixed(2);
}

submitEl.addEventListener("click", addTip);
