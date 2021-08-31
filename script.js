var dateOfBirth = document.querySelector("#date-of-birth");
var luckyNumber = document.querySelector("#lucky-number");
var checkButton = document.querySelector("#btn-check");
var outputBox = document.querySelector("#output-box");

checkButton.addEventListener("click", function clickHandler() {
    if (dateOfBirth.value && luckyNumber.value) {
        const sum = calculateSum(dateOfBirth.value);
        displayResult(sum, luckyNumber.value);
    } else {
        outputBox.innerHTML = "Please Enter Both Values";
    }
});

function calculateSum(dateOfBirth) {
    let sum = 0;
    dateOfBirth = dateOfBirth.replaceAll("-", "");
    for (let i = 0; i < dateOfBirth.length; i++)
        sum += Number(dateOfBirth.charAt(i));
    return sum;
}

function displayResult(sum, luckyNumber) {
    if (sum % luckyNumber === 0) {
        outputBox.innerHTML = "Hey...Your Birthday Is Lucky..."
    } else {
        outputBox.innerHTML = "Ummm...It Seems Your Birthday Is Not Lucky..."
    }
}