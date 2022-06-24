const bart = document.querySelector('.bart');
const sk = document.querySelector('.sk');
const sim = document.querySelector('.sim');
const clouds = document.querySelector('.cloud');
const score = document.querySelector('.score');
const end = document.querySelector('.game-over');
const gameBoard = document.querySelector('.game-board');
var count = 0;



const theme = new Audio('./music/Os Simpsons.mp3')
const gameOver = new Audio('./music/bart_simpson.mp3')

theme.play();
theme.loop = true;


const jump = () => {
    bart.classList.add('jump');

    setTimeout(() => {
        bart.classList.remove('jump');
    }, 500)
}

const time = setInterval(() => {
    count++;

    document.getElementById('count').innerHTML = count;
}, 1);

const loop = setInterval(() => {

    const skPostion = sk.offsetLeft;
    const bartPostion = +window.getComputedStyle(bart).bottom.replace('px', '');

    console.log(bartPostion);

    // Game over
    if (skPostion <= 85 && skPostion > 0 && bartPostion < 89) {

        // Configura posição e animação do pipe
        sk.style.animation = 'none';
        sk.style.left = `${skPostion}px`;

        // Configura posição, animação, src e tamanho do mario
        bart.style.animation = 'none';
        bart.style.bottom = `${bartPostion}px`;
        bart.style.width = `90px`;
        bart.style.marginLeft = `25px`;
        bart.src = "./imagem/over.png"
        bart.style.animation = 'dead-animation 8000ms ease-out';
        bart.style.bottom = `-500px`;
        

        // Música
        theme.pause();
        gameOver.play();

        setInterval(() => {
            sk.style.display = 'none';
            bart.style.display = 'none';
            sim.style.display = 'none';
            clouds.style.display = 'none';
            score.style.display = 'none';
            gameBoard.style.background = 'black';
            gameBoard.style.borderColor = 'black';
        }, 3000)

        const loop2 = setInterval(() => {
            end.style.display = 'block';
            document.getElementById('countEnd').innerHTML = count;
        }, 4000)



        clearInterval(loop);
        clearInterval(time);
    }

}, 10)


function reloadPage() {
    document.location.reload(true);
}

document.addEventListener('keydown', jump);