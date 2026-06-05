let display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculateResult() {
    try {
        let result = Function("return " + display.value)();
        display.value = Number.isFinite(result) ? result : "Error";
    } catch {
        display.value = "Error";
    }
}