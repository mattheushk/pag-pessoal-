// --- Ampliar imagem ao clicar ---
const img = document.getElementById("imagemPrincipal");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("imagemExpandida");

img.addEventListener("click", function () {
    modal.style.display = "flex";
    modalImg.src = this.src;
});

modal.addEventListener("click", function() {
    modal.style.display = "none";
});

// --- Botão Voltar ao Topo ---
const btn = document.getElementById("btnTopo");

window.addEventListener("scroll", function() {
    if (window.scrollY > 200) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
});

btn.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

