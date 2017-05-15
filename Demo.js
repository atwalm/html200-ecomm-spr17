function myFunction() {
var x=document.getElementById("myemail").value;
if (x != null) {
/*  var y=  document.getElementById("demo").innerHTML ="Hello ";*/

    document.getElementById("demo");
     console.log("Thanks for signing up for our mailing list," +x);

      /*alert("Thanks for signing up for our mailing list" +x);*/
        }
}





/*var arr=["car","apple"];
var i;
    function add() {

      for(i=0;i<2;i++)
      {
        arr.push(prompt("enter the value" +(i+1)));
      }
      alert("full array :" +arr.join(" ,"));
      console.log("full array :" +arr.join(" ,"));
    }*/

  /*  function remove()
    {
      arr.pop()
    }
*/

var cart=[]

        function handleClick()
        {
          console.log(event.target);
        }

        function add()
        {
          event.preventDefault();
          //var addToCart=document.addCart.addToCart.value;
          var val= prompt("Enter the ProductName:");
          cart.push(val);
          //var addToCart=document.addCart
        //  cart.push(prompt("enter the value"));

         console.log("Value added : " + val + " to cart.");
         console.log("cart length :" +cart.length +" to cart.");
          //cart.push(prompt("enter the value");

          var cartnumber=document.getElementById("cartbox");
          cartnumber.value=cart.length;
          console.log("cartnumber :" +cart.length +" to cart.");

        }
        function remove()
        {
          event.preventDefault();
          var newval=prompt("Enter the ProductName:")
          cart.pop(newval);
          console.log("value removed :"+ newval + "to cart.");
          console.log("cart length :" +cart.length +" to cart.");

          var cartnumber=document.getElementById("cartbox");
          cartnumber.value=cart.length;
          console.log("cartnumber :" +cart.length +" to cart.");



        }
