document.addEventListener("DOMContentLoaded", function () {

  // ===============================
  // LOGIN DE USUÁRIO
  // ===============================
  const formLogin = document.getElementById("form-login");
  const msgLogin = document.getElementById("mensagem-login");

  if (formLogin && msgLogin) {
    formLogin.addEventListener("submit", (e) => {
      e.preventDefault();

      const usuario = document.getElementById("usuario").value.trim();
      const senha = document.getElementById("senha").value.trim();

      if (usuario === "" || senha === "") {
        mostrarMensagem(msgLogin, "Preencha todos os campos!", "#ffaaaa");
        return;
      }

      mostrarMensagem(msgLogin, "Login realizado com sucesso! ✅", "#a9e4a9");
      formLogin.reset();
    });
  }

  // ===============================
  // CADASTRO DE E-MAIL
  // ===============================
  const formEmail = document.getElementById("form-email");
  const msgEmail = document.getElementById("mensagem-sucesso");

  if (formEmail && msgEmail) {
    formEmail.addEventListener("submit", (e) => {
      e.preventDefault();

      const emailEl = document.getElementById("email");
      const email = emailEl ? emailEl.value.trim() : "";

      if (email === "" || !email.includes("@")) {
        mostrarMensagem(msgEmail, "Por favor, insira um e-mail válido.", "#ffaaaa");
        return;
      }

      mostrarMensagem(msgEmail, "Conta criada com sucesso! 🎉", "#a9e4a9");
      formEmail.reset();
    });
  }

  // ===============================
  // FUNÇÃO GENÉRICA PARA MENSAGENS
  // ===============================
  function mostrarMensagem(elemento, texto, cor) {
    if (!elemento) return;

    elemento.textContent = texto;
    elemento.style.color = cor || "";
    elemento.classList.add("visivel");

    if (elemento.timeout) {
      clearTimeout(elemento.timeout);
    }
    elemento.timeout = setTimeout(() => {
      elemento.classList.remove("visivel");
      elemento.timeout = null;
    }, 4000);
  }

});
