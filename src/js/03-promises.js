import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  inputDelay: document.querySelector('input[name="delay"]'),
  inputStep: document.querySelector('input[name="step"]'),
  inputAmount: document.querySelector('input[name="amount"]'),
  form: document.querySelector('.form'),
};

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const inputFirstDelayValue = Number(refs.inputDelay.value);
  const inputStepValue = Number(refs.inputStep.value);
  const inputAmountValue = Number(refs.inputAmount.value);
  console.log('inputFirstDelayValue', inputFirstDelayValue);
  console.log('inputStepValue', inputStepValue);
  console.log('inputAmountValue', inputAmountValue);

  let countMs = inputFirstDelayValue;

  let countPromises = 1;

  setTimeout(() => {
    handlingPromises(countPromises, countMs);

    countPromises += 1;
    countMs += inputStepValue;

    const timerId = setInterval(() => {
      handlingPromises(countPromises, countMs);

      countPromises += 1;
      countMs += inputStepValue;

      //? можно и нужно ли это как-то пофиксить?
      if (countPromises === inputAmountValue + 1) {
        clearInterval(timerId);
      }
    }, inputStepValue);
  }, inputFirstDelayValue);
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
    } else {
      reject(`❌ Rejected promise ${position} in ${delay}ms`);
    }
  });
}

//? можно ли так называть параметры ?
function handlingPromises(countPromises, countMs) {
  createPromise(countPromises, countMs)
    .then(result => {
      Notify.success(result);
    })
    .catch(error => {
      Notify.failure(error);
    });
}
