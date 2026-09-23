function calculateDiscount(price) {
    if (price>=5000) {
        return price-price*20/100;
    }
    else if (price>=2000) {
        return price-price*10/100;
    }
    else if (price>=1000) {
        return price-price*5/100;
    }
    if (price>=500) {
        return price;
    }
}
console.log(calculateDiscount(6000));
console.log(calculateDiscount(3000));
console.log(calculateDiscount(1500));
console.log(calculateDiscount(500));