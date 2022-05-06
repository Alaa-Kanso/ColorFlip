const colors = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const color = document.querySelector(".color");
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    let randmnb = "#";
    for(let i=0; i<6; i++){
        randmnb+= colors[getnb()];
    }

    color.textContent = randmnb;
    document.body.style.background = randmnb;
});

function getnb(){
    return Math.floor(Math.random()*colors.length);
}