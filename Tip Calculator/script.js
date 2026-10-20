// Select DOM elements
const billInput = document.getElementById('billAmount');
const tipInput = document.getElementById('tipPercentage');
const calculateBtn = document.getElementById('calculateBtn');
const tipResult = document.getElementById('tipResult');
const totalResult = document.getElementById('totalResult');

// Add click event listener to the button
calculateBtn.addEventListener('click', () => {
  // Convert input string values into numbers
  const bill = parseFloat(billInput.value);
  const tipPercent = parseFloat(tipInput.value);

  // Validation check: Make sure values are valid numbers and not empty
  if (isNaN(bill) || isNaN(tipPercent) || bill < 0 || tipPercent < 0) {
    alert("Please enter valid positive numbers for both fields.");
    return;
  }

  // Calculate the math based on requirements
  const tipAmount = bill * (tipPercent / 100);
  const totalBill = bill + tipAmount;

  // Update the DOM to display numbers formatted to 2 decimal points
  tipResult.textContent = `$${tipAmount.toFixed(2)}`;
  totalResult.textContent = `$${totalBill.toFixed(2)}`;
});
