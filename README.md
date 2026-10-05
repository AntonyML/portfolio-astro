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
├── bun.lock
├── package.json
└── README.md
```

## **Requisitos**
- Bun 1.3.14 para instalar dependencias y ejecutar scripts.
- Node.js 22.12.0 o superior para las herramientas de Astro y Wrangler.

## **Instalación y ejecución local**
1. Instala dependencias:

```
bun install
```

El archivo `bun.lock` se versiona para conservar las versiones de las dependencias. Para una instalación reproducible, usa `bun install --frozen-lockfile`.

2. Levanta el servidor de desarrollo:

```
bun run dev
```

Accede al sitio en `http://localhost:3000`, según la configuración del proyecto.

## **Comandos útiles**
- `bun run dev` — Inicia servidor de desarrollo.
- `bun run build` — Genera el sitio estático en `./dist`.
- `bun run preview` — Genera el build y lo previsualiza localmente con Wrangler.
- `bun run astro --help` — Ayuda del CLI de Astro.
- `bun run deploy` — Genera el build y lo despliega con Wrangler.
- `bun run cf-typegen` — Genera los tipos del entorno de Cloudflare.

Antes de cada build, Bun ejecuta automáticamente `prebuild` para validar las imágenes del proyecto. Si la validación falla, el build se detiene.

## **Despliegue**
Este proyecto genera un sitio estático en la carpeta `dist` y se puede desplegar en cualquier proveedor de hosting estático (Netlify, Vercel, GitHub Pages, Cloudflare Pages, etc.).

Pasos generales:

1. Ejecutar `bun run build`.
2. Subir el contenido de `dist/` al hosting elegido o conectar el repositorio (Vercel/Netlify detectan Astro automáticamente).

## **Personalización**
- Edita los datos en `src/data.ts` y los JSON dentro de `src/data/` para actualizar proyectos, experiencia y tecnologías.
- Modifica componentes en `src/components/` para cambiar la presentación.

## **Contribuir**
Si quieres proponer mejoras o enviar correcciones, abre un Pull Request con una descripción clara del cambio.

## **Licencia**
Revisa el archivo `LICENSE` incluido en el repositorio para los términos de uso.


