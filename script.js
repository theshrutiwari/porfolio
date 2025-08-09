// Smooth scroll navigation
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// Typewriter effect
const typewriterTexts = [
  "Data Analyst",
  "Machine Learning Enthusiast",
  "Software Engineer"
];
let typeIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100;
const erasingSpeed = 50;
const delayBetweenTexts = 1500;
const typewriterElement = document.getElementById("typewriter");

function typeWriter() {
  const currentText = typewriterTexts[typeIndex];
  
  if (isDeleting) {
    typewriterElement.textContent = currentText.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      typeIndex = (typeIndex + 1) % typewriterTexts.length;
      setTimeout(typeWriter, 500);
    } else {
      setTimeout(typeWriter, erasingSpeed);
    }
  } else {
    typewriterElement.textContent = currentText.substring(0, charIndex++);
    if (charIndex > currentText.length) {
      isDeleting = true;
      setTimeout(typeWriter, delayBetweenTexts);
    } else {
      setTimeout(typeWriter, typingSpeed);
    }
  }
}
document.addEventListener("DOMContentLoaded", typeWriter);

// Fade-in animation with staggered achievements
const fadeElements = document.querySelectorAll(".fade-in");
const achievementCards = document.querySelectorAll(".achievement");

function checkFadeIn() {
  const triggerBottom = window.innerHeight * 0.85;

  fadeElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < triggerBottom) {
      el.classList.add("visible");
    }
  });

  achievementCards.forEach((card, index) => {
    const elementTop = card.getBoundingClientRect().top;
    if (elementTop < triggerBottom) {
      setTimeout(() => {
        card.classList.add("visible");
      }, index * 200); // 200ms stagger
    }
  });
}

window.addEventListener("scroll", checkFadeIn);
window.addEventListener("load", checkFadeIn);

// Contact form behavior
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for your message! I will get back to you soon.');
  this.reset();
});

