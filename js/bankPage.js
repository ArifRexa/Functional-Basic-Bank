function getValue(inputBox, presentSituation, isDeposit) {

    const inputField = document.getElementById(inputBox);                      /* Call deposit Input Box */
    const inputFieldValue = inputField.value;                                       /* Get deposit Input Value from Input Box */
    const presentBalanceText = document.getElementById("present-balance");       /* Call Present Balance Box */
    const presentBalance = parseFloat(presentBalanceText.innerText);             /* Convert Present Balance Into a float from text */
    if (isDeposit == true) {
        if (inputFieldValue > 0) {
            const presentTextOfBox = document.getElementById(presentSituation);/* Call peresent Deposit Box */
            const presentBox = parseFloat(presentTextOfBox.innerText)      /* Convert Text into float Number */
            let totalAmount = presentBox + parseFloat(inputFieldValue)           /* Add Total deposit ammount in Deposit Box */
            presentTextOfBox.innerText = totalAmount;                         /* Convert Total deposit into a Text */
        }
    }
    else if (inputFieldValue <= presentBalance && inputFieldValue > 0) {
        const presentTextOfBox = document.getElementById(presentSituation);    /* Call peresent Deposit Box */
        const presentBox = parseFloat(presentTextOfBox.innerText)          /* Convert Text into float Number */
        let totalAmount = presentBox + parseFloat(inputFieldValue)               /* Add Total deposit ammount in Deposit Box */
        presentTextOfBox.innerText = totalAmount;                             /* Convert Total deposit into a Text */
    }
}

function totalBalance(inputBox, isAdd) {
    const inputField = document.getElementById(inputBox);
    const inputFieldValue = inputField.value;                                       /* Get deposit Input Value from Input Box */
    const presentBalanceText = document.getElementById("present-balance");       /* Call Present Balance Box */
    const presentBalance = parseFloat(presentBalanceText.innerText);             /* Convert Present Balance Into a float from text */
    if (isAdd == true && inputFieldValue > 0) {
        let totalBalance = presentBalance + parseFloat(inputFieldValue)               /* Create Total Of balance */
        presentBalanceText.innerText = totalBalance;                             /* Add as a text */
    }
    else if (isAdd == false && inputFieldValue > 0) {
        if (inputFieldValue <= presentBalance) {
            let totalBalance = presentBalance - parseFloat(inputFieldValue)           /* Create Total Of balance */
            presentBalanceText.innerText = totalBalance;                         /* Add as a text */
        }
    }
    inputField.value = '';                                                     /* Clear Deposit input Box */
}

document.getElementById("deposit-btn").addEventListener("click", function () {
    getValue("deposit-box", "present-deposit", true)
    totalBalance("deposit-box", true)
})

document.getElementById("withdraw-btn").addEventListener("click", function () {
    getValue("withdraw-box", "present-withdraw", false)
    totalBalance("withdraw-box", false)
})