import { GalleryManager } from './services/GalleryManager.js';
import { PetCard } from './ui/PetCard.js';
import { Pet } from './types/Pet.js'
import { showToast } from './services/Toast.js';
import ContactModal from './services/ContactModal.js';

/**
 * Evento principal que se dispara cuando el DOM está completamente cargado.
 * Inicializa la carga de datos, el modal de contacto y el gestor de galería.
 */
document.addEventListener('DOMContentLoaded', async () => {
    // carga los datos de las mascotas desde el archivo JSON
    const data = await loadPets();

    if (data && data.pets) {
        // renderiza las mascotas en el grid usando el componente PetCard
        renderPets('.pets__grid', data.pets, PetCard)
    }

    // muestra el mensaje de bienvenida (Toast)
    showToast();

    // inicializa el modal de contacto
    new ContactModal();

    // configuración del botón para expandir/contraer la galería de mascotas
    const btnToggleGallery = document.getElementById('btn-toggle-gallery');
    const galleryContainer = document.getElementById('pets-gallery');

    if (btnToggleGallery && galleryContainer) {
        new GalleryManager(btnToggleGallery, galleryContainer);
    }
});

/**
 * Renderiza una lista de objetos en un contenedor específico.
 * 
 * @param {string} selector - selector CSS del contenedor donde se insertarán los elementos.
 * @param {Array} arr - lista de objetos de datos a renderizar.
 * @param {Function} to_render - clase o constructor del componente encargado del renderizado.
 */
function renderPets(selector, arr, to_render) {
    const container = document.querySelector(selector);
    if (!container) return;

    // limpia el contenedor antes de renderizar
    container.innerHTML = '';

    arr.forEach(p => {
        // crea una instancia del componente de UI pasándole un objeto de tipo Pet
        const petCard = new to_render(new Pet(p));

        // el componente PetCard usa un método render() que devuelve un nodo del DOM (Imperativo)
        container.appendChild(petCard.render())
    });
}

/**
 * Realiza una petición asíncrona para obtener los datos de las mascotas.
 * 
 * @returns objeto con los datos de las mascotas o undefined en caso de error.
 */
async function loadPets() {
    try {
        const res = await fetch('src/js/data/PetData.json')
        if (!res.ok) throw new Error('No se pudo cargar el archivo de datos');
        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Error al cargar mascotas: ' + error.message);
    }
}