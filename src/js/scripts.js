import { showToast } from './services/Toast.js';
import './ui/TechCard.js';
import ContactModal from './services/ContactModal.js';

document.addEventListener('DOMContentLoaded', () => {
    showToast();
    new ContactModal();
});