document.addEventListener("DOMContentLoaded", function () {
    Display_historial();
});

function añadir(value) {
    var display = document.getElementById("display");
    display.value += value;
}

function limpiar() {
    var display = document.getElementById("display");
    display.value = "";
}

function calcular() {
    var display = document.getElementById("display");
    try {
        var result = eval(display.value);
        display.value = result;
        Guardar_historial(display.value);
    } catch (error) {
        alert("Error en la expresión");
    }
}

function Guardar_historial(operation) {
    var Lista_historial = JSON.parse(localStorage.getItem("history")) || [];
    Lista_historial.push(operation);
    localStorage.setItem("history", JSON.stringify(Lista_historial));
    Display_historial();
}

function Display_historial() {
    var Lista_historial = JSON.parse(localStorage.getItem("history")) || [];
    var historyUl = document.getElementById("history-list");
    historyUl.innerHTML = "";
    Lista_historial.forEach(function (operation) {
        var li = document.createElement("li");
        li.textContent = operation;
        historyUl.appendChild(li);
    });
}

function Limpiar_historial() {
    localStorage.removeItem("history");
    Display_historial();

}


function Mostrar_historial() {
    var Lista_historial = document.getElementById("history-list");
    var boton_mostrar = document.getElementById("toggle-button");

    if (Lista_historial.style.display === "none" || Lista_historial.style.display === "") {
        Lista_historial.style.display = "block";
        boton_mostrar.classList.add("show");
        boton_mostrar.textContent = "Ocultar Lista";
    } else {
        Lista_historial.style.display = "none";
        boton_mostrar.classList.remove("show");
        boton_mostrar.textContent = "Mostrar Lista";
    }
}