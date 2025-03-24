document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("nav ul");

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
});


// Exemplo básico de navegação sem recarregar a página
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const page = this.getAttribute('href').substring(1);
      loadPage(page);  // Função que carrega a página via JavaScript
      window.history.pushState({ page }, '', this.getAttribute('href'));
    });
  });
  
  function loadPage(page) {
    // Função para carregar o conteúdo da página dinamicamente
    document.querySelector('#content').innerHTML = `<h1>Conteúdo da página ${page}</h1>`;
  }