/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let inputBtn = document.getElementById("input-btn")
let convBtn = document.getElementById("conv-btn")
let literBtn = document.getElementById("liter-btn")
let gallonBtn = document.getElementById("gallon-btn")
let poundBtn = document.getElementById("pound-btn")


const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

convBtn.addEventListener("click", function(){
    let baseValue = inputBtn.value 
    literBtn.textContent = `${baseValue} meter = ${baseValue * meterToFeet} feet` 
    gallonBtn.textContent = `${baseValue} liter = ${baseValue * literToGallon} gallon` 
    poundBtn.textContent = `${baseValue} kilo = ${baseValue * kiloToPound} pound` 
    
})