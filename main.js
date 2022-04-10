
let input = window.prompt("Insert Number");
let length = document.getElementById('length');
let volume = document.getElementById('volume');
let mass = document.getElementById('mass');
let displayNumber = document.getElementById('divNumber')
let inputNumber = input;

function lengthInMetersFeet() {
    let perFoot = parseFloat(inputNumber * 3.28).toFixed(3);
    let perMeter = parseFloat(inputNumber * .304).toFixed(3);
    length.textContent = input + " Meters = " 
    + perFoot + " feet" + " | " + input + " " 
    + "Feet = " + perMeter + " meters";
}
lengthInMetersFeet();

function volumeInLitersGallons() {
    let perGallon = parseFloat(inputNumber * 0.264).toFixed(3);
    let perLiter = parseFloat(inputNumber * 3.785).toFixed(3);
    volume.textContent = input + " Liters = " 
    + perGallon + " gallons" + " | " + input + " " 
    + "Gallonsb = " + perLiter + " liters";
}
volumeInLitersGallons();

function massKilogramsPounds() {
    let perPound = parseFloat(inputNumber * 2.204).toFixed(3);
    let perKilo = parseFloat(inputNumber * .453).toFixed(3);
    mass.textContent = input + " Kilo = " 
    + perPound + " pounds" + " | " + input + " " 
    + "Pounds = " + perKilo + " kilo";
}
massKilogramsPounds();

displayNumber.innerHTML = input
