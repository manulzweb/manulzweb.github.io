/**
 * TranslationService - Servicio para manejar traducciones del sitio
 */
import translations from '../translations.json' with { type: 'json' };

class TranslationService {
    constructor() {
        /** @type {string} Idioma seleccionado actualmente (obtenido de localStorage o por defecto 'es') */
        this.currentLang = localStorage.getItem('language') || 'es';

        /** @type {Object} Diccionario de traducciones importado desde el JSON */
        this.translations = translations;

        this.init();
    }

    /**
     * Inicializa el servicio aplicando las traducciones actuales y creando el botón de cambio de idioma.
     */
    init() {
        this.applyTranslations();
        this.createLanguageToggle();
    }

    createLanguageToggle() {
        // Crear el botón de toggle de idioma
        const toggleBtn = document.createElement('button');
        toggleBtn.id = 'lang-toggle';
        toggleBtn.className = 'lang-toggle';

        // Estructura interna: Icono de idioma y texto del idioma actual
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

    /**
     * Cambia al siguiente idioma disponible, recorriendo de forma cíclica todas las
     * opciones definidas en el JSON de traducciones (soporta más de dos idiomas).
     * Guarda la selección en localStorage para futuras visitas.
     */
    toggleLanguage() {
        // Obtenemos la lista de idiomas disponibles a partir de las claves del JSON de traducciones.
        const availableLangs = Object.keys(this.translations);

        // Buscamos la posición del idioma actual y avanzamos al siguiente, volviendo al inicio al llegar al final.
        const currentIndex = availableLangs.indexOf(this.currentLang);
        const nextIndex = (currentIndex + 1) % availableLangs.length;
        this.currentLang = availableLangs[nextIndex];

        //guardamos en el localstorage el string curretLang con el valor "language"
        localStorage.setItem('language', this.currentLang);

        // Actualizar la interfaz con los nuevos textos
        this.applyTranslations();
        this.updateToggleButton();
    }

    /**
     * Actualiza el texto visible dentro del botón de toggle para reflejar el idioma actual.
     */
    updateToggleButton() {
        const toggleBtn = document.getElementById('lang-toggle');
        if (toggleBtn) {
            const langText = toggleBtn.querySelector('.lang-text');
            if (langText) {
                langText.textContent = this.currentLang.toUpperCase();
            }
        }
    }

    /**
     * Recorre el DOM y actualiza todos los elementos que posean el atributo 'data' 
     * con su traducción correspondiente. También actualiza metadatos del sitio.
     */
    applyTranslations() {
        const lang = this.currentLang;
        const translations = this.translations[lang];

        if (!translations) return;

        // 1. Actualizar elementos con atributo 'data' (buscando su clave en el JSON)
        document.querySelectorAll('[data]').forEach(element => {
            const key = element.getAttribute('data');
            if (translations[key]) {
                element.textContent = translations[key];
            }
        });

        // 2. Actualizar el título de la pestaña del navegador (tomado del diccionario del idioma)
        if (translations.pageTitle) {
            document.title = translations.pageTitle;
        }

        // 3. Actualizar la meta-descripción para SEO (tomada del diccionario del idioma)
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc && translations.metaDescription) {
            metaDesc.content = translations.metaDescription;
        }

        // 4. Actualizar el atributo lang global del documento HTML
        document.documentElement.lang = lang;
    }

}

export default TranslationService;
