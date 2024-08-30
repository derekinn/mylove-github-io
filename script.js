const botaoNao = document.getElementById('nao');
const resposta = document.getElementById('resposta');
const audio = document.getElementById('audio');
const body = document.body;
let isPlaying = false;

botaoNao.addEventListener('mousemove', () => {
    setTimeout(() => {
        const areaLargura = 300; 
        const areaAltura = 150; 

        const maxX = window.innerWidth - areaLargura - botaoNao.offsetWidth;
        const maxY = window.innerHeight - areaAltura - botaoNao.offsetHeight;

        const randomX = Math.max(0, Math.floor(Math.random() * maxX));
        const randomY = Math.max(0, Math.floor(Math.random() * maxY));

        botaoNao.style.left = randomX + 'px';
        botaoNao.style.top = randomY + 'px';
    }, 10);
});

document.getElementById('sim').addEventListener('click', () => {
    if (isPlaying) {
        resposta.style.display = 'none';
        audio.pause();
        audio.currentTime = 0; // Reseta o áudio para o início
        body.style.backgroundImage = ''; // Remove a imagem de fundo
        isPlaying = false;
    } else {
        resposta.style.display = 'block';
        audio.play();
        body.style.backgroundImage = 'url("foto.png")'; // Define a imagem de fundo
        isPlaying = true;
    }
});
