// Função para abrir o pop-up
function abrirPopup(imagemSrc, titulo, description, room) {
    document.getElementById("popup-img").src = imagemSrc;
    document.getElementById("popup-title").innerText = titulo;
    document.getElementById("popup-legend").innerText = description;
    document.getElementById("popup-room").innerText = room;
    document.getElementById("popup").style.display = "flex"; // Alterado para "flex"
}

// Função para fechar o pop-up
function fecharPopup() {
    document.getElementById("popup").style.display = "none";
}

// Ocultar o pop-up quando o conteúdo da página estiver carregado
document.addEventListener("DOMContentLoaded", function() {
    fecharPopup(); // Chama a função para fechar o pop-up
});

// Adicionar evento de clique às cartas
document.querySelectorAll(".carta").forEach(function(carta) {
    carta.addEventListener("click", function() {
        var imgSrc = this.getAttribute("data-img");
        var titulo = this.getAttribute("data-country");
        var description = this.getAttribute("data-legend");
        var room = this.getAttribute("data-room");
        abrirPopup(imgSrc, titulo, description, room);
    });
// Função para abrir o pop-up
function abrirPopup(imagemSrc, titulo, description, room) {
    document.getElementById("popup-img").src = imagemSrc;
    document.getElementById("popup-title").innerText = titulo;
    document.getElementById("popup-legend").innerText = description;
    document.getElementById("popup-room").innerText = room;
    document.getElementById("popup").style.display = "flex"; // Alterado para "flex"
}

// Função para fechar o pop-up
function fecharPopup() {
    document.getElementById("popup").style.display = "none";
}

// Ocultar o pop-up quando o conteúdo da página estiver carregado
document.addEventListener("DOMContentLoaded", function() {
    fecharPopup(); // Chama a função para fechar o pop-up
});

// Adicionar evento de clique às cartas
document.querySelectorAll(".carta").forEach(function(carta) {
    carta.addEventListener("click", function() {
        var imgSrc = this.getAttribute("data-img");
        var titulo = this.getAttribute("data-country");
        var description = this.getAttribute("data-legend");
        var room = this.getAttribute("data-room");
        abrirPopup(imgSrc, titulo, description, room);
    });
});