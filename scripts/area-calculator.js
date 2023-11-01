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