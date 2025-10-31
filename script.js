// ==================== EFEITO DE DIGITAÇÃO NO NOME ====================
const assinatura = document.getElementById("assinatura");
const nome = "Ector Gabriel";
let index = 0;

function digitar() {
  if (index < nome.length) {
    assinatura.innerHTML += nome.charAt(index);
    index++;
    setTimeout(digitar, 150);
  }
}
window.onload = digitar;

// ==================== MENU RESPONSIVO ====================
const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
  menuBtn.classList.toggle("active");
});


// ==================== ANIMAÇÕES AO ROLAR (SCROLLREVEAL) ====================
// Biblioteca: https://scrollrevealjs.org
// Lembre de incluir no HTML antes do script.js:
// <script src="https://unpkg.com/scrollreveal"></script>

ScrollReveal({
  reset: true, // ✅ repete sempre a animação
  distance: '60px',
  duration: 1200,
  delay: 150,
  easing: 'ease-in-out'
});

// --- HERO (entrada principal) ---
ScrollReveal().reveal('.hero-text', { origin: 'left' });
ScrollReveal().reveal('.hero-photo', { origin: 'right' });

// --- TÍTULOS DAS SEÇÕES ---
ScrollReveal().reveal('.section-title', { origin: 'top' });

// --- CONTEÚDO GERAL ---
ScrollReveal().reveal('.section p, .skills img, .education-item, .project-item, .contact-item', {
  origin: 'bottom',
  interval: 100
});

// --- LINKS E BOTÕES (projetos e contatos) ---
ScrollReveal().reveal('.project-link, .contact-item img', {
  origin: 'bottom',
  distance: '30px',
  duration: 800,
  interval: 100,
  scale: 0.9
});
