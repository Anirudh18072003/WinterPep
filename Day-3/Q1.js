function CalculateDiscount(price, discount = 10) {
  console.log("Price after discount is:", price - (discount / 100) * price);
}

CalculateDiscount(250);
