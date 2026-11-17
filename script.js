const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#primary-nav');

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isExpanded));
    navigation.classList.toggle('is-open', !isExpanded);
  });

  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      menuButton.setAttribute('aria-expanded', 'false');
      navigation.classList.remove('is-open');
    }
  });
}

const newsletterForm = document.querySelector('#newsletter-form');
const formMessage = document.querySelector('#form-message');

if (newsletterForm && formMessage) {
  newsletterForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!newsletterForm.reportValidity()) return;
    formMessage.textContent = 'Thanks! This sample site does not send or store email addresses.';
  });
}
