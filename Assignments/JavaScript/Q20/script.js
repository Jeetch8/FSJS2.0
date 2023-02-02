const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

// Add "Meat" in the beginning of your shopping cart if it has not been alerdy added
if (!shoppingCart.includes("Meat")) {
  shoppingCart.unshift("Meat");
}

// add Sugar at the end of your shopping cart if it has not been already added
if (!shoppingCart.includes("Sugar")) {
  shoppingCart.push("Sugar");
}

// remove 'Honey'
if (!shoppingCart.includes("Honry")) {
  shoppingCart.splice(shoppingCart.indexOf("Honey"), 1);
}

// modify Tea to 'Green Tea'
shoppingCart[shoppingCart.indexOf("Tea")] = "Green Tea";
