document.getElementById("calculate-btn").addEventListener("click", function () {
    let incomeField = document.getElementById("income-input")
    let incomeValue = incomeField.value;
    let foodField = document.getElementById("food-input").value
    let rentField = document.getElementById("rent-input").value
    let clothesField = document.getElementById("clothes-input").value
    let inputExpensesField = parseInt(foodField) + parseInt(rentField) + parseInt(clothesField)

    let totalExpensesField = document.getElementById("total-expenses")
    totalExpensesField.innerText = inputExpensesField

    let balanceField = document.getElementById("balance")
    balanceField.innerText = parseInt(incomeValue) - inputExpensesField

})