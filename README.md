# Portafolio - Manuel Vasquez

Portafolio personal estático de alto rendimiento. Diseño responsivo, animaciones modernas y arquitectura modular.

## Descripción

- **arquitectura modular**: separación de estilos (BEM), lógica (ES6+) y datos (JSON).
- **diseño premium**: gradientes animados, glassmorphism y bordes dinámicos.
- **componentes**:
    - **imperativo**: `PetCard.js` (DOM manual).
    - **declarativo**: `TechCard.js` (Web Components).

## Características

- ✅ **navegación**: barra fija y responsiva con menú hamburguesa (solo CSS).
- ✅ **bordes animados**: efecto de luz giratoria en tarjetas.
- ✅ **modal**: ventana de contacto integrada.
- ✅ **galería**: carga dinámica de mascotas desde JSON.
- ✅ **toast**: bienvenida personalizada según la hora.
- ✅ **optimización**: incluye `style.min.css` para producción.

## Estructura

```text
├── index.html              # home
├── mascotas.html           # galería
├── public/                 # multimedia
└── src/
    ├── css/                # estilos y minificado
    │   ├── style.min.css   # bundle final
    │   └── ...             
    └── js/
        ├── scripts.js      # lógica home
        ├── petsScript.js   # lógica mascotas
        ├── data/           # json
        ├── services/       # modales, toasts, gallery manager
        ├── types/          # modelos (Pet.js)
        └── ui/             # componentes (Cards)
```

## 🛠 Tecnologías

- HTML5, CSS3 (BEM, Variables, Conic-gradients)
- JavaScript ES6+ (Módulos, Async/Await, Web Components)
- Git para control de versiones.

## 📦 Ejecución

1. clonar repositorio.
2. usar **Live Server** (necesario para `fetch` de JSON).

## Notas

- código limpio y sin redundancias.
- sin dependencias externas.
- documentado en español.

## Contacto

- **autor**: Manuel Vasquez
- **whatsapp**: [chat](https://wa.me/573016778673)
- **github**: [manulzweb](https://github.com/manulzweb)
