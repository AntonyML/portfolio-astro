export const socials = [{ logo: 'bx bxl-youtube' }, { logo: 'bx bxl-linkedin-square' }, { logo: 'bx bxl-instagram' }, { logo: 'bx bxl-facebook-circle' }, { logo: 'bx bxl-github' }];

export const info = [
  { text: 'Sobre mí', id: 'about' },
  { text: 'Proyectos', id: 'projects' }
];


export const technologies = [
  // Lenguajes de programación
  { text: 'JavaScript', logo: 'bx bxl-javascript' },
  { text: 'TypeScript', logo: 'bx bxl-typescript' },
  { text: 'Python', logo: 'bx bxl-python' },
  { text: 'Kotlin', logo: 'https://cdn.simpleicons.org/kotlin' },
  { text: 'PHP', logo: 'bx bxl-php' },
  { text: 'C', logo: 'https://cdn.simpleicons.org/c' },
  { text: 'C++', logo: 'https://cdn.simpleicons.org/cplusplus' },
  { text: 'C#', logo: 'https://cdn.worldvectorlogo.com/logos/c--4.svg' },
  { text: 'Java', logo: 'bx bxl-java' },
  { text: 'Shell', logo: 'https://cdn.simpleicons.org/gnubash' },

  // Lenguajes de marcado / estilos
  { text: 'HTML', logo: 'bx bxl-html5' },
  { text: 'CSS', logo: 'bx bxl-css3' },

  // Frameworks / Librerías Frontend
  { text: 'React', logo: 'bx bxl-react' },
  { text: 'Vue', logo: 'bx bxl-vuejs' },
  { text: 'Angular', logo: 'bx bxl-angular' },
  { text: 'Svelte', logo: 'https://cdn.simpleicons.org/svelte' },
  { text: 'Next.js', logo: 'https://cdn.simpleicons.org/nextdotjs' },
  { text: 'Qwik', logo: 'https://cdn.simpleicons.org/qwik' },
  { text: 'Astro', logo: 'https://cdn.simpleicons.org/astro' },
  { text: 'Flutter', logo: 'https://cdn.simpleicons.org/flutter' },
  { text: 'Android', logo: 'bx bxl-android' },

  // Frameworks / Librerías Backend
  { text: 'Node.js', logo: 'bx bxl-nodejs' },
  { text: 'Laravel', logo: 'https://cdn.simpleicons.org/laravel' },
  { text: 'Symfony', logo: 'https://cdn.simpleicons.org/symfony' },
  { text: 'Django', logo: 'https://cdn.simpleicons.org/django' },
  { text: 'Flask', logo: 'https://cdn.simpleicons.org/flask' },
  { text: 'FastAPI', logo: 'https://cdn.simpleicons.org/fastapi' },
  { text: 'NestJS', logo: 'https://cdn.simpleicons.org/nestjs' },
   { text: 'Astro', logo: 'https://cdn.simpleicons.org/astro' },

  // Bases de datos
  { text: 'PostgreSQL', logo: 'bx bxl-postgresql' },
  { text: 'MySQL', logo: 'https://cdn.simpleicons.org/mysql' },
  { text: 'SQL Server', logo: 'https://static.cdnlogo.com/logos/m/6/microsoft-sql-server.svg' },
  { text: 'Oracle', logo: 'https://cdn.worldvectorlogo.com/logos/oracle-6.svg' },

  // Herramientas / Entornos / Plataformas
  { text: 'Git', logo: 'bx bxl-git' },
  { text: 'GitHub', logo: 'bx bxl-github' },
];




export const projects = [
   {
      title: 'Hogar de Ancianos - Sistema Integral',
      description:
         'Sistema de gestión ambicioso para hogar de ancianos. Arquitectura modular con Backend NestJS, Base de Datos MySQL separada y estrategias de despliegue en microservicios, asegurando escalabilidad y alta disponibilidad para manejo de expedientes y administración. Proyecto hospedado en GitLab UCR.',
      image: 'image-hogar-ancianos',
      color: '#f44336',
   },
   {
      title: 'Automatización Empresarial con Hangfire',
      description:
         'Ecosistema de automatización basado en microservicios y orquestación de tareas en segundo plano. Utiliza ASP.NET Core con Hangfire para gestión de colas, SQL Server, y Kafka para mensajería distribuida. Incluye servidores dedicados para generación de PDFs, emails y notificaciones a Discord, integrados mediante una arquitectura robusta.',
      image: 'image-hangfire-automation',
      color: '#5c2d91',
   },
   {
      title: 'TaskManager Cross-Platform',
      description:
         'Sistema tipo JIRA multiplataforma. Backend robusto en Django REST Framework con soporte para prioridades, estados de tareas, carga de imágenes y asignación de usuarios. Diseñado para gestión ágil de proyectos con API RESTful autodocumentada.',
      image: 'image-task-manager',
      color: '#2196f3',
   },
   {
      title: 'E-Commerce Deco Pococí',
      description:
         'Plataforma web especializada para la gestión y proyección digital de "Deco Pococí". Funciona como catálogo digital y sistema de administración de inventario, modernizando las operaciones de la tienda de cortinas y decoración.',
      image: 'image-cortinas',
      color: '#9c27b0',
   },
   {
      title: 'Tribux - Facturación Pymes',
      description:
         'Aplicación SaaS para gestión tributaria. Arquitectura de microservicios con Frontend Next.js 15. Integra servicios especializados para facturación, generación de PDF y notificaciones, facilitando el cumplimiento fiscal de pequeñas empresas.',
      image: 'image-tribux',
      color: '#009688',
   },
   {
      title: 'AML Audio Tool - Media Downloader',
      description:
         'Desktop application built with Electron and Node.js for high-quality YouTube media downloads. Integrates yt-dlp and ffmpeg for format conversion, playlist processing, and concurrent file management.',
      image: 'image-aml-audio',
      color: '#E62117',
   },
   {
      title: 'Ollama AI Chat Interface',
      description:
         'Conversational web interface for local LLMs powered by Ollama. Developed with React, enabling private, offline-capable AI interactions with a clean, modern UI.',
      image: 'image-ollama-chat',
      color: '#212121',
   },
   {
      title: 'Uber Clone Microservices Platform',
      description:
         'Scalable ride-sharing backend engineered with Spring Boot (Java 17) and WebSockets. Features real-time tracking, layered architecture, comprehensive unit testing, and SQL Server integration.',
      image: 'image-uber-clone',
      color: '#000000',
   },
   {
      title: 'Concurrent Bingo System',
      description:
         'Multi-process simulation of a Bingo game developed in C for Linux. Demonstrates OS concurrency concepts using shared memory, semaphores, and message queues for synchronization.',
      image: 'image-tico-bingo',
      color: '#00796B',
   },
   {
      title: 'Restaurant Management App',
      description:
         'Java-based desktop application for restaurant administration. Handles order processing, inventory tracking, and billing with a MVC architecture and Swing interface.',
      image: 'image-restaurante-java',
      color: '#FF5722',
   },
   {
      title: 'Armeria Prime Management System',
      description:
         'Enterprise-grade inventory and sales system for an armory built with C# .NET and Windows Forms. Integrates PostgreSQL, auditing, and secure user management with a Material Design UI.',
      image: 'image-armeria-prime',
      color: '#3F51B5',
   },
];

export const buttons = [
   {
      github: 'bx bxl-github',
      demo: 'bx bx-desktop',
      back: 'bx bxs-left-arrow-circle',
      hrefgithub: 'https://github.com/AntonyML'
   },
];
