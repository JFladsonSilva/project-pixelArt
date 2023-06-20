const palletR = document.getElementsByClassName('color')[1];
palletR.style.backgroundColor = 'red';

const palletB = document.getElementsByClassName('color')[2];
palletB.style.backgroundColor = 'blue';

const palletG = document.getElementsByClassName('color')[3];
palletG.style.backgroundColor = 'green';

const pallet1 = document.getElementsByClassName('black')[0];
pallet1.style.backgroundColor = 'black';

// apaga pixels existentes -----------------------------------------------------
const removePixels = () => {
  const quadro = document.getElementById('pixel-board');
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    quadro.removeChild(pixels[i]);
  }
};

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
// requisito 15 abaixo
const recuperaBoardSize = () => {
  const boardSize = JSON.parse(localStorage.getItem('boardSize'));
  if (boardSize) {
    const quadro = document.getElementById('pixel-board');
    removePixels();
    for (let i = 0; i < boardSize * boardSize; i += 1) {
      const pixel = document.createElement('div');
      pixel.classList.add('pixel');
      quadro.appendChild(pixel);
    }
    // mudança, tirei o tamanh doo quadro do CSS e coloquei aqui no Javascript
    quadro.style.height = boardSize * 44 + 'px';
    quadro.style.width = boardSize * 45 + 'px';
  }
};

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
  recuperaBoardSize();
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
console.log(RGBgenerator());
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

// REQUISITO 6 criar o quadro de pixels iniciais

function geraPixer() {
  const quadro = document.getElementById('pixel-board');
  for (let i = 0; i < 25; i += 1) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    quadro.appendChild(pixel);
  }
  // mudança, tirei o tamanh doo quadro do CSS e coloquei aqui no Javascript
  quadro.style.width = '220px';
  quadro.style.height = '220px';
  return quadro;
}
geraPixer();
// const quadro = document.getElementById('pixel-board');
// for (let i = 0; i < 25; i += 1) {
//   const pixel = document.createElement('div');
//   pixel.classList.add('pixel');
//   quadro.appendChild(pixel);
// }
// mudança, tirei o tamanh doo quadro do CSS e coloquei aqui no Javascript
// quadro.style.width = '220px';
// quadro.style.height = '220px';

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

// req 13 mudar o a quantidade de pixels dinamicamente

// ---------------------------------------------------------------------------------
const btnBoardSize = document.getElementById('generate-board');

const verifyNumberInput = (value) => {
  let valueValid = 0;
  if (value < 5) {
    valueValid = 5;
  } else if (value > 50) {
    valueValid = 50;
  } else {
    valueValid = value;
  }
  return valueValid;
};

const changeFrameSize = () => {
  const inputBoardSize = document.getElementById('board-size');
  const quadro = document.getElementById('pixel-board');
  if (Number(inputBoardSize.value) <= 0) {
    alert('Board inválido!');
  }
  const imputValue = verifyNumberInput(inputBoardSize.value);
  removePixels();
  for (let i = 0; i < imputValue * imputValue; i += 1) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    quadro.appendChild(pixel);
    quadro.style.height = imputValue * 44 + 'px';
    quadro.style.width = imputValue * 45 + 'px';
  }
  localStorage.setItem('boardSize', JSON.stringify(imputValue));
  mudaCores();
};

btnBoardSize.addEventListener('click', changeFrameSize);

// notas
// talvez eu possa criar uma função para apagar os pixels existentes
