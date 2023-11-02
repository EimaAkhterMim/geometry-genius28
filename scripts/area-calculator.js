function calculateTriangleArea() {
    //    get triangle base 
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);
    console.log(base)

    // get triangle height value 
    const heightField = document.getElementById('triangle-height');
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText);
    console.log(height);

// calculate area 
    const area = 0.5 * base * height;
    console.log(area);

    // show triangle area
    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;
}

function calculateRectangleArea (){
    // get rectangle width 
   const widthField = document.getElementById('rectangle-width');
   const widthValueText = widthField.value;
   const width = parseFloat(widthValueText);
   console.log(width);

//    get rectangle length 
const lengthField = document.getElementById('rectangle-length');
const lengthValueText = lengthField.value;
const length = parseFloat (lengthValueText);
console.log(length);

// calculate rectangle area 
const area = width *length;
console.log(area);

// show rectangle area 
const areaSpan = document.getElementById('rectangle-area');
areaSpan.innerText = area;


}

// reusable function -- reduce duplicate code 
function calculateParallelogramArea (){
   const base =getInputValue('parallelogram-base');
   console.log(base);
   const height = getInputValue('parallelogram-height');
   console.log(height);

   const area = base * height;
   setElementInnerText('parallelogram-area',area);
}

function calculateEllipseArea(){
    const majorRadius = getInputValue('ellipse-major-radius');
    console.log(majorRadius)
    const minorRadius = getInputValue('ellipse-minor-radius');
    console.log(minorRadius);
    const area = 3.14 * majorRadius * minorRadius;
    setElementInnerText('ellipse-area',area);
}

// reusable get input field value in number 
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat (inputValueText);
    return value;
}

// reusable set input field
function setElementInnerText(elementId,area){
    const element =document.getElementById(elementId);
    element.innerText = area;
}