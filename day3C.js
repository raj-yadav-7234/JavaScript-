function calculateBill(units) {

    if (units<=100) {
        return units*5;
    }
    else if (units<=200) {
        return units*7;
    }
    else {
        return units*10;
    }
}

let bill = calculateBill(80);
bill = calculateBill(150);
bill= calculateBill(250);
console.log(`Bill: ₹${bill}`);
