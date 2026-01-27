// assets/js/scroll-effects.js

/**
 * Sistema de animação de scroll
 * Detecta quando elementos entram na viewport e adiciona classe 'visible'
 */

// Configuração do Intersection Observer
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1 // Elemento precisa estar 10% visível para disparar
};

// Função callback quando elemento entra na viewport
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Opcional: parar de observar após animar (melhor performance)
            // observer.unobserve(entry.target);
        }
    });
}

// Criar o observer
const observer = new IntersectionObserver(handleIntersection, observerOptions);

// Função para inicializar as animações
function initScrollAnimations() {
    // Selecionar todos os elementos com a classe fade-on-scroll
    const animatedElements = document.querySelectorAll('.fade-on-scroll');
    
    // Observar cada elemento
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// Adicionar delays progressivos para elementos em sequência
function addSequentialDelays() {
    // Para listas de features
    const featureLists = document.querySelectorAll('.features');
    featureLists.forEach(list => {
        const items = list.querySelectorAll('li');
        items.forEach((item, index) => {
            item.style.transitionDelay = `${index * 0.1}s`;
            item.classList.add('fade-on-scroll');
            observer.observe(item);
        });
    });

    // Para cards de audience
    const audienceCards = document.querySelectorAll('.audience-card');
    audienceCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.15}s`;
    });

    // Para schedule cards
    const scheduleCards = document.querySelectorAll('.schedule-card');
    scheduleCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });

    // Para testimonials
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    testimonialCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.15}s`;
    });

    // Para FAQ items
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.1}s`;
    });

    // Para benefit items
    const benefitItems = document.querySelectorAll('.benefit-item');
    benefitItems.forEach((item, index) => {
        item.classList.add('fade-on-scroll');
        item.style.transitionDelay = `${index * 0.15}s`;
        observer.observe(item);
    });
}

// Smooth scroll para links âncora
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 60; // Compensar altura do countdown
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Adicionar efeito parallax sutil ao hero
function initParallax() {
    const hero = document.getElementById('hero');
    
    if (!hero) return;
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.5;
        
        hero.style.backgroundPositionY = `${rate}px`;
    });
}

// Mostrar/esconder countdown ao rolar
function initCountdownBehavior() {
    const countdown = document.getElementById('countdown');
    
    if (!countdown) return;
    
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Se rolar para baixo e passou de 100px, esconde
        if (currentScroll > lastScroll && currentScroll > 100) {
            countdown.style.transform = 'translateY(-100%)';
        } else {
            // Se rolar para cima, mostra
            countdown.style.transform = 'translateY(0)';
        }
        
        lastScroll = currentScroll;
    });
    
    // Adicionar transição suave
    countdown.style.transition = 'transform 0.3s ease';
}

// Adicionar animação de "pulse" nos botões CTA quando visíveis
function initCTAAnimation() {
    const ctaButtons = document.querySelectorAll('.btn-hero, .btn-whatsapp, .btn-primary');
    
    const pulseObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'pulse-btn 2s ease-in-out infinite';
            } else {
                entry.target.style.animation = 'none';
            }
        });
    }, { threshold: 0.5 });
    
    ctaButtons.forEach(btn => {
        pulseObserver.observe(btn);
    });
}

// Adicionar CSS da animação pulse dinamicamente
function addPulseAnimation() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse-btn {
            0%, 100% {
                box-shadow: 0 8px 24px rgba(138, 0, 0, 0.5);
            }
            50% {
                box-shadow: 0 8px 40px rgba(138, 0, 0, 0.8);
            }
        }
    `;
    document.head.appendChild(style);
}

// Performance: usar requestAnimationFrame para animações
let ticking = false;

function optimizeScrollPerformance() {
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                // Suas funções de scroll aqui
                ticking = false;
            });
            ticking = true;
        }
    });
}

// Detectar se é mobile para desabilitar certos efeitos
function isMobile() {
    return window.innerWidth <= 768;
}

// Inicializar tudo quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar animações de scroll
    initScrollAnimations();
    
    // Adicionar delays sequenciais
    addSequentialDelays();
    
    // Inicializar smooth scroll
    initSmoothScroll();
    
    // Inicializar parallax (apenas em desktop)
    if (!isMobile()) {
        initParallax();
    }
    
    // Comportamento do countdown
    initCountdownBehavior();
    
    // Animação dos botões CTA
    addPulseAnimation();
    initCTAAnimation();
    
    // Otimizar performance
    optimizeScrollPerformance();
    
    console.log('🎸 Scroll effects initialized!');
});

// Recarregar observer ao redimensionar (para garantir responsividade)
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Reobservar elementos se necessário
        initScrollAnimations();
    }, 250);
});

// Export para uso em outros scripts se necessário
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initScrollAnimations,
        initSmoothScroll,
        observer
    };
}
