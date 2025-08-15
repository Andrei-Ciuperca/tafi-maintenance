const translations = {
    en: {
        title: "Under Maintenance",
        message: "We are currently performing scheduled maintenance. We should be back online shortly. Thank you for your patience."
    },
    ro: {
        title: "În Mentenanță",
        message: "În prezent efectuăm lucrări de mentenanță programate. Ar trebui să revenim online în curând. Vă mulțumim pentru răbdare."
    },
    ru: {
        title: "На техническом обслуживании",
        message: "В настоящее время мы проводим плановое техническое обслуживание. Мы скоро вернемся в онлайн. Спасибо за ваше терпение."
    }
};

function setLanguage(lang) {
    const { title, message } = translations[lang];
    document.getElementById('maintenance-title').textContent = title;
    document.getElementById('maintenance-message').textContent = message;
    document.documentElement.lang = lang;
}

function detectLanguage() {
    const userLang = navigator.language.split('-')[0];
    if (translations[userLang]) {
        return userLang;
    }
    return 'en'; // Default to English
}

document.addEventListener('DOMContentLoaded', () => {
    const initialLang = detectLanguage();
    setLanguage(initialLang);

    document.getElementById('lang-en').addEventListener('click', () => setLanguage('en'));
    document.getElementById('lang-ro').addEventListener('click', () => setLanguage('ro'));
    document.getElementById('lang-ru').addEventListener('click', () => setLanguage('ru'));
});
