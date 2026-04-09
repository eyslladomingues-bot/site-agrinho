
// Efeito de mudança no cabeçalho ao rolar a página
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.padding = '10px 0';
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    } else {
        header.style.padding = '0';
        header.style.backgroundColor = '#fff';
    }
});

// Mensagem de boas-vindas no console para confirmar carregamento
console.log("AgroForte: Sustentabilidade e Tecnologia carregados com sucesso.");

// Exemplo simples de interação nos cards
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.backgroundColor = '#f0f7ee';
    });
    card.addEventListener('mouseleave', () => {
        card.style.backgroundColor = 'white';
    });
});
