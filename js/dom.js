// console.log("hello world");
const styling = document.querySelectorAll("section");

for (let styles of styling) {
  styles.style.backgroundColor = "purple";
  styles.style.color = "blue";
  styles.style.border = "5px solid blue";
  styles.style.margin = "10px";
  styles.style.padding = "10px";
  styles.style.cursor = "pointer";
  styles.style.borderRadius = "60px 0 60px 0";
}
const nextChange = document.getElementById("name");
nextChange.style.backgroundColor = "tomato";
nextChange.style.fontSize = "19px";

const placeChanger = document.getElementById("place");
placeChanger.classList.add("changer");
console.log(placeChanger);

// console.log(placeChanger.classList.remove("changer"));

const information = document.getElementById("family-heading");
information.style.color = "lightgray";

const sec = document.getElementById("family-section");
sec.style.backgroundColor = "black";
sec.style.borderColor = "cyan";
sec.classList.add("info-class");
console.log(sec);
const col = document.getElementById("color");
col.style.color = "lightgray";



