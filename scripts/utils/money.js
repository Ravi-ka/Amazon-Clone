export function formatCurrency(priceInCents){
    let finalPrice = (priceInCents/100).toFixed(2)
    return finalPrice;
}