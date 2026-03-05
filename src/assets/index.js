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
         // Tech modal
         if (modal && !modal.classList.contains('hidden')) {
            modal.classList.remove('flex');
            modal.classList.add('hidden');
         }
         // Contact modal
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

   /*=============== Email JS ===============*/
   // Referencia al botón
   const btn = document.getElementById('button');

   // Evento submit
   document.getElementById('form')?.addEventListener('submit', function (event) {
      event.preventDefault();

      // Validar campos obligatorios
      const name = this.elements['from_name'].value.trim();
      const email = this.elements['from_email'].value.trim();
      const message = this.elements['message'].value.trim();

      if (!name || !email || !message) {
         showToast('Por favor, completa todos los campos.', 'error');
         return;
      }

      // Validar formato básico de email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
         showToast('Por favor, ingresa un correo electrónico válido.', 'error');
         return;
      }

      // Agregar la hora actual al campo oculto
      const timeField = document.getElementById('time');
      if (timeField) {
         timeField.value = new Date().toLocaleString();
      }

      btn.textContent = 'Enviando...';

      const serviceID = 'service_6gch5fb';
      const templateID = 'template_qc6164s';

      emailjs.sendForm(serviceID, templateID, this).then(
         () => {
            btn.textContent = 'Mensaje enviado';
            showToast('¡Mensaje enviado con éxito!', 'success');
            this.reset(); // Limpia el formulario
            setTimeout(() => {
               btn.textContent = 'Enviar mensaje';
            }, 3000); // vuelve a "Enviar mensaje" después de 3 segundos
         },
         (err) => {
            btn.textContent = 'Enviar mensaje';
            showToast('Error al enviar el mensaje: ' + (err?.text || 'Error desconocido'), 'error');
         }
      );
   });

   // Función JS para mostrar toast
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
