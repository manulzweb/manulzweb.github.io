/**
 * TranslationService - Servicio para manejar traducciones del sitio
 */
import translations from '../translations.json' with { type: 'json' };

class TranslationService {
    constructor() {
        this.currentLang = localStorage.getItem('language') || 'es';
        this.translations = translations;
        this.init();
        
    }

    init() {
        this.applyTranslations();
        this.createLanguageToggle();
    }

    createLanguageToggle() {
        // Crear el botón de toggle de idioma
        const toggleBtn = document.createElement('button');
        toggleBtn.id = 'lang-toggle';
        toggleBtn.className = 'lang-toggle';
        toggleBtn.innerHTML = `
            <span class="material-icons">language</span>
            <span class="lang-text">${this.currentLang.toUpperCase()}</span>
        `;
        toggleBtn.title = 'Cambiar idioma';

        // Agregamos el toggle botton al body
        document.body.appendChild(toggleBtn);


        // Agregamos el addevenlistener para "escuchar" cuando el usuario hace click y activamos la funcion toggleLanguage
        toggleBtn.addEventListener('click', () => this.toggleLanguage());
    }

    toggleLanguage() {
        //Ternario que evalua si hay un currentlang y si es del mismo valor y tipo de "es". en dado caso lo pone a "en", sino lo deja en "es". Esto solo sirve para cuando son dos idiomas.
        this.currentLang = this.currentLang === 'es' ? 'en' : 'es';
        //guardamos en el localstorage el string curretLang con el valor "language"
        localStorage.setItem('language', this.currentLang);
        this.applyTranslations();
        this.updateToggleButton();
    }

    updateToggleButton() {
        const toggleBtn = document.getElementById('lang-toggle');
        if (toggleBtn) {
            const langText = toggleBtn.querySelector('.lang-text');
            if (langText) {
                langText.textContent = this.currentLang.toUpperCase();
            }
        }
    }

    applyTranslations() {
        const lang = this.currentLang;
        const translations = this.translations[lang];

        if (!translations) return;

        // Actualizar elementos con atributo data
        document.querySelectorAll('[data]').forEach(element => {
            const key = element.getAttribute('data');
            if (translations[key]) {
                element.textContent = translations[key];
            }
        });

        // Actualizar title del documento
        document.title = lang === 'es' ? 'Manuel Vasquez | Desarrollador Full-Stack & UI/UX' : 'Manuel Vasquez | Full-Stack Developer & UI/UX';

        // Actualizar meta description
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.content = lang === 'es'
                ? 'Portafolio de Manuel Vasquez, Desarrollador Full-Stack especializado en JS, Java Spring Boot y arquitecturas modernas.'
                : 'Manuel Vasquez\'s portfolio, Full-Stack Developer specialized in JS, Java Spring Boot and modern architectures.';
        }

        // Actualizar lang attribute del HTML
        document.documentElement.lang = lang;
    }

}

export default TranslationService;
