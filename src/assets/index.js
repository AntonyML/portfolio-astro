const THEME_KEY = "portfolio-theme";
const THEME_META_SELECTOR = "[data-dynamic-theme-color]";

function applyTheme(theme) {
  const root = document.documentElement;
  root.dataset.theme = theme;
  root.style.colorScheme = theme;

  const meta = document.querySelector(THEME_META_SELECTOR);
  if (meta) {
    meta.setAttribute("content", theme === "dark" ? "#111318" : "#f4efea");
  }

  document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
    button.setAttribute("aria-pressed", String(theme === "dark"));
  });

  document.querySelectorAll("[data-theme-label]").forEach((label) => {
    label.textContent = theme === "dark" ? "Activar modo claro" : "Activar modo oscuro";
  });
}

function initThemeToggle() {
  const current = document.documentElement.dataset.theme || "light";
  applyTheme(current);

  document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      localStorage.setItem(THEME_KEY, next);
      applyTheme(next);
    });
  });

  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
    if (!localStorage.getItem(THEME_KEY)) {
      applyTheme(event.matches ? "dark" : "light");
    }
  });
}

function initMobileNav() {
  const toggle = document.querySelector("[data-nav-toggle]");
  const panel = document.querySelector("[data-nav-panel]");
  const closeButtons = document.querySelectorAll("[data-nav-close]");

  if (!toggle || !panel) return;

  const setOpen = (open) => {
    toggle.setAttribute("aria-expanded", String(open));
    panel.toggleAttribute("data-open", open);
    document.body.style.overflow = open ? "hidden" : "";
  };

  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") !== "true";
    setOpen(open);
  });

  closeButtons.forEach((button) => button.addEventListener("click", () => setOpen(false)));
  panel.addEventListener("click", (event) => {
    if (event.target === panel) setOpen(false);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setOpen(false);
  });
}

function setStatus(message, type = "idle") {
  const status = document.querySelector("[data-form-status]");
  const liveRegion = document.querySelector("[data-live-region]");

  if (status) {
    status.textContent = message;
    if (type === "success" || type === "error") {
      status.setAttribute("data-status", type);
    } else {
      status.removeAttribute("data-status");
    }
  }

  if (liveRegion && (type === "success" || type === "error")) {
    liveRegion.textContent = message;
  }
}

function initContactForm() {
  const form = document.getElementById("contact-form");
  const submitButton = document.getElementById("contact-submit");
  const resetButton = document.getElementById("contact-reset");

  if (!(form instanceof HTMLFormElement) || !(submitButton instanceof HTMLButtonElement)) {
    return;
  }

  resetButton?.addEventListener("click", () => {
    form.reset();
    setStatus("Puedes escribir tu mensaje cuando quieras.");
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = String(formData.get("from_name") ?? "").trim();
    const email = String(formData.get("from_email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setStatus("Completa nombre, correo y mensaje para poder enviarlo.", "error");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus("Ingresa un correo electrónico válido antes de enviar el formulario.", "error");
      return;
    }

    const defaultLabel = submitButton.dataset.defaultLabel || "Enviar mensaje";
    submitButton.disabled = true;
    submitButton.textContent = "Enviando...";
    setStatus("Enviando mensaje...");

    try {
      const response = await fetch("https://contact-worke.antony-mongelopez.workers.dev", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "No fue posible enviar el mensaje.");
      }

      form.reset();
      setStatus("Mensaje enviado con éxito. Te responderé lo antes posible.", "success");
      submitButton.textContent = "Enviado";
    } catch (error) {
      const detail = error instanceof Error ? error.message : "Error desconocido";
      setStatus(`No se pudo enviar el mensaje: ${detail}`, "error");
      submitButton.textContent = defaultLabel;
    } finally {
      submitButton.disabled = false;
      window.setTimeout(() => {
        submitButton.textContent = submitButton.dataset.defaultLabel || "Enviar mensaje";
      }, 2200);
    }
  });
}

document.addEventListener("astro:page-load", () => {
  initThemeToggle();
  initMobileNav();
  initContactForm();
});
