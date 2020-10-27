var el = document.createElement("BUTTON");
el.innerHTML = "This button was made with external javascript.";
el.onclick = function() {alert("This is the home page!")}
document.body.appendChild(el); 