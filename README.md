# Restaurante 7 Hermanos — React

Migración a React (Vite) del sitio web del restaurante.

## Estructura del proyecto

```
src/
├── App.jsx                        # Componente raíz
├── main.jsx                       # Punto de entrada
├── styles/
│   └── global.css                 # Variables CSS y estilos base
├── data/
│   └── menuData.js                # Todos los datos del menú, vinos, etc.
├── assets/
│   └── img/                       # ← Copia aquí las imágenes del zip original
│       ├── principal.png
│       ├── cocinera.jpg
│       ├── favicon.png
│       └── gallery/
│           ├── calamares.png
│           ├── chipirones.png
│           ├── arrozmarisco.png
│           ├── ensalada.png
│           ├── gallery-1.jpg
│           └── ...
└── components/
    ├── Header/
    │   ├── Header.jsx
    │   └── Header.module.css
    ├── Hero/
    │   ├── Hero.jsx
    │   └── Hero.module.css
    ├── Carta/
    │   ├── Carta.jsx
    │   └── Carta.module.css
    ├── Menus/
    │   ├── Menus.jsx
    │   └── Menus.module.css
    ├── Vinos/
    │   ├── Vinos.jsx
    │   └── Vinos.module.css
    ├── Historia/
    │   ├── Historia.jsx
    │   └── Historia.module.css
    ├── Reservar/
    │   ├── Reservar.jsx
    │   └── Reservar.module.css
    ├── Galeria/
    │   ├── Galeria.jsx
    │   └── Galeria.module.css
    ├── Ubicacion/
    │   ├── Ubicacion.jsx
    │   └── Ubicacion.module.css
    ├── Footer/
    │   ├── Footer.jsx
    │   └── Footer.module.css
    └── ScrollToTop/
        ├── ScrollToTop.jsx
        └── ScrollToTop.module.css
```

## Puesta en marcha

```bash
# 1. Instalar dependencias
npm install

# 2. Copiar las imágenes del proyecto original dentro de src/assets/img/

# 3. Arrancar en local
npm run dev

# 4. Build de producción
npm run build
```

## Editar contenido

Todo el contenido del menú, vinos y galería está centralizado en:

```
src/data/menuData.js
```

Edita ese archivo para añadir, quitar o modificar platos, precios o imágenes
sin tocar ningún componente.
