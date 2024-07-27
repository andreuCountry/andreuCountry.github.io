document.addEventListener('DOMContentLoaded', () => {
    const languageSelect = document.getElementById('language-select');

    languageSelect.addEventListener('change', (e) => {
        const selectedLang = e.target.value;
        switchLanguage(selectedLang);
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
