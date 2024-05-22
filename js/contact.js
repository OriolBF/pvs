// Escolta l'esdeveniment de DOMContentLoaded per assegurar-se que tots els elements del document estan carregats
document.addEventListener('DOMContentLoaded', function() { 
   // Afegim un listener d'esdeveniments al formulari de contacte per a l'esdeveniment de l'enviament del formulari
    document.getElementById('contactForm').addEventListener('submit', function(event) {
      // Evita el comportament per defecte de l'enviament del formulari, que és recarregar la pàgina
      event.preventDefault();
      // Mostra una finestra d'alerta personalitzada amb SweetAlert2 quan s'envia el formulari amb èxit
      Swal.fire({
        title: 'Informació de Contacte Enviada',
        text: 'Gràcies!',
        icon: 'success',
        confirmButtonText: 'Ok'
      });
    });
  });