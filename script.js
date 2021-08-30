var dateOfBirth = document.querySelector("#date-of-birth");
var luckyNumber = document.querySelector("#lucky-number");
var checkButton = document.querySelector("#btn-check");
var outputBox = document.querySelector("#output-box");

checkButton.addEventListener("click", function clickHandler() {
    const sum = calculateSum(dateOfBirth.value);
    displayResult(sum, luckyNumber.value);
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
        outputBox.value = "Lucky"
    } else {
        outputBox.value = "Not Lucky"
    }
}