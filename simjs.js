const colors  = ["Green" , "Red" , "#F2567B" , "rgba(122, 33, 100)", "#EE6213", "Lime"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
    //get random nb btw 0 and 5
    const randomnb = getnb();
    document.body.style.backgroundColor = colors[randomnb];
    color.textContent = colors[randomnb];
});

function getnb(){
    return Math.floor(Math.random() * colors.length);
};