  const rangeInput = document.getElementById('font-size-control');
  const textSpan = document.getElementById('text');

  rangeInput.addEventListener('input', handleFontSizeChange);

  function handleFontSizeChange() {
    const fontSize = rangeInput.value + 'px';
    textSpan.style.fontSize = fontSize;
  }