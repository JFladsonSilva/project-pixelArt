const palletR = document.getElementsByClassName('color')[1];
palletR.style.backgroundColor = 'red';

const palletB = document.getElementsByClassName('color')[2];
palletB.style.backgroundColor = 'blue';

const palletG = document.getElementsByClassName('color')[3];
palletG.style.backgroundColor = 'green';

const pallet1 = document.getElementsByClassName('black')[0];
pallet1.style.backgroundColor = 'black';

// requisito 8
function mudaCores() {
  const pixels = document.querySelectorAll('.pixel');

  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].addEventListener('click', () => {
      const corSelected = document.querySelector('.selected');
      pixels[i].style.backgroundColor = corSelected.style.backgroundColor;
    });
  }
}

window.onload = () => {
// REQUISITO 5
  function recuperaCor() {
    const localPalletColor = JSON.parse(localStorage.getItem('colorPalette'));
    if (localPalletColor) {
      const [color1, color2, color3] = localPalletColor;
      palletR.style.backgroundColor = color1;
      palletB.style.backgroundColor = color2;
      palletG.style.backgroundColor = color3;
    }
  }
  recuperaCor();
  mudaCores();
};

// VARIAVEIS COM AS CORES DOS QUADRINHOS DA PALETA

// FUNÇÃO PARA GERAR CORES
function RGBgenerator() {
  const R = Math.floor(Math.random() * 256);
  const G = Math.floor(Math.random() * 256);
  const B = Math.floor(Math.random() * 256);

  const RGB = `rgb(${R}, ${G}, ${B})`;

  return RGB;
}
// FUNÇÃO PARA SETAR A COR
function setColor() {
//   const R = palletR.style.backgroundColor = RGBgenerator()
//   const G = palletB.style.backgroundColor = RGBgenerator()
//   const B = palletG.style.backgroundColor = RGBgenerator()
  //   const armazenaCor = [R, G, B];
  const armazenaCor = [
    palletR.style.backgroundColor = RGBgenerator(),
    palletB.style.backgroundColor = RGBgenerator(),
    palletG.style.backgroundColor = RGBgenerator(),
  ];

  localStorage.setItem('colorPalette', JSON.stringify(armazenaCor));
}
// EVENTLISTINER PARA AS CORES ALEATÓRIAS
const button = document.getElementById('button-random-color');
button.addEventListener('click', setColor);

// REQUISITO 6
function geraPixer() {
  const quadro = document.getElementById('pixel-board');

  for (let i = 0; i < 25; i += 1) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    quadro.appendChild(pixel);
  }
  return quadro;
}
geraPixer();

// REQUISITO 9 e 10
function removeClass() {
  const selected = document.querySelector('.selected');
  selected.classList.remove('selected');
}

pallet1.addEventListener('click', () => {
  removeClass();
  pallet1.classList.add('selected');
  console.log('black');
});

palletR.addEventListener('click', () => {
  removeClass();
  palletR.classList.add('selected');
  // console.log('red');
});

palletB.addEventListener('click', () => {
  removeClass();
  palletB.classList.add('selected');
//   console.log('blue');
});

palletG.addEventListener('click', () => {
  removeClass();
  palletG.classList.add('selected');
// console.log('green');
});

// Requiisito 11
const clearButton = document.getElementById('clear-board');

const clearBoard = () => {
  const pixels = document.querySelectorAll('.pixel');

  pixels.forEach((pixel) => {
    const varPixel = pixel;
    varPixel.style.backgroundColor = '#fff';
  });
};

clearButton.addEventListener('click', clearBoard);
