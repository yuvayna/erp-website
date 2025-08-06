const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', e => {
  e.preventDefault();

  if (!form.checkValidity()) {
    formMessage.textContent = 'Please fill in all required fields correctly.';
    return;
  }

  formMessage.textContent = 'Sending...';

  setTimeout(() => {
    formMessage.textContent = 'Thank you for your message! I will get back to you soon :)';
    form.reset();
  }, 1500);
});

