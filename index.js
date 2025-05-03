
function calculateDiscountedPrice (price, discountPrercentage){
    const discount = (price * discountPrercentage) / 100
    const priceWithDiscount = price - discount

    return priceWithDiscount
}

const originalPrice = 100
const discountPrercentage = 20
const finalPrice = calculateDiscountedPrice(originalPrice, discountPrercentage)

console.log(finalPrice)
console.log(typeof calculateDiscountedPrice)

