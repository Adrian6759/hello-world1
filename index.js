
function user1() {
  let user = prompt("What's your name?");
  while (user == "") {
    user = prompt("Try Again. We accept all names.");
  }
  document.write("Hello " + user + ", thank you for visiting our site. Be sure to check out our tasty options we have available at Two Vets Tacos! ");


  let answer = prompt("Answer this correctly and you'll get a coupon code for 20% off your next purchase. What are tortillas made of? Please answer in lowercase!");

  if (answer == "corn") {
    alert("That's correct! Give this code at checkout to get 20% off your next meal. BFTQ5");
  }
  else {
    alert("Good guess, but not quite. We still love you. Here's a coupon code for 10% off your next meal instead. Use this code at checkout BFFTACO5.");
  }
}

function user2() {
  let response = prompt("Do you like tacos? Yes or No? Please answer in lowercase!");
  if (response == "yes") {
    document.write("If you like tacos, you'll love our tacos. Drop by and be ready to have the best tacos you've ever had West of the Mississippi. ");
  }
  if (response == "si") {
    document.write("If you like tacos, you'll love our tacos. Drop by and be ready to have the best tacos you've ever had West of the Mississippi. ");
  }
  if (response == "no") {
    document.write("Don't like tacos? That's alright. Try our burritos instead. It'll be the best decision you've made today. ");
  }
}

function user3() {
  let response1 = prompt("Do you like burritos? Yes or No? Please answer in lowercase!");

  if (response1 == "yes") {
    document.write("If you like burritos, you'll love our burritos. Drop by and be ready to have the best burrito you've ever had West of the Mississippi.");
  }
  if (response1 == "si") {
    dcomument.write("If you like burritos, you'll love our burritos. Drop by and be ready to have the best burrito you've ever had West of the Mississipi.");
  }

  if (response1 == "no") {
    document.write("Don't like burritos? That's alright. Try our tacos instead. It'll be the best decision you've made today. Don't like either one? Thats impossible! Come on down and give em a try. You won't regret it.");
  }
}

function tacos() {
  let howmany = prompt("How many tacos will you be crushing the next time you drop by Two Vets Tacos?");
  for (let i = 0; i < howmany; i++) {
    document.write("<img class='taco4' src='taco1.jpg' alt='one taco'/>")
  }
}