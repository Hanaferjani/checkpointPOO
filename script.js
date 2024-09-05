//1.Create an object class for the product to store the properties for id, name and price of the product.
class product {
  constructor(name, size, color, price, image) {
    this.id = Math.floor(Math.random() * 1000);
    this.name = name;
    this.size = size;
    this.color = color;
    this.price = price;
    this.image = image;
  }
}
//2. Create an object class for the shopping cart item to store the properties for product and its quantity.
class ShoppingCartItem extends product {
  constructor(name, size, color, price, image, quantity) {
    super(name, size, color, price, image);
    this.quantity = quantity;
  }
  //3. To the preceding object class, add the method to calculate the total price of the item.
  calculatePrice() {
    return this.price * this.quantity;
  }
  decrementQty() {
    this.quantity--;
  }
  incrementQty() {
    this.quantity++;
  }
}
//4.Create another object class for the shopping cart which contains an array of ShoppingCartItem instances.
//5.To the shopping cart object, add the following methods.
//a.Add the methods to:
//b.Get the total of items inside the cart
//c.Add items
//d.Remove items
//e.Display cart items

class ShoppingCart {
  constructor() {
    this.cart = [];
  }
  getTotalItems() {
    return this.cart.length;
  }
  addItem(item) {
    this.cart.push(item);
  }
  removeItem(id) {
    this.cart = this.cart.filter((el) => el.id !== id);
  }
  displayCart() {
    const cartItems = document.querySelector(".cart-items");
    const items = this.cart.map(
      (item) => `
        <div class="single-item card grid-3">
          <div class="col">
            <img
            src=${item.image}
            alt=""  
            />
          </div>
          <div class="col">
            <h4>${item.name}</h4>
            <span><strong>Size: </strong>${item.size}</span>
            <span><strong>Colour: </strong>${item.color}</span>
          </div>
          <div class="col">
            <h4><span class="price">${item.price}</span> €</h4>
            <div>
              <div class="p-y">
                <i class="fa-solid fa-square-minus fa-xl"></i>
                <span class="quantity">${item.quantity}</span>
                <i class="fa-solid fa-square-plus fa-xl"></i>
              </div>
              <div class="p-y">
                <i class="fa-solid fa-thumbs-up fa-xl"></i>
                <i class="fa-solid fa-trash fa-xl"></i>
              </div>
            </div>
          </div>
        </div>
        `
    );
    cartItems.innerHTML = items.join("\n");
  }
}
const myShoppingCart=new ShoppingCart()
myShoppingCart.addItem(new ShoppingCartItem("Unisex Hoodie","M","light heather grey","40.00","https://image.spreadshirtmedia.net/image-server/v1/products/a47dd951-2359-4a1a-8dc3-c7ab49141177,width=300,height=300,appearanceId=577.png","4"))
myShoppingCart.addItem(new ShoppingCartItem("Unisex Hoodie","M","light heather grey","40.00","https://image.spreadshirtmedia.net/image-server/v1/products/a47dd951-2359-4a1a-8dc3-c7ab49141177,width=300,height=300,appearanceId=577.png","2"))
myShoppingCart.addItem(new ShoppingCartItem("Unisex Hoodie","M","light heather grey","40.00","https://image.spreadshirtmedia.net/image-server/v1/products/a47dd951-2359-4a1a-8dc3-c7ab49141177,width=300,height=300,appearanceId=577.png","1"))
console.log(myShoppingCart.cart)

//6.
