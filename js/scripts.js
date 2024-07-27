document.addEventListener('DOMContentLoaded', () => {
    const esTab = document.getElementById('es-tab');
    const enTab = document.getElementById('en-tab');

    esTab.addEventListener('click', (e) => {
        e.preventDefault();
        switchLanguage('es');
    });

    enTab.addEventListener('click', (e) => {
        e.preventDefault();
        switchLanguage('en');
    });

    function switchLanguage(lang) {
        const elements = document.querySelectorAll('[data-lang-es]');

        elements.forEach(el => {
            const text = el.getAttribute(`data-lang-${lang}`);
            if (text) {
                el.textContent = text;
            }
        });
    }
});
