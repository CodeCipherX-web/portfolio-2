// ================== Scroll Animations ==================
const animatedEls = document.querySelectorAll('.fade-up, .fade-left, .fade-right');

function animateOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  animatedEls.forEach(el => {
    const elTop = el.getBoundingClientRect().top;
    if (elTop < triggerBottom) el.classList.add('visible');
    else el.classList.remove('visible');
  });
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// ================== Smooth Scroll ==================
function scrollToSection(id) {
  const target = document.getElementById(id);
  if (target) target.scrollIntoView({ behavior: 'smooth' });
}

// ================== Theme Toggle ==================
const themeToggle = document.getElementById('themeToggle');
const storedTheme = localStorage.getItem('theme');

if (storedTheme) document.documentElement.setAttribute('data-theme', storedTheme);

themeToggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme') || 'light';
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);

  const icon = themeToggle.querySelector('i');
  icon.classList.toggle('fa-sun');
  icon.classList.toggle('fa-moon');
});

// ================== Contact Form ==================
function sendMail(event) {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  const subject = encodeURIComponent(`Portfolio contact from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

  // Replace your-email@example.com with your actual email
  window.location.href = `mailto:your-email@example.com?subject=${subject}&body=${body}`;
  alert('Email client opened. Replace mailto with your real email.');
  return false;
}

function copyEmail() {
  navigator.clipboard.writeText('your-email@example.com')
    .then(() => alert('Email copied to clipboard'))
    .catch(err => alert('Failed to copy email'));
}

// ================== Welcome Popup ==================
window.addEventListener('load', () => {
  const popup = document.getElementById('welcomePopup');
  setTimeout(() => popup.classList.add('show'), 500);
});

function closePopup() {
  const popup = document.getElementById('welcomePopup');
  popup.classList.remove('show');
}

// ================== Optional Scroll Button ==================
// If you have a scroll button somewhere
const scrollButtons = document.querySelectorAll('.scroll-btn');
scrollButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const targetId = btn.dataset.target;
    if (targetId) scrollToSection(targetId);
  });
});

// ================== Footer Fade-In ==================
window.addEventListener('DOMContentLoaded', () => {
  const footer = document.querySelector('footer.fade-up');
  if (footer) {
    // Slight delay for smooth fade-up
    setTimeout(() => {
      footer.classList.add('visible');
    }, 200); // 200ms delay
  }
});
