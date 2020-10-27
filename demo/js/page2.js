var el = document.createElement("BUTTON");
el.innerHTML = "This button was made with external javascript.";
el.onclick = function() {alert("This is page 2!")}
document.body.appendChild(el); 