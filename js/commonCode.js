function getTextElementById(elementId) {
    const totalElement = document.getElementById(elementId);
    const currentTotalString = totalElement.innerText;
    const currentTotal = parseInt(currentTotalString);
    return currentTotal;
}

function setTextElementById(elementId,value){
    const currentSubTotal = document.getElementById(elementId,value);
    currentSubTotal.innerHTML = value;

}

function subTotalAmout(){
    const phonTotal= getTextElementById('phn-total-amount');
    const caseTotal = getTextElementById('case-total-amount');
    const subTotalAmount = phonTotal + caseTotal;
    setTextElementById('subtotal-amount',subTotalAmount);
    const texAmountString = (subTotalAmount * .1).toFixed(2);
    const texAmount = parseFloat(texAmountString);
    
    setTextElementById('tax-amount',texAmount);
    const finalTotalAmount = subTotalAmount +  texAmount;
    setTextElementById('finel-amount',finalTotalAmount)

}