// cookie-message.js
document.addEventListener("DOMContentLoaded", function() {
  var cookieMessage = document.getElementById("cookie-message");
  var acceptButton = document.getElementById("accept-cookie");

  // Verificar si l'acceptació de les cookies esta guardada localment
  var acceptedCookie = localStorage.getItem("cookieAccepted");

  if (!acceptedCookie) {
    showCookieMessage();
  }

  // Funció per a mostrar el misatje de les cookies
  function showCookieMessage() {
    cookieMessage.style.display = "block";
  }

  // Funció per a ocultar el misatje de les cookies i registrar l'acceptació d'aquestes
  function hideCookieMessage() {
    localStorage.setItem("cookieAccepted", "true");
    cookieMessage.style.display = "none";
  }

  // Funció Event Listener per al botó d'acceptació de les cookies
  acceptButton.addEventListener("click", function() {
    hideCookieMessage();
  });
});