// DOM MANIPULATION

const heading = document.getElementById("heading");
console.log(heading);

const box = document.getElementsByClassName("container");
console.log(box);

const list = document.getElementsByTagName("li");
console.log(list);

const title = document.querySelector("#heading");
console.log(title);

const listItems = document.querySelectorAll("li");
console.log(listItems);
// NodeList(4) [li, li, li, li]

const listItems1 = document.querySelector("li");
console.log(listItems1);
// <li>Reputation</li>

// Styling Elements

const albumNames = document.querySelectorAll("li");
for (let i = 0; i < albumNames.length; i++) {
  albumNames[i].style.color = "#fff";
  albumNames[i].style.fontWeight = "600";
}

// Creating Elements
const ul = document.querySelector("ul");
const newList = document.createElement("li");
ul.append(newList);

// innerText VS textContent Vs innerHTML
const firstItem = document.querySelector("li");
console.log(firstItem.innerText);
console.log(firstItem.textContent);
console.log(firstItem.innerHTML);

// Adding OR Modifying Text
newList.innerText = "1989";

// Manipulating Attributes
newList.setAttribute("id", "heading");
console.log(newList.getAttribute("id"));
newList.removeAttribute("id");

// Manipulating Classes
newList.classList.add("color-white");
console.log(newList.classList.contains("color-white"));
newList.classList.remove("color-white");

// Remove Elements
newList.remove();

// Traversing in DOM

// Parent Node Traversal
const div = document.querySelector("div");
console.log(div.parentNode);
console.log(div.parentElement);

// Child Node Traversal
console.log(ul.childNodes);
console.log(ul.firstChild);
console.log(ul.lastChild);

// ul.firstChild.style.backgroundolor = "#b24545";
ul.childNodes[1].style.backgroundColor = "#ab0303";

console.log(ul.children);
console.log(ul.firstElementChild);
console.log(ul.lastElementChild);

ul.firstElementChild.style.backgroundColor = "#A794B8";

// Siblings Node Traversal
console.log(ul.previousSibling);
console.log(ul.nextSibling);

console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling);

const btn = document.querySelector("button");
btn.addEventListener("click", a);

function a() {
  alert("Hey");
}

btn.addEventListener("mouseover", b);

function b() {}
