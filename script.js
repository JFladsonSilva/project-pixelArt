let palletR = document.getElementsByClassName('color')[1]
palletR.style.backgroundColor = 'red'

let palletB = document.getElementsByClassName('color')[2]
palletB.style.backgroundColor = 'blue'

let palletG = document.getElementsByClassName('color')[3]
palletG.style.backgroundColor = 'green'

function RGBgenerator(){
    let R = 0;
    let G = 0;
    let B = 0;
    R = Math.floor(Math.random() * 255);
    G = Math.floor(Math.random() * 255);
    B = Math.floor(Math.random() * 255);
    return 'rgb' + '(' + R + ', ' +  G + ', ' + R + ')';
}
function setColor() {
    palletR.style.backgroundColor = RGBgenerator()
    palletB.style.backgroundColor = RGBgenerator()
    palletG.style.backgroundColor = RGBgenerator()

} 

let button = document.getElementById('button-random-color');

button.addEventListener('click', setColor);

/* Requisito 5 LocalStorage */
localStorage.setItem('colorPalette', setColor)


onload = function() {
    let cores = localStorage.getItem('colorPalette')
    let palet = document.getElementById('colorPalette') 
    palet = cores

    console.log('???')

}