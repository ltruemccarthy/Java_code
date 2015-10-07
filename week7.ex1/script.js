var newHeading = document.createElement("h1");
var newParagraph = document.createElement("p");

var h1Text = document.createTextNode("Welcome");
var paraText = document.createTextNode("To a site with elements manually created and inserted by Javascript with help of the DOM!");
newHeading.appendChild(h1Text);
newParagraph.appendChild(paraText);

document.getElementById("mainDiv").appendChild(newHeading);
document.getElementById("mainDiv").appendChild(newParagraph);

newParagraph.setAttribute("align", "right");