// Script para animações e interações suaves
document.addEventListener('DOMContentLoaded', function () {
    // Navegação suave
    const links = document.querySelectorAll('.navbar a');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetID = this.getAttribute('href').replace('.html', '');
            const targetSection = document.getElementById(targetID);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            } else {
                window.location.href = this.getAttribute('href');
            }
        });
    });

    // Adicionar animações ao rolar para elementos
    const animatedElements = document.querySelectorAll('main, section, footer');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // Efeitos de hover com luz
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.boxShadow = '0 6px 20px rgba(101, 89, 255, 0.75)';
        });

        button.addEventListener('mouseout', () => {
            button.style.boxShadow = 'none';
        });
    });
});
