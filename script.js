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


mudaCores()

}

// VARIAVEIS COM AS CORES DOS QUADRINHOS DA PALETA
let palletR = document.getElementsByClassName('color')[1]
palletR.style.backgroundColor = 'red'

let palletB = document.getElementsByClassName('color')[2]
palletB.style.backgroundColor = 'blue'

let palletG = document.getElementsByClassName('color')[3]
palletG.style.backgroundColor = 'green'

let  pallet1 = document.getElementsByClassName('black')[0]
pallet1.style.backgroundColor = 'black'

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
    
    // console.log(corSelected)
    for(let i = 0; i < pixels.length; i += 1){
        pixels[i].addEventListener('click', () => {
            let corSelected = document.querySelector('.selected')
            pixels[i].style.backgroundColor = corSelected.style.backgroundColor;
            console.log(corSelected)
        })
    }
}

    //REQUISITO 9 e 10
    function removeClass() {
        let selected = document.querySelector('.selected')
        selected.classList.remove('selected')
    }
   
    pallet1.addEventListener('click', () => {
        removeClass()
        pallet1.classList.add('selected')
        console.log('black');
    })
    
    palletR.addEventListener('click', () => {
        removeClass()
        palletR.classList.add('selected')
        console.log('red');
    })
    
    palletB.addEventListener('click', () => {
        removeClass()
        palletB.classList.add('selected')
        console.log('blue');
    })
    
    palletG.addEventListener('click', () => {
        removeClass()
        palletG.classList.add('selected')
        console.log('green');
    })
    // -----------------------------------------------------

    // pallet1.addEventListener('click', () => {
    //     pallet1.classList.add('selected')
    //     palletR.classList.remove('selected')
    //     palletG.classList.remove('selected')
    //     palletB.classList.remove('selected')
    //     console.log('black');
    // })
    
    // palletR.addEventListener('click', () => {
    //     palletR.classList.add('selected')
    //     pallet1.classList.remove('selected')
    //     palletG.classList.remove('selected')
    //     palletB.classList.remove('selected')
    //     console.log('red');
    // })
    
    // palletB.addEventListener('click', () => {
    //     palletB.classList.add('selected')
    //     palletR.classList.remove('selected')
    //     palletG.classList.remove('selected')
    //     pallet1.classList.remove('selected')
    //     console.log('blue');
    // })
    
    // palletG.addEventListener('click', () => {
    //     palletG.classList.add('selected')
    //     palletR.classList.remove('selected')
    //     pallet1.classList.remove('selected')
    //     palletB.classList.remove('selected')
    //     console.log('green');
    // })
    // // -

