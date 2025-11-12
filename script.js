document.addEventListener("DOMContentLoaded", () => {

  // ===========================
  // FUNÇÃO GENÉRICA DE MENSAGENS
  // ===========================
  function mostrarMensagem(elemento, texto, cor) {
    elemento.textContent = texto;
    elemento.style.color = cor;
    elemento.classList.add("visivel");

    clearTimeout(elemento.timeout);
    elemento.timeout = setTimeout(() => {
      elemento.classList.remove("visivel");
      elemento.timeout = null;
    }, 4000);
  }

  // ===========================
  // CADASTRO DE E-MAIL
  // ===========================
  const formEmail = document.getElementById("form-email");
  const msgEmail = document.getElementById("mensagem-email");

  formEmail.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value.trim();

    if (!email.includes("@")) {
      mostrarMensagem(msgEmail, "Por favor, insira um e-mail válido.", "#c62828");
      return;
    }

    mostrarMensagem(msgEmail, "Conta criada com sucesso! 🎉", "#2e7d32");
    formEmail.reset();
  });

  // ===========================
  // LOGIN DE USUÁRIO
  // ===========================
  const formLogin = document.getElementById("form-login");
  const msgLogin = document.getElementById("mensagem-login");

  formLogin.addEventListener("submit", (e) => {
    e.preventDefault();
    const usuario = document.getElementById("usuario").value.trim();
    const senha = document.getElementById("senha").value.trim();

    if (usuario === "" || senha === "") {
      mostrarMensagem(msgLogin, "Preencha todos os campos!", "#c62828");
      return;
    }

    mostrarMensagem(msgLogin, "Login realizado com sucesso! ✅", "#2e7d32");
    formLogin.reset();
  });

});
