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