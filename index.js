var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
cart.push( {[item]:Math.floor(Math.random()*100)})
console.log(`${item} has been added to your cart.`)
return cart
}



function viewCart() {
  // write your code here
  if(cart.length === 0) {
   console.log("Your shopping cart is empty.")
    }

    else {

     var itemsString = ""
       for (var i = 0; i < cart.length; i++) {
         var itemName = Object.keys(cart[i])[0];
         var itemPrice = cart[i][itemName];
         var isLastItem = i+1 == cart.length;

         if(cart.length > 1 && isLastItem) {
           itemName = 'and ' + itemName
         }

         itemsString += ` ${itemName} at $${itemPrice}`;

         if (cart.length > 2 && i+1 < cart.length) {
           itemsString += ','
         }
       }
       console.log(`In your cart, you have${itemsString}.`);
     }
   }

   function log(msg) {
     console.log(msg);
     console.warn(msg);
    }


function total() {
  // write your code here
  var total = 0;
     for (var i = 0; i < cart.length; i++) {
        var obj = cart[i];
        var key = Object.keys(cart[i])[0];
        var value = obj[key];
        total += value;
      }
      return total;
     }



function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
