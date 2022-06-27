export function myFunction() {
  alert("Welcome to my FOOD page!");
}

const inp = document.getElementById("text");
const count = document.getElementById("count");
const clear = document.getElementById("clear");
const ul = document.getElementById("ulid");
const foodArr = [];

export class foodName {
  constructor(name) {
    this.name = name;
  }
  printFoodName() {
    return this.name;
  }
}

document.getElementById("add").addEventListener("click", () => {
  let food = inp.value;
  let fn = new foodName(food);
  foodArr.push(fn);
  let text = document.createTextNode(food);
  let li = document.createElement("li");
  li.appendChild(text);
  ul.appendChild(li);
  count.innerText = foodArr.length + " product";
});

clear.addEventListener("click", () => {
  foodArr.splice(0, foodArr.length);
  ul.innerHTML = "";
  count.innerHTML = 0;
});
