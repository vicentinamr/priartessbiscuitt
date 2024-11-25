// Script para navegação interativa e interações dinâmicas

// Função para destacar o botão ativo na navegação
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop(); // Obtém o nome do arquivo atual
    const links = document.querySelectorAll('.button');

    links.forEach((link) => {
        if (link.href.includes(currentPage)) {
            link.style.backgroundColor = '#0056b3'; // Destaca o botão ativo
        }
    });
});

// Função de rolagem suave para links de navegação
document.querySelectorAll('.button').forEach((link) => {
    link.addEventListener('click', (event) => {
        const href = link.getAttribute('href');
        if (href.startsWith('#')) {
            event.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }
        }
    });
});

// Exemplo adicional: exibir mensagem ao clicar em um botão (personalizável)
document.querySelectorAll('.button').forEach((button) => {
    button.addEventListener('click', () => {
        console.log('Você clicou em um botão de navegação!');
    });
});
