function toggleResponsiveNavbar() {
  var x = document.getElementById("Controlbarra");
  var isResponsive = x.classList.contains("responsive");

  if (!isResponsive) {
    // Afegeix la classe responsive per obrir el menú desplegable
    x.classList.add("responsive");
    // Emmagatzema l'estat del menú desplegable a l'emmagatzematge local
    localStorage.setItem("navbarResponsive", "abierto");
    // Emmagatzema la posició actual de la barra de navegació
    var navbarOffset = x.offsetTop;
    // Afegeix estils per fixar la barra de navegació
    x.style.position = "fixed";
    x.style.top = navbarOffset + "px";
    x.style.width = "100%";
    document.body.style.paddingTop = x.offsetHeight + "px"; // Ajusta el padding del cos per compensar l'altura de la barra de navegació
  } else {
    // Elimina la classe responsive per tancar el menú desplegable
    x.classList.remove("responsive");
    // Emmagatzema l'estat del menú desplegable a l'emmagatzematge local
    localStorage.setItem("navbarResponsive", "cerrado");
    // Restaura la posició de la barra de navegació
    x.style.position = "";
    x.style.top = "";
    x.style.width = "";
    document.body.style.paddingTop = "";
  }
}

window.addEventListener("scroll", function() {
  scrollFunction();
});

function scrollFunction() {
  var navbar = document.getElementById("Controlbarra");
  var isDarkMode = document.body.classList.contains("dark-mode");
  var isResponsive = navbar.classList.contains("responsive");

  if (isDarkMode) {
    // Estableix estils per al mode fosc
    navbar.style.backgroundColor = "#807f7f";
    navbar.style.color = "#aad6ec";
    // Tanca el menú desplegable en mode fosc
    navbar.classList.remove("responsive");
    navbar.style.position = "";
    navbar.style.top = "";
    navbar.style.width = "";
    document.body.style.paddingTop = "";
    return;
  }

  var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

  if (isResponsive) {
    // Si el menú desplegable està obert, el tanquem en fer scroll cap avall
    navbar.classList.remove("responsive");
    navbar.style.position = "";
    navbar.style.top = "";
    navbar.style.width = ""; document.body.style.paddingTop = "";
  } else {
    navbar.style.backgroundColor = "#ffffff";
    navbar.style.color = "#020202";
  }
}

function toggleDarkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  saveDarkMode();
  toggleDarkModeIcon();

  var navbar = document.getElementById("Controlbarra");
  var isResponsive = navbar.classList.contains("responsive");

  if (document.body.classList.contains("dark-mode")) {
    // Si estem en mode fosc, aplicar els estils foscos
    applyDarkModeStyles();
    navbar.style.backgroundColor = "#807f7f";
    navbar.style.color = "#aad6ec";
  } else {
    // Si estem en mode clar, aplicar els estils clars
    applyLightModeStyles();
    navbar.style.backgroundColor = "#ffffff";
    navbar.style.color = "#020202";
  }
  // Restableix els estils de posició si el menú desplegable està tancat
  if (!isResponsive) {
    navbar.style.position = "";
    navbar.style.top = "";
    navbar.style.width = "";
    document.body.style.paddingTop = "";
  }
}

function applyDarkModeStyles() {
  var navLinks = document.querySelectorAll(".topnav");
  for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].classList.add("dark-mode");
  }
  var icon = document.getElementById("toggleDarkModeIcon");
  icon.classList.remove("fa-moon");
  icon.classList.add("fa-sun");
}

function applyLightModeStyles() {
  var navLinks = document.querySelectorAll(".topnav");
  for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].classList.remove("dark-mode");
  }
  var icon = document.getElementById("toggleDarkModeIcon");
  icon.classList.remove("fa-sun");
  icon.classList.add("fa-moon");
}

function saveDarkMode() {
  var mode = document.body.classList.contains("dark-mode") ? "dark" : "light";
  localStorage.setItem("mode", mode);
}

function loadDarkMode() {
  var mode = localStorage.getItem("mode");
  if (mode === "dark") {
    document.body.classList.add("dark-mode");
    toggleDarkModeIcon();
  }
}

function toggleDarkModeIcon() {
  var icon = document.getElementById("toggleDarkModeIcon");
  if (document.body.classList.contains("dark-mode")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
}

// Comprovar l'estat del mode en carregar la pàgina
window.addEventListener("load", function() {
  var mode = localStorage.getItem("mode");
  if (mode === "dark") {
    // Si el mode fosc està activat, aplicar-lo al cos i a la barra de navegació
    document.body.classList.add("dark-mode");
    var navLinks = document.querySelectorAll(".topnav");
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].classList.add("dark-mode");
    }
    // Canviar l'icona a "sol" (indicant mode fosc)
    var icon = document.getElementById("toggleDarkModeIcon");
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  }
});

// Afegir un esdeveniment de redimensionament de finestra per tancar el menú desplegable si la finestra es fa més gran
window.addEventListener("resize", function() {
  var x = document.getElementById("Controlbarra");
  var isResponsive = x.classList.contains("responsive");
  // Comprovar si la finestra ja no és petita i el menú desplegable està obert
  if (isResponsive && window.innerWidth > 768) {
    // Tanquem el menú desplegable
    x.classList.remove("responsive");
    x.style.position = "";
    x.style.top = "";
    x.style.width = "";
    document.body.style.paddingTop = "";
  }
});