function calculateDiscountPrice(price, discountPercentage) {
    const discount = (price * discountPercentage) / 100;
    const priceWithDiscount = price - discount;
    return priceWithDiscount;
}

const originalPrice = 235;
const discountPercentage = 20;
const finalPrice = calculateDiscountPrice(originalPrice, discountPercentage);

console.log(`Original price: ${originalPrice}`);
console.log(`Discount: ${discountPercentage}%`);
console.log(`Price with discount: ${finalPrice}`);