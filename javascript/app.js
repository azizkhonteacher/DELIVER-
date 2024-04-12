// inclusive ichidagi % li aylana qiymatlari

let shape1Qiymati = 82;
let shape2Qiymati = 52;
const shape_1 = document.getElementById("cub-shape-1");
const shape_2 = document.getElementById("cub-shape-2");
const shapeValue = document.getElementById("shape-value");

shapeValue.textContent = shape1Qiymati;

const shape1_style = `conic-gradient(
  #134A45 0%,
  #134A45 ${shape1Qiymati}%,
  #CBD0D5 ${shape1Qiymati}%,
  #CBD0D5 100% 
  );`;

const shape2_style = `conic-gradient(
    #508883 0%,
    #508883 ${shape2Qiymati}%,
    #96c9e9 ${shape2Qiymati}%,
    #96c9e9 100% 
);`;

shape_1.setAttribute("style", `background: ${shape1_style}`);
shape_2.setAttribute("style", `background: ${shape2_style}`);
