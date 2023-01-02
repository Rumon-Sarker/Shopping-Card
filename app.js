function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;

    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 1) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
    //calculateTotal
    calculateTotal();
}

function getInputValue(product) {
    const productIput = document.getElementById(product + '-number');
    const productNumber = parseInt(productIput.value);
    return productNumber;
}

function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 120000;
    const caseTotal = getInputValue('case') * 50;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;

    //update on the html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;

}

// phone increse decrese events
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 120000, true);
})
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 120000, false);
})



// handle case increase decrease events

document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', 50, true);
})

document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', 50, false)
    // 
})