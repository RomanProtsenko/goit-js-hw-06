function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  }

  const colorSpan = document.querySelector('.color');
  const changeColorButton = document.querySelector('.change-color');
  const bodyElement = document.body;

  changeColorButton.addEventListener('click', changeBackgroundColor);

  function changeBackgroundColor() {
    const randomColor = getRandomHexColor();
    bodyElement.style.backgroundColor = randomColor;
    colorSpan.textContent = randomColor;
  }