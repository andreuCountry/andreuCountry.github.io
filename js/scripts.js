document.addEventListener('DOMContentLoaded', () => {
    const esTab = document.getElementById('es-tab');
    const enTab = document.getElementById('en-tab');

    esTab.addEventListener('click', (e) => {
        e.preventDefault();
        translatePage('ES');
    });

    enTab.addEventListener('click', (e) => {
        e.preventDefault();
        translatePage('EN');
    });

    async function translatePage(targetLang) {
        const textsToTranslate = document.querySelectorAll('h1, h2, h3, p, li, a');
        const apiKey = 'TU_CLAVE_DE_API_DEEPL';
        const apiUrl = 'https://api-free.deepl.com/v2/translate';

        textsToTranslate.forEach(async (element) => {
            const text = element.textContent;
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': `DeepL-Auth-Key ${apiKey}`
                },
                body: `text=${encodeURIComponent(text)}&target_lang=${targetLang}`
            });
            const data = await response.json();
            element.textContent = data.translations[0].text;
        });
    }
});
