// get value 
function getValue(need) {
    let inputField = document.getElementById(need + "-input").value
    return inputField;
}
// calculate button 
document.getElementById("calculate-btn").addEventListener("click", function () {
    let incomeField = getValue("income")
    let foodField = getValue("food")
    let rentField = getValue("rent")
    let clothesField = getValue("clothes")
    if (isNaN(incomeField) || isNaN(foodField) || isNaN(rentField) || isNaN(clothesField)) {
        let failError = document.getElementById("notify-fail")
        failError.style.display = "block"
        return
    }
    if (incomeField < 0 || foodField < 0 || rentField < 0 || clothesField < 0) {
        let fialError = document.getElementById("notify-fail")
        fialError.style.display = "block"
        return
    }
    else {
        let inputExpensesField = parseInt(foodField) + parseInt(rentField) + parseInt(clothesField)
        if (inputExpensesField > incomeField) {
            let failErrorTwo = document.getElementById("notify-fail-2")
            failErrorTwo.style.display = "block"
            return
        }
        let totalExpensesField = document.getElementById("total-expenses")
        totalExpensesField.innerText = inputExpensesField

        let balanceField = document.getElementById("balance")
        balanceField.innerText = parseInt(incomeField) - inputExpensesField
        saveMoney()
    }
})
// save  button 
function saveMoney() {
    document.getElementById("save-btn").addEventListener("click", function () {
        let incomeField = getValue("income")
        let foodField = getValue("food")
        let rentField = getValue("rent")
        let clothesField = getValue("clothes")

        let saveInput = document.getElementById("save-input")
        let saveValue = saveInput.value

        let savePercentage = (incomeField * saveValue) / 100
        let inputExpensesField = parseInt(foodField) + parseInt(rentField) + parseInt(clothesField)

        let balanceField = parseInt(incomeField) - inputExpensesField
        if (savePercentage < balanceField) {
            document.getElementById("saving-amount").innerText = savePercentage
        }
        remainingMoney()
    })
}
// remaining balance 
function remainingMoney() {
    let incomeField = getValue("income")
    let foodField = getValue("food")
    let rentField = getValue("rent")
    let clothesField = getValue("clothes")

    let inputExpensesField = parseInt(foodField) + parseInt(rentField) + parseInt(clothesField)

    let balanceField = parseInt(incomeField) - inputExpensesField
    let saveInput = document.getElementById("save-input")
    let saveValue = saveInput.value
    let savePercentage = (incomeField * saveValue) / 100
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