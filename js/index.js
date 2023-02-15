
                          // phon.......

function updatePhnNumber(Correct) {
    const phoneButton = document.getElementById('phon-input');
    const phoneInputString = phoneButton.value;
    const phoneInputField = parseInt(phoneInputString);

    let newNumber;
    if (Correct === true) {
        newNumber = phoneInputField + 1;
    }
    else {
        newNumber = phoneInputField - 1;
    }
    phoneButton.value = newNumber;
    return newNumber;
}
function updateTotalPhnPrice(newNumber) {
    const afterTotalPrice = newNumber * 1219;
    const afterPhnTotalAmount = document.getElementById('phn-total-amount');
    afterPhnTotalAmount.innerText = afterTotalPrice;
    
}



document.getElementById("phn-button-plus").addEventListener('click', function () {
    const newNumber = updatePhnNumber(true);
    updateTotalPhnPrice(newNumber)
    subTotalAmout()
})
document.getElementById('phn-button-minus').addEventListener('click', function () {
    const newNumber = updatePhnNumber();
    updateTotalPhnPrice(newNumber)
    subTotalAmout()
})

                               // Case..... 

function updateCaseNumber(caseCorrect) {
    const caseButton = document.getElementById('case-input');
    const caseInputString = caseButton.value;
    const caseInputField = parseInt(caseInputString);

    let newNumberCase;
    if (caseCorrect === true) {
        newNumberCase = caseInputField + 1;
    }
    else {
        newNumberCase = caseInputField - 1;
    }
    caseButton.value = newNumberCase;
    return newNumberCase;
}
function updateTotalCasePrice(newNumberCase) {
    const caseTotalPrice = newNumberCase * 59;
    const caseTotalAmount = document.getElementById('case-total-amount');
    caseTotalAmount.innerText = caseTotalPrice;
}
document.getElementById('case-button-plus').addEventListener('click', function () {
    const newNumberCase = updateCaseNumber(true);
    updateTotalCasePrice(newNumberCase)
    subTotalAmout()
})
document.getElementById('case-button-minus').addEventListener('click', function () {
    const newNumberCase = updateCaseNumber()
    updateTotalCasePrice(newNumberCase);
    subTotalAmout()
})

