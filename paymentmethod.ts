type paymentMethod = "UPI" | "paypal" | "creditcard";

function makepayment(paymentName: paymentMethod) {
    console.log(paymentName);
}

makepayment("creditcard");

