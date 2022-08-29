/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el")
const firstResult = document.getElementById("first-result")
const secondResult = document.getElementById("second-result")
const thirdResult = document.getElementById("third-result")
const convert = document.getElementById("convert")


convert.addEventListener("click", function(e){
   
    const input = inputEl.value    
    
    firstResult.textContent = `
    ${input} meters = ${Number(input * 3.281).toFixed(3)} feet | ${input} feet = ${Number(input / 3.281).toFixed(3)} meters`
    
    secondResult.textContent = `
    ${input} liters = ${Number(input * 0.264).toFixed(3)} gallons | ${input} gallons = ${Number(input / 0.264).toFixed(3)} litres`
    
    thirdResult.textContent = `
    ${input} kilos = ${Number(input * 2.204).toFixed(3)} pounds | ${input} pounds = ${Number(input / 2.204).toFixed(3)} kilos`
      
})