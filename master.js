let btn = document.querySelector("button");
let randomQuets =document.querySelector("#random-quote");
let body = document.querySelector("body");
let container = document.querySelector(".container");

const quotes = [
  "  “Be yourself; everyone else is already taken.” ― Oscar Wilde",
"“So many books, so little time.” ― Frank Zappa",
"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” ― Albert Einstein",
"“A room without books is like a body without a soul.” ― Marcus Tullius Cicero",
"“You only live once, but if you do it right, once is enough.” ― Mae West",
"“Be the change that you wish to see in the world.” ― Mahatma Gandhi",
"“Be the change that you wish to see in the world.”― Mahatma Gandhi",
"“Be the change that you wish to see in the world.”― Mahatma Gandhi",
"“A friend is someone who knows all about you and still loves you.” ― Elbert Hubbard",
"“To live is the rarest thing in the world. Most people exist, that is all.”― Oscar Wilde"
]

document.body.style.backgroundImage = 'url("https://cdn.pixabay.com/photo/2021/09/13/21/06/floral-background-6622475_1280.png")';
container.style.border = "3px solid #FFB82B";

btn.onclick=function  generateRandomQuote(){
    let random = Math.floor(Math.random()*quotes.length);
    randomQuets.innerHTML= quotes[random];
      console.log(randomQuets)  ;
}
 generateRandomQuote();