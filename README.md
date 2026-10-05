# Portafolio de Antony Monge

Portafolio profesional de Antony Jafeth Monge López, ingeniero de software en Costa Rica. Presenta experiencia laboral, proyectos con casos de estudio, formación, habilidades y medios de contacto.

**URL configurada:** [porfolio.tonyml.com](https://porfolio.tonyml.com)

Construido con **Astro**, **TypeScript** y **Tailwind CSS**, con **Bun** para gestionar dependencias y **Wrangler** para ejecutar y desplegar en **Cloudflare Workers**.

## Características

- Página principal con perfil, experiencia, proyectos, educación, tecnologías y contacto.
- Generación estática de páginas con Astro y despliegue configurado para Cloudflare Workers.
- Páginas de detalle para proyectos y experiencia, con desafíos, soluciones, stack e impacto según los datos disponibles.
- Tema claro y oscuro con preferencia guardada en el navegador.
- Diseño adaptable, navegación entre páginas con Astro y metadatos SEO, Open Graph y Twitter.
- Imágenes WebP con validación antes del build e imagen de respaldo mediante `SafeImage`.
- Formulario de contacto con validación en el navegador y envío a un servicio externo.

## Requisitos

- **Bun 1.3.14**, versión declarada en `package.json`.
- **Node.js 22.12.0 o superior**, requerido por la versión de Astro utilizada.
- Una cuenta de Cloudflare con acceso a Workers para desplegar.

## Desarrollo local

Desde la raíz del repositorio, instala las dependencias y levanta el servidor:

```sh
bun install --frozen-lockfile
bun run dev
```

Abre [localhost:3000](http://localhost:3000). El puerto está definido en `astro.config.mjs`; si está ocupado, utiliza la dirección que indique la terminal.

El archivo `bun.lock` conserva las versiones de las dependencias. Usa `bun install` cuando necesites actualizarlo tras modificar `package.json`.

## Comandos

| Comando | Función |
| --- | --- |
| `bun run dev` | Inicia el servidor de desarrollo de Astro. |
| `bun run prebuild` | Valida los formatos de las imágenes de `public/`. |
| `bun run build` | Ejecuta la validación de imágenes y genera el build en `dist/`. |
| `bun run preview` | Genera el build y lo ejecuta localmente con `wrangler dev`. |
| `bun run start` | Genera el build y lo previsualiza con `astro preview`. |
| `bun run astro --help` | Muestra la ayuda del CLI de Astro. |
| `bun run deploy` | Genera el build y lo publica con `wrangler deploy`. |
| `bun run cf-typegen` | Genera tipos para el entorno y los bindings de Cloudflare. |

Bun ejecuta automáticamente `prebuild` antes de `build`. Si se detectan imágenes con formatos no permitidos, el build se detiene. Los comandos `preview`, `start` y `deploy` también construyen el proyecto primero.

Para comprobar el resultado en el entorno local de Cloudflare:

```sh
bun run preview
```

Utiliza la URL que muestre Wrangler en la terminal.

## Estructura del proyecto

```text
.
├── public/                    # Imágenes WebP, tarjeta social y favicons
├── scripts/
│   └── validate-images.ts      # Validación de formatos antes del build
├── src/
│   ├── assets/
│   │   ├── data.ts             # Exportaciones tipadas de los datos JSON
│   │   ├── index.js            # Tema, navegación y formulario de contacto
│   │   └── style.css           # Estilos globales
│   ├── components/             # Secciones y componentes reutilizables
│   ├── data/                   # Proyectos, experiencia, tecnologías y formación
│   ├── layouts/
│   │   └── Layout.astro        # Estructura HTML, metadatos y recursos compartidos
│   ├── pages/
│   │   ├── index.astro         # Página principal
│   │   └── [id].astro          # Detalles de proyectos y experiencia
│   ├── types/portfolio.ts      # Interfaces de los datos del portafolio
│   └── middleware.ts          # Controles de solicitudes de imágenes
├── astro.config.mjs           # URL del sitio, puerto e integraciones
├── tailwind.config.cjs
├── wrangler.jsonc             # Worker y binding de assets
├── bun.lock
└── package.json
```

## Actualizar contenido

| Contenido | Archivo |
| --- | --- |
| Proyectos y casos de estudio | `src/data/projects.json` |
| Experiencia laboral | `src/data/experience.json` |
| Tecnologías y sus iconos | `src/data/technologies.json` |
| Categorías de habilidades | `src/data/skills.json` |
| Educación, certificaciones e idiomas | `src/data/credentials.json` |
| Iconos y enlaces de botones | `src/data/buttons.json` |

`src/assets/data.ts` importa estos JSON y expone los datos a los componentes. Las interfaces están definidas en `src/types/portfolio.ts`.

Para cambiar los textos de presentación y los enlaces de contacto, edita los componentes correspondientes en `src/components/`, especialmente `ProfilePicture.astro`, `About.astro`, `Navbar.astro` y `Form.astro`. Los estilos generales están en `src/assets/style.css` y `tailwind.config.cjs`.

### Imágenes y páginas de detalle

Guarda las imágenes de proyectos y experiencia en `public/` con extensión `.webp`. El campo `image` de los JSON contiene el nombre **sin extensión**; por ejemplo, `image-simpe-bridge` corresponde a `public/image-simpe-bridge.webp` y a la página `/image-simpe-bridge/`.

La ruta `[id].astro` genera las páginas a partir de ese campo y elimina rutas duplicadas. `SafeImage` utiliza `public/no-image.webp` como respaldo cuando no encuentra una imagen.

El validador rechaza archivos `.png`, `.jpg`, `.jpeg`, `.gif`, `.svg` y `.bmp` en `public/`, excepto dentro de `public/favicon/` y para `public/social-card.svg`.

### Formulario de contacto

El formulario envía un `POST` con `{ name, email, message }` al endpoint definido en la constante `URLEMAIL` de `src/assets/index.js`, actualmente `https://email-portfolio.tonyml.com`. El servicio de correo se mantiene fuera de este repositorio; para usar otro servicio, actualiza esa constante y verifica que acepte solicitudes desde el dominio del portafolio.

## Despliegue en Cloudflare Workers

El proyecto incluye el adaptador `@astrojs/cloudflare`. `wrangler.jsonc` configura el Worker `portfolio-astro`, la entrada de servidor del adaptador y el binding `ASSETS` para `dist/`.

Autentica Wrangler y ejecuta el despliegue:

```sh
bunx wrangler login
bun run deploy
```

Para utilizar otro dominio, actualiza `site` y `server.allowedHosts` en `astro.config.mjs`, revisa la URL de respaldo en `src/layouts/Layout.astro` y configura el dominio del Worker en Cloudflare. La URL canónica de Astro y el dominio de publicación deben coincidir.

## Contribuciones

Abre un Pull Request con una descripción del cambio. Antes de enviarlo, ejecuta `bun run build`; si modificas la interfaz o el contenido, revisa también la página principal y los detalles afectados con `bun run preview`.

## Licencia

Este proyecto se distribuye bajo la [licencia MIT](LICENSE). Copyright © 2026 Antony Monge.
