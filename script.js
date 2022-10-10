window.onload = function (){
    // createPixels()

    function recuperaCor() {
        let arr = localStorage.getItem('RGBcolor')
        if (localStorage = arr) {
            palletR.style.backgroundColor = arr
            palletB.style.backgroundColor = arr
            palletG.style.backgroundColor = arr
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
    let R = 0;
    let G = 0;
    let B = 0;
    R = Math.floor(Math.random() * 255);
    G = Math.floor(Math.random() * 255);
    B = Math.floor(Math.random() * 255);
    let RGB = 'rgb' + '(' + R + ', ' +  G + ', ' + R + ')';
    return RGB;
    
//REQUISITO 5; Preciso achar uma forma de atribuir o valor do retorno da função para armazenar no localStorage. 
    
}

// FUNÇÃO PARA SETAR A COR
function setColor() {
     let R = RGBgenerator()
     let G = RGBgenerator()
     let B = RGBgenerator()
     palletR.style.backgroundColor = R
     
     palletB.style.backgroundColor = G
     palletG.style.backgroundColor = B
     localStorage.setItem('RGBcolor', 'rgb' + '(' + R + ', ' +  G + ', ' + R + ')')
     console.log();
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







// function adicionaItensStorage() {
//     const itens = RGBgenerator
//     let arrItens = [];
//     for (const item of itens) {
//       arrItens.push(item.innerText);
//     }
//     addStorage('itens', arrItens);
//   }
  

// function addStorage(key, value) {
//     localStorage.setItem(key, JSON.stringify(value));
//   }


// localStorage.setItem('RGBcolor', (rgb))
// console.log(RGBgenerator())

/* ----------requisito 6----------------- */
// function createPixels(){
//     let pixel = document.getElementsByClassName('pixel')[0]
//     let pixels = document.getElementById('pixel-board')
//     for(let i = 0; i < 5; i+=1){
        
//         document.appendChild(pixel)
//     }
// }


