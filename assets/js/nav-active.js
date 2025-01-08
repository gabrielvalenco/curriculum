window.addEventListener('DOMContentLoaded', (event) => {
    console.log("DOM carregado!");

    // Obtém a URL atual da página
    const currentPage = window.location.pathname.split('/').pop(); // Pega o nome do arquivo da URL

    console.log("Página atual:", currentPage);

    // Obtém todos os links de navegação
    const navLinks = document.querySelectorAll('.nav-link');

    // Itera sobre todos os links e marca o que corresponde à página atual
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href').split('/').pop(); // Pega o nome do arquivo do href
        console.log("Verificando link:", linkHref);

        if (linkHref === currentPage) {
            link.classList.add('active'); // Adiciona a classe 'active' ao link correspondente
        }
    });
});
