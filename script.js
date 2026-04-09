// 1. Mudança de estilo do Header ao rolar
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 100);
});

// 2. Contador Animado para Estatísticas
const counters = document.querySelectorAll('.counter');
const speed = 200;

const startCounters = () => {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
};

// 3. Observer para disparar animações quando visível
const observerOptions = { threshold: 0.5 };

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('stats')) {
                startCounters();
            }
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal, .stats').forEach(el => observer.observe(el));

// 4. Lógica simples do formulário
document.getElementById('news-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Obrigado por se inscrever! Você receberá nossas atualizações em breve.');
    e.target.reset();
});
