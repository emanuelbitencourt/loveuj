// Função para alternar o menu hambúrguer
function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('active');
}

// Função para fechar o menu
function closeMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.remove('active');
}

// Fechar o menu automaticamente se sair do modo celular
window.addEventListener('resize', function() {
    const menu = document.getElementById('mobile-menu');
    if (window.innerWidth > 600) {
        menu.classList.remove('active');
    }
});

// Defina a data de início (01/07/2024 às 00:00)
// Defina a data de início (01/07/2024 às 00:00)
const dataInicio = new Date("2024-07-01T00:00:00");

// Função para atualizar o contador
function atualizarContador() {
    const agora = new Date();  // Data e hora atuais
    const tempoPassado = agora - dataInicio;  // Diferença em milissegundos

    // Calcule o tempo em dias, horas, minutos e segundos
    const segundos = Math.floor(tempoPassado / 1000) % 60;
    const minutos = Math.floor(tempoPassado / (1000 * 60)) % 60;
    const horas = Math.floor(tempoPassado / (1000 * 60 * 60)) % 24;
    const dias = Math.floor(tempoPassado / (1000 * 60 * 60 * 24));

    // Exiba o contador em formato de lista
    const contador = document.getElementById("contador-tempo");
    contador.innerHTML = `
        Estamos juntos há:<br>
        ${dias} dias<br>
        ${horas} horas<br>
        ${minutos} minutos<br>
        ${segundos} segundos
    `;
}

// Atualize o contador a cada segundo
setInterval(atualizarContador, 1000);

let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;

function showSlide(index) {
    // Esconde todas as imagens
    slides.forEach(slide => slide.style.display = 'none');
    
    // Exibe a imagem atual
    slides[index].style.display = 'block';
}

function moveSlide(direction) {
    currentSlide += direction;
    
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1; // Se for menor que 0, volta para a última imagem
    }
    
    if (currentSlide >= totalSlides) {
        currentSlide = 0; // Se for maior que o total, vai para a primeira imagem
    }
    
    showSlide(currentSlide); // Exibe a nova imagem
}

// Inicializa o carrossel, mostrando a primeira imagem
showSlide(currentSlide);

window.onload = function() {
    var heartImage = document.getElementById('heartImage');
    heartImage.style.display = 'block';  /* Faz a imagem aparecer quando a página for carregada */
  }
  