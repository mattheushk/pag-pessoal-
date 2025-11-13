// Funções JS interativas
document.querySelectorAll('.icone').forEach(icon => {
  icon.addEventListener('mouseenter', () => {
    icon.style.transform = 'rotate(10deg) scale(1.3)';
  });
  icon.addEventListener('mouseleave', () => {
    icon.style.transform = 'rotate(0deg) scale(1)';
  });
});

window.addEventListener('load', () => {
  const hora = new Date().getHours();
  let saudacao = hora < 12 ? 'Bom dia!' : hora < 18 ? 'Boa tarde!' : 'Boa noite!';
  alert(`${saudacao} Seja bem-vindo(a) à minha página!`);
});

const atividades = document.querySelectorAll('.atividade');
atividades.forEach(a => {
  a.addEventListener('click', () => {
    a.classList.toggle('ativo');
    a.style.filter = a.classList.contains('ativo') ? 'brightness(1.4)' : 'brightness(1)';
  });
});

const botaoTopo = document.createElement('button');
botaoTopo.textContent = "⬆️ Topo";
botaoTopo.classList.add('btn-topo');
document.body.appendChild(botaoTopo);

botaoTopo.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

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

window.addEventListener('scroll', () => {
  botaoTopo.style.display = window.scrollY > 200 ? 'block' : 'none';
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.3 });

atividades.forEach(a => {
  a.style.opacity = 0;
  a.style.transform = 'translateY(30px)';
  a.style.transition = 'all 1s';
  observer.observe(a);
});
