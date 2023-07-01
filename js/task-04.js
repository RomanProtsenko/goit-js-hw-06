const counterValue = document.getElementById('value');
const incrementButton = document.querySelector('[data-action="increment"]');
const decrementButton = document.querySelector('[data-action="decrement"]');

let counter = 0;

const updateCounterValue = () => {
  counterValue.textContent = counter;
};

const incrementCounter = () => {
  counter += 1;
  updateCounterValue();
};

const decrementCounter = () => {
  counter -= 1;
  updateCounterValue();
};

incrementButton.addEventListener('click', incrementCounter);
decrementButton.addEventListener('click', decrementCounter);
