/*=============== View Transition (Scale) ===============*/
document.addEventListener('astro:page-load', () => {
   for (const element of document.querySelectorAll('#fade-image')) {
      element.classList.remove('scale-90');
   }
});

document.addEventListener('astro:page-load', () => {
   /*=============== Slider ===============*/
   const wrapper = document.querySelector('[data-tech-wrapper]');
   let copy = document.querySelector('.tech-card')?.cloneNode(true);
   wrapper?.append(copy);

   /*=============== Modal ===============*/
   const modal = document.querySelector('[data-tech-modal]');
   const h1 = document.querySelector('[data-tech-h1]');
   const stop = document.querySelector('[data-tech-stop]');

   h1?.addEventListener('click', () => {
      modal.classList.toggle('hidden');
      modal.classList.add('flex');
   });

   wrapper?.addEventListener('click', () => {
      modal.classList.toggle('hidden');
      modal.classList.add('flex');
   });

   modal?.addEventListener('click', () => {
      modal.classList.remove('flex');
      modal.classList.toggle('hidden');
   });

   stop?.addEventListener('click', (e) => e.stopPropagation());

   addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
         if (modal && !modal.classList.contains('hidden')) {
            modal.classList.remove('flex');
            modal.classList.add('hidden');
         }
         if (contactModal && !contactModal.classList.contains('hidden')) {
            closeContactModal();
         }
      }
   });

   /*=============== Contact Modal ===============*/
   const contactModal = document.querySelector('[data-contact-modal]');
   const contactOpenBtns = document.querySelectorAll('[data-contact-open]');
   const contactCloseBtns = document.querySelectorAll('[data-contact-close]');
   const resetBtn = document.getElementById('reset-btn');

   function openContactModal() {
      contactModal.classList.remove('hidden');
      contactModal.classList.add('flex');
      document.body.style.overflow = 'hidden';
   }

   function closeContactModal() {
      contactModal.classList.remove('flex');
      contactModal.classList.add('hidden');
      document.body.style.overflow = '';
   }

   contactOpenBtns.forEach((btn) => btn.addEventListener('click', (e) => {
      e.preventDefault();
      openContactModal();
   }));

   contactCloseBtns.forEach((btn) => btn.addEventListener('click', closeContactModal));

   contactModal?.addEventListener('click', closeContactModal);
   document.querySelector('[data-contact-stop]')?.addEventListener('click', (e) => e.stopPropagation());

   resetBtn?.addEventListener('click', () => {
      document.getElementById('form')?.reset();
   });

   /*=============== Contact Form → Cloudflare Worker ===============*/
   const btn = document.getElementById('button');

   document.getElementById('form')?.addEventListener('submit', async function (event) {
      event.preventDefault();

      const name = this.elements['from_name'].value.trim();
      const email = this.elements['from_email'].value.trim();
      const message = this.elements['message'].value.trim();

      if (!name || !email || !message) {
         showToast('Por favor, completa todos los campos.', 'error');
         return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
         showToast('Por favor, ingresa un correo electrónico válido.', 'error');
         return;
      }

      btn.textContent = 'Enviando...';
      btn.disabled = true;

      try {
         const response = await fetch('https://contact-worke.antony-mongelopez.workers.dev', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, message }),
         });

         const data = await response.json();

         if (response.ok && data.success) {
            btn.textContent = 'Mensaje enviado ✓';
            showToast('¡Mensaje enviado con éxito!', 'success');
            this.reset();
         } else {
            throw new Error(data.error || 'Error desconocido');
         }
      } catch (err) {
         showToast('Error al enviar el mensaje: ' + err.message, 'error');
         btn.textContent = 'Enviar mensaje';
      } finally {
         btn.disabled = false;
         setTimeout(() => {
            btn.textContent = 'Enviar mensaje';
         }, 3000);
      }
   });

   /*=============== Grayscale Scroll Reveal ===============*/
   function revealImage(el) {
      el.classList.remove('grayscale', 'opacity-80');
      el.classList.add('grayscale-0', 'opacity-100');
   }

   const revealObserver = new IntersectionObserver(
      (entries) => {
         entries.forEach((entry) => {
            if (entry.isIntersecting) {
               const delay = parseInt(entry.target.dataset.revealDelay ?? '0', 10);
               setTimeout(() => revealImage(entry.target), delay);
               revealObserver.unobserve(entry.target);
            }
         });
      },
      { threshold: 0.4 }
   );
   document.querySelectorAll('[data-grayscale-reveal]').forEach((el) => revealObserver.observe(el));

   /* En móvil: primer toque en cualquier parte revela la imagen de perfil */
   document.addEventListener('touchstart', function onFirstTouch() {
      const profileImg = document.querySelector('[data-grayscale-reveal][data-reveal-delay]');
      if (profileImg) revealImage(profileImg);
      document.removeEventListener('touchstart', onFirstTouch);
   }, { once: true, passive: true });

   /*=============== Toast ===============*/
   function showToast(message, type = 'success') {
      const toast = document.createElement('div');
      toast.className = `toast show ${type}`;
      toast.textContent = message;

      document.body.appendChild(toast);

      setTimeout(() => {
         toast.classList.add('hide');
         setTimeout(() => {
            if (toast.parentNode) {
               toast.parentNode.removeChild(toast);
            }
         }, 400);
      }, 3500);
   }

});