const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")
const result = document.getElementById("result")

const plus = e => {
    num1Value = Number(num1.value)
    num2Value = Number(num2.value)
    resultValue = num1Value + num2Value
    result.textContent = resultValue
}
const minus = () => {
    num1Value = Number(num1.value)
    num2Value = Number(num2.value)
    resultValue = num1Value - num2Value
    result.textContent = resultValue
}
const multiply = () => {
    num1Value = Number(num1.value)
    num2Value = Number(num2.value)
    resultValue = num1Value * num2Value
    result.textContent = resultValue

}
const divide = () => {
    const num1Value = Number(num1.value)
    const num2Value = Number(num2.value)
    if (num2Value !== 0) {
        const resultValue = num1Value / num2Value
        result.textContent = resultValue
    } else {
        result.textContent = "Невозможно делить на ноль"
    }
}

const plusBtn = document.getElementById("plus")
plusBtn.addEventListener("click", plus)

const minusBtn = document.getElementById("minus")
minusBtn.addEventListener("click", minus)

const multiplyBtn = document.getElementById("multiply")
multiplyBtn.addEventListener("click", multiply)

const divideBtn = document.getElementById("divide")
divideBtn.addEventListener("click", divide)
