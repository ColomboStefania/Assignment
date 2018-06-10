

class ShoppingCart {
  constructor() {
    this.items = []
  }
  //each argument will populate the value for the corresponding key of the object
  addItem (itemName, quantity, price) {
    return this.items.push({name :itemName ,quantity: quantity, pricePerUnit: price})
  }
  //it will return the list of the added items
  getItems () {
    return this.items
  }
  //clear out all the array in once
  clear () {
    while (this.items.length) { this.items.pop(); }
      return this.items
  }
  //create a new cart(same constructor of ShoppingCart & clone the items)
  clone () {
    var clonedCart = new ShoppingCart()
    clonedCart.items = JSON.parse(JSON.stringify(this.items))
    return clonedCart
  }
}




module.exports = ShoppingCart
