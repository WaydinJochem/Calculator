const inputValue = document.querySelector("#test");
function nomb(number) {
    inputValue.value = inputValue.value + number;
}
function clearValue() {
    inputValue.value = "";
}
function deleteValue() {
    inputValue.value = inputValue.value.slice(0, -1);
}

function calculate() {
    let x = inputValue.value;
    let result = eval(x);
    inputValue.value = result;
}