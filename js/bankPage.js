function getValue(inputBox, presentSituation, isDeposit) {

    const depositFiled = document.getElementById(inputBox);                      /* Call deposit Input Box */
    const depositBox = depositFiled.value;                                       /* Get deposit Input Value from Input Box */
    const presentBalanceText = document.getElementById("present-balance");       /* Call Present Balance Box */
    const presentBalance = parseFloat(presentBalanceText.innerText);             /* Convert Present Balance Into a float from text */
    if (isDeposit == true) {
        if (depositBox > 0) {
            const presentDepositText = document.getElementById(presentSituation);/* Call peresent Deposit Box */
            const presentDeposit = parseFloat(presentDepositText.innerText)      /* Convert Text into float Number */
            let totalDeposit = presentDeposit + parseFloat(depositBox)           /* Add Total deposit ammount in Deposit Box */
            presentDepositText.innerText = totalDeposit;                         /* Convert Total deposit into a Text */
        }
    }
    else if (depositBox <= presentBalance && depositBox > 0) {
        const presentDepositText = document.getElementById(presentSituation);    /* Call peresent Deposit Box */
        const presentDeposit = parseFloat(presentDepositText.innerText)          /* Convert Text into float Number */
        let totalDeposit = presentDeposit + parseFloat(depositBox)               /* Add Total deposit ammount in Deposit Box */
        presentDepositText.innerText = totalDeposit;                             /* Convert Total deposit into a Text */
    }
}

function totalBalance(inputBox, isAdd) {
    const depositFiled = document.getElementById(inputBox);
    const depositBox = depositFiled.value;                                       /* Get deposit Input Value from Input Box */
    const presentBalanceText = document.getElementById("present-balance");       /* Call Present Balance Box */
    const presentBalance = parseFloat(presentBalanceText.innerText);             /* Convert Present Balance Into a float from text */
    if (isAdd == true && depositBox > 0) {
        let totalBalance = presentBalance + parseFloat(depositBox)               /* Create Total Of balance */
        presentBalanceText.innerText = totalBalance;                             /* Add as a text */
    }
    else if (isAdd == false && depositBox > 0) {
        if (depositBox <= presentBalance) {
            let totalBalance = presentBalance - parseFloat(depositBox)           /* Create Total Of balance */
            presentBalanceText.innerText = totalBalance;                         /* Add as a text */
        }
    }
    depositFiled.value = '';                                                     /* Clear Deposit input Box */
}

document.getElementById("deposit-btn").addEventListener("click", function () {
    getValue("deposit-box", "present-deposit", true)
    totalBalance("deposit-box", true)
})

document.getElementById("withdraw-btn").addEventListener("click", function () {
    getValue("withdraw-box", "present-withdraw", false)
    totalBalance("withdraw-box", false)
})