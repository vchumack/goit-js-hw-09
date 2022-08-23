function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const body = document.body;

btnStart.addEventListener('click', onbtnStartClick);
btnStop.addEventListener('click', onbtnStopClick);

let timerId = null;

function onbtnStartClick() {
  btnStart.disabled = true;
  timerId = setInterval(() => {
    body.style.backgroundColor = `${getRandomHexColor()}`;
  }, 1000);
}

function onbtnStopClick() {
  btnStart.disabled = false;
  clearInterval(timerId);
}
