
var randomCoin = Math.floor(Math.random() * 2) + 1;

var randomCoinImage = "coin" + randomCoin+ ".jpg";

var randomImageSource = "img/" + randomCoinImage ;

var toss = document.querySelectorAll("img")[0];

toss.setAttribute("src", randomImageSource);

//var value = document.querySelector("form");
//var value = {"head": 1,"tail":2};
//if(randomCoin === document.querySelector("form")["head"])
//{
  document.querySelector("h1").innerHTML = "Make your Decision......";
//}
//else if (randomCoin === value.tail) {
  //document.querySelector("h1").innerHTML = "You won the toss!";
//}
//else {
  //document.querySelector("h1").innerHTML = "loos";
//}
