// Grab DOM elements
const amountInput = document.querySelector(".money input");
const rateInput = document.querySelector(".interestRate input");
const frequencySelect = document.getElementById("recurrance");
const slider = document.getElementById("myRange");
const sliderValue = document.getElementById("slider-value");

const futureValueSpan = document.getElementById("future-value");
const totalInterestSpan = document.getElementById("total-interest");

// Output area
const resultDiv = document.createElement("div");
resultDiv.id = "result";
document.body.appendChild(resultDiv);

// Show slider value live
slider.addEventListener("input", () => {
  sliderValue.textContent = slider.value;
  calculateCompoundInterest();
});

// Recalculate whenever inputs change
[amountInput, rateInput, frequencySelect].forEach((el) => {
  el.addEventListener("input", calculateCompoundInterest);
});

// Compound interest calculation
function calculateCompoundInterest() {
  const principal = parseFloat(amountInput.value) || 0;
  const rate = parseFloat(rateInput.value) / 100 || 0; // convert % to decimal
  const n = parseInt(frequencySelect.value) || 1;
  const t = parseInt(slider.value) || 0;

  if (principal <= 0 || rate <= 0 || t <= 0) {
    resultDiv.textContent = "Enter values to calculate.";
    return;
  }

  const amount = principal * Math.pow(1 + rate / n, n * t);
  const interest = amount - principal;

  futureValueSpan.textContent = `$${amount.toFixed(2)}`;
  totalInterestSpan.textContent = `$${interest.toFixed(2)}`;
}
