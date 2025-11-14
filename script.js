// ===== 1. Efeito de zoom nos ícones do topo =====
document.querySelectorAll('.icone').forEach(icon => {
  icon.addEventListener('mouseenter', () => {
    icon.style.transform = 'rotate(10deg) scale(1.3)';
  });
  icon.addEventListener('mouseleave', () => {
    icon.style.transform = 'rotate(0deg) scale(1)';
  });
});

// ===== 2. Saudação dinâmica =====
window.addEventListener('load', () => {
  const hora = new Date().getHours();
  let saudacao = '';

  if (hora < 12) saudacao = 'Bom dia!';
  else if (hora < 18) saudacao = 'Boa tarde!';
  else saudacao = 'Boa noite!';

  alert(`${saudacao} Seja bem-vindo(a) à minha página!`);
});

// ===== 3. Clique nas imagens com efeito =====
const atividades = document.querySelectorAll('.atividade');
atividades.forEach(a => {
  a.addEventListener('click', () => {
    a.classList.toggle('ativo');
    if (a.classList.contains('ativo')) {
      a.style.filter = 'brightness(1.4)';
    } else {
      a.style.filter = 'brightness(1)';
    }
  });
});

// ===== 4. Botão de rolar ao topo =====
const botaoTopo = document.createElement('button');
botaoTopo.textContent = "⬆️ Topo";
botaoTopo.classList.add('btn-topo');
document.body.appendChild(botaoTopo);

botaoTopo.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Estilo do botão
const estilo = document.createElement('style');
estilo.textContent = `
  .btn-topo {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: #c44a2d;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1.1rem;
    display: none;
  }
`;
document.head.appendChild(estilo);

// Mostrar botão quando rolar
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) botaoTopo.style.display = 'block';
  else botaoTopo.style.display = 'none';
});

// ===== 5. Efeito de fade-in quando aparece na tela =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.3 })

atividades.forEach(a => {
  a.style.opacity = 0;
  a.style.transform = 'translateY(30px)';
  a.style.transition = 'all 1s';
  observer.observe(a);
});
