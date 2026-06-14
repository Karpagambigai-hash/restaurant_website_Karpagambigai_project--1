const menuToggle =
document.querySelector(".menu-toggle");

const siteNav =
document.querySelector(".site-nav");

menuToggle.addEventListener("click", () => {

  siteNav.classList.toggle("open");

});

// Theme toggle

const themeToggle = document.getElementById(".theme-toggle");

const html = document.documentElement;

themeToggle.addEventListener("click", () => {

  if (html.getAttribute("data-theme") === "dark") {

    html.setAttribute("data-theme", "light");

    themeToggle.innerHTML = "🌙";

  } else {

    html.setAttribute("data-theme", "dark");

    themeToggle.innerHTML = "☀️";
  }
});

    
// Reservation form handling
const reservationForm = document.getElementById('reservation-form');
const formMessage = document.getElementById('form-message');

if (reservationForm) {
  reservationForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = reservationForm.guestName.value.trim();
    const email = reservationForm.guestEmail.value.trim();

    if (!name || !email) {
      formMessage.textContent = 'Please provide your name and email.';
      formMessage.classList.remove('success');
      return;
    }

    // Contact form handling
    const contactForm = document.getElementById('contact-form');
    const contactFormMessage = document.getElementById('contact-form-message');

    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = contactForm.name.value.trim();
        const email = contactForm.email.value.trim();
        const message = contactForm.message.value.trim();

        if (!name || !email || !message) {
          contactFormMessage.textContent = 'Please complete all required fields.';
          contactFormMessage.classList.remove('success');
          return;
        }

        // Simulate sending the message
        contactFormMessage.textContent = 'Thanks — your message was sent. We will get back to you soon.';
        contactFormMessage.classList.add('success');
        contactForm.reset();

        setTimeout(() => {
          contactFormMessage.textContent = '';
          contactFormMessage.classList.remove('success');
        }, 6000);
      });
    }
    // Simulate form submission (replace with real API/mail integration)
    formMessage.textContent = 'Reservation request sent. We will contact you soon.';
    formMessage.classList.add('success');
    reservationForm.reset();

    setTimeout(() => {
      formMessage.textContent = '';
      formMessage.classList.remove('success');
    }, 6000);
  });
}