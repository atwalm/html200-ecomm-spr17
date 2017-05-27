function myFunction() {
var x=document.getElementById("myemail").value;
if (x != null) {
/*  var y=  document.getElementById("demo").innerHTML ="Hello ";*/

    document.getElementById("demo");
     console.log("Thanks for signing up for our mailing list," +x);

      /*alert("Thanks for signing up for our mailing list" +x);*/
        }
}


     function handleClick()
        {
          console.log("You have " +  + " items in your cart.");

          console.log(event.target);
        }
        // global array to hold cart items
var cart = [];

// [Add to Cart] button.  Wireup click event.  There are better ways (with jquery), but we'll go for the simplest.
var addToCartButtons = document.getElementsByClassName("add");
for (var i = 0; i < addToCartButtons.length; i++) {
  addToCartButtons[i].addEventListener("click", addToCart);
}

// get item details and add them to cart
function addToCart() {

  // HOW THIS WORKS
  // target -> the button that was clicked
  // parentElement -> the parent of the button which is a div tag
  // .getElementsByClassName('name') -> find the name elements (returns array)
  // [0] refer to the one and only name in the array.
  //   There are many names on the page, but only one name within the item's div tag
  // .innerHTML gets the text

  // Get name and price (this technique was not shown in class)
  var name = event.target.parentElement.getElementsByClassName("name")[0].innerHTML;
  var price = event.target.parentElement.getElementsByClassName("price")[0].innerHTML;

  // find index of the item in the array matching on name (this was not shown in class)
  // Why can't we use cart.indexOf()? Remember this is an array of objects, not an array of strings.  So we must use something different.
  var index = cart.findIndex(x => x.name == name);


    // if item is not in array, add it
  if (index == -1) {
    // push an object into the array
    cart.push({ 'name':name, 'price':price });

    // change button text
    event.target.innerHTML = 'Remove from Cart';
  } else {
    // otherwise remove item from array
    cart.splice(index, 1);

    // change button text
    event.target.innerHTML = 'Add to Cart';
  } // end else

  refreshBadge();
} // end function

// Cart button
var btn = document.getElementById("btnViewCart");
btn.addEventListener("click", showcart);

// show cart contents in an alert
function showcart() {
  var cartHtml = "";
  for (var i in cart) {
    cartHtml += "Name: " + cart[i].name + "\n";
    cartHtml += "Price:" + cart[i].price + "\n";
  }

  alert(cartHtml);
}


// show count next to cart
function refreshBadge() {
  /* show count in badge */
  var badge = document.getElementById('badge');
  if (cart) {
    badge.innerHTML = cart.length;
  }
}









/*    function add()

        {
          event.preventDefault();


          //var addToCart=document.addCart.addToCart.value;
         var name=document.getElementsByClassName("name");
          var description= document.getElementsByClassName("description");
         var price= document.getElementsByClassName("price");

         cart.push({
    name: name,
    description: description,
    price: price});
 alert("value added");
  console.log(cart);
  refreshBadge();
}*/

/*function refreshBadge() {
  // show count in badge
  var cartnumber=document.getElementById("cartbox");
  cartnumber.value=cart.length;
  console.log("cartnumber :" +cart.length +" to cart.");

}*/




      /* var val= prompt("Enter the ProductName:");
         cart.push(val);
          var addToCart=document.addCart
         cart.push(prompt("enter the value"));
        alert("value added");
        console.log("Name"+name);

        console.log("Value added : " + val + " to cart.");
         console.log("cart length :" +cart.length +" to cart.");
          cart.push(prompt("enter the value");

          var cartnumber=document.getElementById("cartbox");
          cartnumber.value=cart.length;
          console.log("cartnumber :" +cart.length +" to cart.");

        }*/
      /*  function remove()
        {
          event.preventDefault();
          var newval=prompt("Enter the ProductName:")
          cart.pop(newval);
          console.log("value removed :"+ newval + "to cart.");
          console.log("cart length :" +cart.length +" to cart.");

          var cartnumber=document.getElementById("cartbox");
          cartnumber.value=cart.length;
          console.log("cartnumber :" +cart.length +" to cart.");
}*/

    /*    function remove(name) {
	// go through items in cart
  for (var i in cart) {
	// match on name (change this if you are using id)
    if (cart[i].name == name) {
		// remove the item from array
      cart.splice(i, 1);
		// bail out of the loop.  only remove one item with matching name
		break;
    }
  }
}*/
