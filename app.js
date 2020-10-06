const box = document.getElementById("box");
//control sources
const xTLSlider = document.getElementById("top-left");
const xTRSlider  = document.getElementById("top-right");
const xBRSlider = document.getElementById("bottom-right");
const xBLSlider = document.getElementById("bottom-left");
const yTLSlider = document.getElementById("top-left2");
const yTRSlider  = document.getElementById("top-right2");
const yBRSlider = document.getElementById("bottom-right2");
const yBLSlider = document.getElementById("bottom-left2");
//border radius values
const radiusX = document.getElementById("radius1");
const radiusY = document.getElementById("radius2");


function generateRadiusValues(){
    const x = radiusX.innerText.split(' ');
    const y = radiusY.innerText.split(' ');
    const result = x.concat(y);
    return result;
}
console.log(radiusX.innerText.split(' '));
console.log(radiusY.innerText.split(' '));