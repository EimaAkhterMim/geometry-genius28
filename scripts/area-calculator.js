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
    addToCalculationEntry('Triangle',area);
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

// validate input field length
if(isNaN(length) || isNaN(width)){
    alert('please insert a number ');
    return;
}

// calculate rectangle area 
const area = width *length;
console.log(area);

// show rectangle area 
const areaSpan = document.getElementById('rectangle-area');
areaSpan.innerText = area;
addToCalculationEntry('Rectangle',area);


}

// reusable function -- reduce duplicate code 
function calculateParallelogramArea (){
   const base =getInputValue('parallelogram-base');
//    console.log(base);
   const height = getInputValue('parallelogram-height');
//    console.log(height);

// validate input : base and height 
if (isNaN(base) || isNaN (height)){
    alert('Please insert a number ');
    return
}

   const area = base * height;
   setElementInnerText('parallelogram-area',area);
   addToCalculationEntry('parallelogram' ,area);
}

function calculateEllipseArea(){
    const majorRadius = getInputValue('ellipse-major-radius');
    console.log(majorRadius)
    const minorRadius = getInputValue('ellipse-minor-radius');
    console.log(minorRadius);
    const area = 3.14 * majorRadius * minorRadius;
    const areaTwoDecimal = area.toFixed(2);
    setElementInnerText('ellipse-area',areaTwoDecimal);
    addToCalculationEntry('Ellipse',areaTwoDecimal);
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

// add to calculation entry

/*
*1.get the element where you want to add the dynamic html
*2.create an element you want to add
*3.if needed add some class
*4.add inner HTML .it would be dynamic Template string 
* 5.append the created element as a child of the parent 
**/ 
function addToCalculationEntry(areaType, area){
    console.log(areaType + '  ' + area);
    const calculationEntry = document.getElementById('calculation-entry');
    const count = calculationEntry.childElementCount;

    const p = document.createElement('p');
    p.classList. add('my-4')
    p.innerHTML = ` ${count + 1}. ${areaType}  ${area} cm <sup>2</sup> <button class= "btn btn-success btn-small">Convert</button>`;
    calculationEntry.appendChild (p);

}

// Data validation 
/* 
1.set the proper type of the input field (number, text, email)
*2. check type using typeof 
*3.NaN means Not a Number .isNaN is checking whether a input is not a number or not 
**/ 