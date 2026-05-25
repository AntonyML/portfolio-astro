# portfolio-astro

Sitio web personal/portafolio construido con Astro. Este repositorio contiene la plantilla y los componentes para un portafolio moderno, rápido y accesible, listo para desplegar en cualquier hosting de sitios estáticos.

**Estado:** Plantilla lista para personalizar con tu contenido y desplegar.

**Tecnologías principales:** Astro, Tailwind CSS, TypeScript (opcional)

## **Descripción**
- **Proyecto:** Portafolio personal hecho con Astro para mostrar proyectos, experiencia y tecnologías.
- **Objetivo:** Proveer una base ligera y profesional que sea fácil de personalizar y desplegar.

## **Características**
- **Rendimiento optimizado:** Generación estática mediante Astro.
- **Componentes reutilizables:** Cards de proyectos, sección de experiencia, navegación y formulario.
- **Soporte para imágenes:** Componentes y utilidades para imágenes seguras y responsivas.
- **Configuración lista para producción:** Tailwind y configuraciones de build incluidas.

## **Estructura del proyecto**
Estructura relevante del repositorio:

```
.
├── public/
├── src/
│   ├── components/
│   ├── data/
│   ├── layouts/
│   └── pages/
├── scripts/
├── package.json
└── README.md
```

## **Requisitos**
- Node.js 18+ recomendado
- npm o pnpm

## **Instalación y ejecución local**
1. Instala dependencias:

```
npm install
```

2. Levanta el servidor de desarrollo:

```

```

Accede al sitio en `http://localhost:4321` por defecto.

## **Comandos útiles**
- `npm run dev` — Inicia servidor de desarrollo.
- `npm run build` — Genera el sitio estático en `./dist`.
- `npm run preview` — Previsualiza el build localmente.
- `npm run astro -- --help` — Ayuda del CLI de Astro.

## **Despliegue**
Este proyecto genera un sitio estático en la carpeta `dist` y se puede desplegar en cualquier proveedor de hosting estático (Netlify, Vercel, GitHub Pages, Cloudflare Pages, etc.).

Pasos generales:

1. Ejecutar `npm run build`.
2. Subir el contenido de `dist/` al hosting elegido o conectar el repositorio (Vercel/Netlify detectan Astro automáticamente).

## **Personalización**
- Edita los datos en `src/data.ts` y los JSON dentro de `src/data/` para actualizar proyectos, experiencia y tecnologías.
- Modifica componentes en `src/components/` para cambiar la presentación.

## **Contribuir**
Si quieres proponer mejoras o enviar correcciones, abre un Pull Request con una descripción clara del cambio.

## **Licencia**
Revisa el archivo `LICENSE` incluido en el repositorio para los términos de uso.


