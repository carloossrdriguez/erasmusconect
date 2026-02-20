document.addEventListener('DOMContentLoaded', () => {
    console.log('erasmusconect initialized');

    // Simple search interaction mock
    const searchBtn = document.querySelector('.search-container button');
    const searchInput = document.querySelector('.search-container input');

    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', () => {
            if (searchInput.value.trim() !== '') {
                alert('Buscando: ' + searchInput.value + '\n(Esta funcionalidad estará disponible en la versión completa)');
            }
        });
    }

    // Add active class to current nav item
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});
