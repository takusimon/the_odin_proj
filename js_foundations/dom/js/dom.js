const container = document.querySelector("#container");
const paragraph1 = document.createElement("p");
paragraph1.style.color = "red";
paragraph1.textContent = "Hey I'm red";

container.appendChild(paragraph1);

const heading3 = document.createElement("h3");
heading3.style.color = "blue";
heading3.textContent = "I'm a blue h3!";

container.appendChild(heading3);

const blackDiv = document.createElement("div");

blackDiv.setAttribute("style","border:2px solid black; background-color: pink;");

const anotherHeading1 = document.createElement("h1");
anotherHeading1.textContent = "I'm in a div";
blackDiv.appendChild(anotherHeading1);
const anotherParagraph = document.createElement("p");
anotherParagraph.textContent = "ME TOO!";
blackDiv.appendChild(anotherParagraph);

container.appendChild(blackDiv);