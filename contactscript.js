document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
  
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const name = nameInput.value;
      const email = emailInput.value;
      const message = messageInput.value;
  
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Message:', message);
  
      contactForm.reset();
    });
  });
  