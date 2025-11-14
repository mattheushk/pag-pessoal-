// ===== 1. Tema claro/escuro =====
const botaoTema = document.getElementById("tema-btn");
let temaClaro = false;

botaoTema.addEventListener("click", () => {
  temaClaro = !temaClaro;

  document.body.classList.toggle("light");

  botaoTema.textContent = temaClaro 
    ? "🌙 Modo Escuro" 
    : "☀️ Modo Claro";
});

// ===== 2. Efeito nas imagens =====
document.querySelectorAll('.atividade').forEach(a => {
  a.addEventListener('mouseover', () => {
    a.style.transform = 'scale(1.05)';
  });
  a.addEventListener('mouseout', () => {
    a.style.transform = 'scale(1)';
  });
});
