window.onload = function (){
    // createPixels()

    function recuperaCor() {
        let arr = JSON.parse(localStorage.getItem('colorPalette'));
        if (localStorage = arr) {
            palletR.style.backgroundColor = arr[0]
            palletB.style.backgroundColor = arr[1]
            palletG.style.backgroundColor = arr[2]
            console.log(arr)
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
function RGBgenerator(){
    let R = Math.floor(Math.random() * 256);
    let G = Math.floor(Math.random() * 256);
    let B = Math.floor(Math.random() * 256);
    
    let RGB = `rgb(${R}, ${G}, ${B})`;
    return RGB;
    
//REQUISITO 5; Preciso achar uma forma de atribuir o valor do retorno da função para armazenar no localStorage. 
    
}
// FUNÇÃO PARA SETAR A COR
function setColor() {
    //  let R = RGBgenerator()
    //  let G = RGBgenerator()
    //  let B = RGBgenerator()
    let R = palletR.style.backgroundColor = RGBgenerator()
    let G = palletB.style.backgroundColor = RGBgenerator()
    let B = palletG.style.backgroundColor = RGBgenerator()

    let armazenaCor = [R, G, B]

     localStorage.setItem('colorPalette', JSON.stringify(armazenaCor))
     let teste = localStorage.getItem('colorPalette')
     console.log(teste);
} 

let button = document.getElementById('button-random-color');
button.addEventListener('click', setColor);



       



function geraPixer() {
    let quadro = document.getElementById('pixel-board') 

for(let i = 0; i < 25; i +=1){
    let pixel = document.createElement('div');
    pixel.classList.add('pixel');
    quadro.appendChild(pixel);
}
    return quadro;
}

geraPixer()



// TESTE PARA FAZER FUNÇÃO QUE CRIA AS CORES
// function palleta(){
//     let pallet = document.getElementById('color-palette')
//     for(let i = 0; i < 5; i +=1){
//         let color = document.createElement('div');
//         color.classList.add('color' + ' ' + i)
//         pallet.appendChild(color)
//     }
//     return pallet
// }
// console.log(palleta())