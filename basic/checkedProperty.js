const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const submit = document.getElementById("submit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

submit.onclick = function () {
  if (myCheckBox.checked) {
    subResult.textContent = `Your are subscribed!`;
  } else {
    subResult.textContent = `Your are not subscribed!`;
  }

  if (visaBtn.checked) {
    paymentResult.textContent = `You are paying with Visa`;
  } else if (masterCardBtn.checked) {
    paymentResult.textContent = `You are paying with MasterCard`;
  } else if (payPalBtn.checked) {
    paymentResult.textContent = `You are paying with PayPal`;
  } else {
    paymentResult.textContent = `You mush select a payment type`;
  }
};
