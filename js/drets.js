// Aquest esdeveniment assigna l'any actual al contingut de l'element amb l'ID "year".
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("year").textContent = new Date().getFullYear();
});