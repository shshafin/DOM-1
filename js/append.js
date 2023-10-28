// what to add
const UL = document.querySelector("#name ul");
const li = document.createElement("li");
li.innerText = "grape";

// where to add
UL.appendChild(li);
console.log(UL);

// add section
// const parent = document.querySelector("#main");
// const section = document.createElement("section");
// section.innerHTML =
//   "<h1>This is new section</h1><ul><li>t-Shirt</li><li>Pant</li><li>Shoe</li><li>Glasses</li></ul>";
// section.style.backgroundColor = "orange";
// section.style.borderRadius = "20px 0 20px 0";
// section.style.border = "10px solid blue";
// section.style.color = "purple";
// section.style.padding = "10px";

// parent.appendChild(section);
// console.log(parent);

const parent = document.querySelector("#main");

const section = document.createElement("section");
const h1 = document.createElement("h1");
h1.innerText = "new section";
section.appendChild(h1);

const ul = document.createElement("ul");
section.appendChild(ul);
const li1 = document.createElement("li");
li1.innerText = "jersey";
ul.appendChild(li1);
const li2 = document.createElement("li");
li2.innerText = "shirt";
ul.appendChild(li2);
const li3 = document.createElement("li");
li3.innerText = "shirt";
ul.appendChild(li3);

parent.appendChild(section);

console.log(section);

section.style.backgroundColor = "orange";
section.style.borderRadius = "20px 0 20px 0";
section.style.border = "10px solid blue";
section.style.color = "purple";
section.style.padding = "10px";
