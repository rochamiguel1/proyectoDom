
const btnplayer1 = document.querySelector(".player1");
const btnplayer2 = document.querySelector(".player2");
const btnreset = document.querySelector(".reset");
const counter = document.querySelector(".counter");
const counter2 = document.querySelector(".counter2");
const pointMax = document.querySelector(".pointMax")  //etiqueta select

let valuecounter = 0;
let valuecounter2 = 0;
let valuepointmax = 3;
pointMax.addEventListener("change", (e) => {
    valuepointmax = e.target.value
    // console.log(e.target.value);
})
// if(valuemaxpoints que no supere el maximo de puntos seleccionado)
btnplayer1.addEventListener("click", function sumaCounter() {
    valuecounter++
    if (valuecounter >= valuepointmax) {
        counter.innerText = valuepointmax
        valuecounter = valuepointmax
    } else {
        counter.innerText = valuecounter
    }
});
btnplayer2.addEventListener("click", sumaCounter2);
function sumaCounter2() {
    valuecounter2++
    if (valuecounter2 >= valuepointmax) {
        counter2.innerText = valuepointmax
        valuecounter2 = valuepointmax
    } else {
        counter2.innerText = valuecounter2
    }
}
btnreset.addEventListener("click", () => {
    valuecounter = 0;
    valuecounter2 = 0;
    counter.innerText = valuecounter
    counter2.innerText = valuecounter2

})

