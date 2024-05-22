// Mostra el botó quan l'usuari desplaça la pàgina 200px avall des del principi del document
window.onscroll = function() {scrollToTopButtonFunction()};

function scrollToTopButtonFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("scrollToTopBtn").style.display = "block"; // Mostra el botó
  } else {
    document.getElementById("scrollToTopBtn").style.display = "none"; // Amaga el botó
  }
}

// Es desplaça fins al principi del document quan es fa clic al botó
function scrollToTop() {
  document.body.scrollTop = 0; // Per a Safari
  document.documentElement.scrollTop = 0; // Per a Chrome, Firefox, IE i Opera
}