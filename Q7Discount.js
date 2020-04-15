//Q.7.A shopkeeper wants to discount its prices due to the holiday season.
//Write a typescript function which will take all the prices and provide a discount of 50% on each price.
function discount(originalPrice) {
    var afterDiscount = originalPrice - (originalPrice * 50 / 100);
    console.log('Total Price is : ' + originalPrice + ', price after 50% discount : ' + afterDiscount);
}
discount(20000);
