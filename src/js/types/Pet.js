/**
 * Clase que representa el modelo de datos de una mascota.
 * Se encarga de estructurar la información básica para ser consumida por la UI.
 */
export class Pet {
    /**
     * @param {Object} data - Objeto con las propiedades de la mascota.
     * @param {string} data.type - Tipo de animal (ej: perro, gato).
     * @param {string} data.name - Nombre de la mascota.
     * @param {string} data.description - Breve descripción de la mascota.
     * @param {string} data.imgUrl - URL de la imagen de la mascota.
     * @param {string} [data.alt] - Texto alternativo para la imagen.
     */
    constructor({type, name, description, imgUrl, alt}) {
        this.type = type;
        this.name = name;
        this.description = description;
        this.img = imgUrl;
        // Si no se proporciona un alt, se genera uno por defecto automáticamente
        this.alt = alt  == "" ? `${this.name} the ${this.type}` : alt;
    }

    // --- Métodos Setter (Asignadores) ---

    setType(type) {
        this.type = type;
    }

    setName(name) {
        this.name = name;
    }

    setDescription(description) {
        this.description = description;
    }

    setImg(path) {
        this.img = path;
    }

    setAlt(alt) {
        this.alt = alt; // Corregido: antes asignaba a this.img por error
    }

    // --- Métodos Getter (Obtenedores) ---

    getName() {
        return this.name;
    }
    
    getDescription() {
        return this.description;
    }

    getType() {
        return this.type;
    }

    getImg() {
        return this.img;
    }

    getAlt() {
        return this.alt;
    }

    /**
     * Devuelve una cadena con toda la información consolidada de la mascota.
     * 
     * @returns {string} Resumen informativo.
     */
    getInfo() {
        return `Type: ${this.type} | Name: ${this.name} | Description: ${this.description}`;
    }
}