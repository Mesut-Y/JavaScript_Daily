const inputMoney = document.querySelector("#amountOfMoney");
const firstOption = document.querySelector("#firstCurrencyOptions");
const secondOption = document.querySelector("#secondCurrencyOptions");
const resultMoney = document.querySelector("#result");

const currency = new Currency();

runEventListeners();

function runEventListeners(){
    inputMoney.addEventListener("input",exchange);

}

function exchange(){
    const amount = Number(inputMoney.value.trim());
    const firstOptionValue = firstOption.options[firstOption.selectedIndex].textContent;
    const secondOptionValue = secondOption.options[secondOption.selectedIndex].textContent;
    console.log(amount, firstOptionValue, secondOptionValue);
    const promise = currency.exchange(amount, firstOptionValue, secondOptionValue);
    
    promise
    .then(data => resultMoney.value = data.toFixed(3))
    .catch(err => console.log(err));
}