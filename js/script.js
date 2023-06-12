let toggle = document.getElementById("toggle");
let round = document.getElementById("round");
let prices = document.getElementsByClassName("pr");

let dtoggle = document.getElementById("dtoggle");
let dround = document.getElementById("dround");

let darks = document.getElementsByClassName("d");

toggle.addEventListener("click", (e) => {
    round.classList.toggle("true")
    for(let i = 0; i < prices.length; i++){
        if(round.classList.contains("true")){
            prices[i].innerText = parseFloat(prices[i].innerText) + 500;
        }else{
            prices[i].innerText = parseFloat(prices[i].innerText) - 500;
        }
    }
    
})


dtoggle.addEventListener("click", (e) => {
    dround.classList.toggle("true")
    for(let i = 0; i < darks.length; i++){
        darks[i].classList.toggle("dark")
    }
})
