let counterValue = document.querySelector("#value").childElementCount;
const decrement = document.querySelector('button[data-action="decrement"]');
const substractClick = () => {
  counterValue -= 1;
  showValue.textContent = counterValue;
};
decrement.addEventListener("click", substractClick);

const increment = document.querySelector('button[data-action="increment"]');
const addClick = () => {
  counterValue += 1;
  showValue.textContent = counterValue;
};
increment.addEventListener("click", addClick);
const showValue = document.querySelector("#value");
