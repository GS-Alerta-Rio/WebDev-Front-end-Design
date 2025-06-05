document.addEventListener('DOMContentLoaded', () => {
    const themeIcons = document.querySelectorAll('.theme-icon');
    const body = document.body;

    // Função para aplicar o tema
    function applyTheme(themeName) {
        body.classList.remove('theme-default', 'theme-light', 'theme-dark');
        body.classList.add(`theme-${themeName}`);
        localStorage.setItem('selectedTheme', themeName);
    }


    themeIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            const themeName = icon.dataset.theme;
            applyTheme(themeName);
        });
    });
});

let indiceSlide = 1; // Começa no primeiro slide
mostrarSlide(indiceSlide);

// Função para avançar/retroceder N slides
function mudarSlide(n) {
    mostrarSlide(indiceSlide += n);
}

// Função para mostrar um slide específico
function mostrarSlide(n) {
    let i;
    let slides = document.getElementsByClassName("meu-slide");
    let pontos = document.getElementsByClassName("ponto");

    if (n > slides.length) { // Se passar do último slide, volta para o primeiro
        indiceSlide = 1;
    }
    if (n < 1) { // Se voltar antes do primeiro, vai para o último
        indiceSlide = slides.length;
    }

    // Esconde todos os slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Remove a classe "ativo" de todos os pontos
    for (i = 0; i < pontos.length; i++) {
        pontos[i].className = pontos[i].className.replace(" ativo", "");
    }

    // Mostra o slide atual e marca o ponto como ativo
    if (slides.length > 0) { // Verifica se existem slides
        slides[indiceSlide - 1].style.display = "block";
    }
    if (pontos.length > 0) { // Verifica se existem pontos
        pontos[indiceSlide - 1].className += " ativo";
    }
}