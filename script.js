window.onload = function () {
//REQUISITO 5
    function recuperaCor() {
        let arr = JSON.parse(localStorage.getItem('colorPalette'));
        if (localStorage = arr) {
            palletR.style.backgroundColor = arr[0]
            palletB.style.backgroundColor = arr[1]
            palletG.style.backgroundColor = arr[2]
        }
    }
    recuperaCor()
}

// VARIAVEIS COM AS CORES
let palletR = document.getElementsByClassName('color')[1]
palletR.style.backgroundColor = 'red'

let palletB = document.getElementsByClassName('color')[2]
palletB.style.backgroundColor = 'blue'

let palletG = document.getElementsByClassName('color')[3]
palletG.style.backgroundColor = 'green'

// FUNÇÃO PARA GERAR CORES
function RGBgenerator() {
    let R = Math.floor(Math.random() * 256);
    let G = Math.floor(Math.random() * 256);
    let B = Math.floor(Math.random() * 256);

    let RGB = `rgb(${R}, ${G}, ${B})`;
    return RGB;
}
// FUNÇÃO PARA SETAR A COR
function setColor() {
    let R = palletR.style.backgroundColor = RGBgenerator()
    let G = palletB.style.backgroundColor = RGBgenerator()
    let B = palletG.style.backgroundColor = RGBgenerator()

    let armazenaCor = [R, G, B]

    localStorage.setItem('colorPalette', JSON.stringify(armazenaCor))
    let teste = localStorage.getItem('colorPalette')
    console.log(teste);
}
// EVENTLISTINER PARA AS CORES ALEATÓRIAS
let button = document.getElementById('button-random-color');
button.addEventListener('click', setColor);

//REQUISITO 6
function geraPixer() {
    let quadro = document.getElementById('pixel-board')

    for (let i = 0; i < 25; i += 1) {
        let pixel = document.createElement('div');
        pixel.classList.add('pixel');
        quadro.appendChild(pixel);
    }
    return quadro;
}
geraPixer()

function pintora(){
    let pixels = document.getElementsByClassName
}
//requisito 8
function mudaCores(){
    let pixels = document.querySelectorAll('.pixel')
    for(let i = 0; i < pixels.length; i += 1){
        pixels[i].addEventListener('click', () => {
            pixels[i].style.backgroundColor = 'black'
        })
    }
    console.log(pixels)
}
mudaCores()