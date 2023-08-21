document.addEventListener("DOMContentLoaded", function() {
    let consciousDiv = document.getElementById("elDiv");

     consciousDiv.addEventListener("click", function() {
        alert("Hola! Soy el div")
    });
});

function saludar(event) {
    event.stopPropagation();
    alert("Hola!");
}