document.getElementById("calculate-btn").addEventListener("click", function () {
    let incomeField = document.getElementById("income-input")
    let incomeValue = incomeField.value;

    let foodField = document.getElementById("food-input").value
    let rentField = document.getElementById("rent-input").value
    let clothesField = document.getElementById("clothes-input").value

    if (isNaN(incomeValue) || isNaN(foodField) || isNaN(rentField) || isNaN(clothesField)) {
        let failError = document.getElementById("notify-fail")
        failError.style.display = "block"
        return
    }
    if (incomeValue < 0 || foodField < 0 || rentField < 0 || clothesField < 0) {
        let fialError = document.getElementById("notify-fail")
        fialError.style.display = "block"
        return
    }
    else {
        let inputExpensesField = parseInt(foodField) + parseInt(rentField) + parseInt(clothesField)
        if (inputExpensesField > incomeValue) {
            let failErrorTwo = document.getElementById("notify-fail-2")
            failErrorTwo.style.display = "block"
            return
        }
        let totalExpensesField = document.getElementById("total-expenses")
        totalExpensesField.innerText = inputExpensesField

        let balanceField = document.getElementById("balance")
        balanceField.innerText = parseInt(incomeValue) - inputExpensesField
        saveMoney()
    }
})

function saveMoney() {
    document.getElementById("save-btn").addEventListener("click", function () {
        let saveInput = document.getElementById("save-input")
        let saveValue = saveInput.value

        let incomeField = document.getElementById("income-input")
        let incomeValue = incomeField.value;
        let savePercentage = (incomeValue * saveValue) / 100
        document.getElementById("saving-amount").innerText = savePercentage
        remainingMoney()
    })
}
function remainingMoney() {
    let incomeField = document.getElementById("income-input")
    let incomeValue = incomeField.value;

    let foodField = document.getElementById("food-input").value
    let rentField = document.getElementById("rent-input").value
    let clothesField = document.getElementById("clothes-input").value
    let inputExpensesField = parseInt(foodField) + parseInt(rentField) + parseInt(clothesField)

    let balanceField = parseInt(incomeValue) - inputExpensesField
    let saveInput = document.getElementById("save-input")
    let saveValue = saveInput.value
    let savePercentage = (incomeValue * saveValue) / 100
    if (balanceField < savePercentage) {
        let failErrorTwo = document.getElementById("notify-fail-2")
        failErrorTwo.style.display = "block"
        return
    }
    else {
        let remainingBalance = document.getElementById("remaining-balance")
        remainingBalance.innerText = balanceField - savePercentage

    }
}