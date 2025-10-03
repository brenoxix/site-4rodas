document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const navList = document.getElementById('nav-list');
    const navLinks = navList.querySelectorAll('a');

    // Funcionalidade do Menu Mobile
    menuToggle.addEventListener('click', function () {
        navList.classList.toggle('active');
        const icon = menuToggle.querySelector('i');
        // Alterna entre o ícone de menu (barras) e o ícone de fechar (X)
        if (navList.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Fechar o menu ao clicar em um link (para melhor usabilidade mobile)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navList.classList.contains('active')) {
                navList.classList.remove('active');
                menuToggle.querySelector('i').classList.remove('fa-times');
                menuToggle.querySelector('i').classList.add('fa-bars');
            }
        });
    });
});