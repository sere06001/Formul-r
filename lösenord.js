let toggle = document.getElementById("toggle");
let ruta = document.getElementById("password");

toggle.addEventListener("click", () => {
    if (ruta.type == "password") {
        ruta.type = "text";
    } else {
        ruta.type = "password";
    }
})