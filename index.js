let user = prompt("What's your name?");
alert("Hello " + user + ",thank you for visiting our site. Be sure to check out our tasty options we have available at Two Vets Tacos!");

let answer = prompt("Answer this correctly and you'll get a coupon code for 20% off your next purchase. What are tortillas made of?");
if(answer === "Corn"){
  alert("That's correct! Give this code at checkout to get 20% off your next meal. BFTQ5")
}
if(answer === "Maiz"){
  alert("That's correct! Give this code at checkout to get 20% off your next meal. BFTQ5")
}
else if(answer!=="Corn"||answer!=="Maiz"){
  alert("Good guess, but not quite. We still love you. Here's a coupon code for 10% off your next meal instead. Use this code at checkout BFFTACO5.")
}


let response = prompt("Do you like tacos? Yes or No?");
if(response === "Yes"){
  alert("Great! You'll love our tacos. Drop by and be ready to have the best tacos you've ever had West of the Mississippi.")
}
if(response === "Si"){
    alert("Great! You'll love our tacos. Drop by and be ready to have the best tacos you've ever had West of the Mississippi.")
}
if(response === "No"){
    alert("Don't like tacos? That's alright. Try our burritos instead. It'll be the best decision you've made today.")
  }

let response1 = prompt("Do you like burritos? Yes or No");

if(response1 === "Yes"){
    alert("Great! You'll love our burritos. Drop by and be ready to have the best burrito you've ever had West of the Mississippi.")
}
if(response1 === "Si"){
    alert("Great! You'll love our burritos. Drop by and be ready to have the best burrito you've ever had West of the Mississipi.")
}

if(response1 === "No"){
    alert("Don't like burritos? That's alright. Try our tacos instead. It'll be the best decision you've made today.")
}