NEVER use emojis; keep responses professional, concise, technical; only comment complex logic; markdown only if requested.

ALWAYS prioritize MCP servers: backend/NestJS → filesystem, GitHub, memory; frontend/React → 21st, Magic UI, shadcn/ui, filesystem; docs → Upstash Conte; data → memory/knowledge graph, Puppeteer.

Auto-detect project type via package.json, file extensions, and folder structure; switch MCP tools accordingly; never explain selection unless asked.

Start sessions reading Session_starter.md, then README.md, then project files; update logs with Date | Summary using 2026-01-17.

Follow established coding standards, architectural decisions, and design patterns; maintain consistent style; reference project portfolio-astro, type Node.js Application, stack - Node.js
- JavaScript/TypeScript
- NPM/Yarn
- Express/Fastify.

Expose workspace context using file references, selections, symbols; detect build systems, configs, scripts, testing frameworks, and adjust suggestions.

Break complex tasks into smaller steps; offer multiple approaches with trade-offs; confirm understanding before major changes.

Generate code matching style, naming, architecture; include error handling, validation, meaningful comments, and testable logic; never include secrets.

Maintain session memory, track technical constraints, solved problems, and MCP usage; leverage memory for continuity and productivity.

Optimize prompts: be specific, define output format, split tasks, provide sample inputs/outputs, and allow Copilot to repeat tasks; support variables portfolio-astro, Node.js Application, 2026-01-17, - Node.js
- JavaScript/TypeScript
- NPM/Yarn
- Express/Fastify, - `npm start`
- `npm run dev`
- `npm test`
- `npm install`.


## Tasks

- [x] Analyze user's repositories for portfolio content
- [x] Update `src/assets/data.js` with 4 new major projects
- [ ] Add missing images to `public/`:
    - `image-hogar-ancianos.jpg`
    - `image-hangfire-automation.jpg`
    - `image-task-manager.jpg`
    - `image-cortinas.jpg`
    - `image-tribux.jpg`
    - `image-aml-audio.jpg`
    - `image-ollama-chat.jpg`
    - `image-uber-clone.jpg`
    - `image-tico-bingo.jpg`
    - `image-restaurante-java.jpg`
    - `image-armeria-prime.jpg`

2026-01-16 | Refactored `ProfilePicture.astro` to provide 4 UI/UX design options (Split Screen, Avatar Centered, Cinematic Hero, Glassmorphism) alongside the original code, allowing the user to easily switch and test different layouts.
2026-01-16 | Fixed title truncation in `data.js` for "Automatización Empresarial con Hangfire".
2026-01-16 | Improved styling in `[id].astro`: added padding to prevent text overlap and simplified button positioning with `gap-8`.
2026-01-16 | Fixed TypeScript error in `[id].astro` by adding a null check for `card` with a redirect fallback.
2026-01-16 | Added full list of 11 custom projects to `data.js` (inc. Uber, TicoBingo, Armeria). Pending image assets.
2026-01-16 | Translated all new project descriptions in `data.js` to Spanish per user request.
2026-01-20 | Fixed relative image path issue in src/pages/[id].astro to prevent 404s on subroutes; identified missing image-cortinas.jpg
