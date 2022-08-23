import { Notify } from 'notiflix/build/notiflix-notify-aio';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const btnStart = document.querySelector('button[data-start]');
const input = document.querySelector('input[type="text"]');
const spanDays = document.querySelector('[data-days]');
const spanHours = document.querySelector('[data-hours]');
const spanMinutes = document.querySelector('[data-minutes]');
const spanSeconds = document.querySelector('[data-seconds]');

btnStart.addEventListener('click', onbtnStartClick);

const currentTime = Date.now();
let selectedDate = null;
console.log('это текущее время ' + currentTime);
//сразу устанавливаем кнопку неактивной
btnStart.disabled = true;

const timer = {
  start() {
    const startTime = selectedDate;

    const idTimer = setInterval(() => {
      const currentTime = Date.now();

      // от выбранной даты отнимаем текущую
      const deltaTime = startTime - currentTime;
      console.log(deltaTime);

      // и конвертируем получившуюся разницу в понятный формат для отображения
      const { days, hours, minutes, seconds } = convertMs(deltaTime);

      console.log(`${days} ${hours}:${minutes}:${seconds}`);

      // вызываем функцию для показа времени в наших спанах
      showTimes(
        addLeadingZero(days),
        addLeadingZero(hours),
        addLeadingZero(minutes),
        addLeadingZero(seconds)
      );

      // showTimes(days, hours, minutes, seconds);

      // чистим интервал, когда таймер дойдет до 1 секунды, 999 мс и делаем кнопку снова активной
      if (deltaTime < 999) {
        clearInterval(idTimer);
        btnStart.disabled = false;
      }
    }, 1000);
  },
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    //перевод даты в числовое представление
    selectedDate = selectedDates[0].getTime();
    console.log(selectedDate);

    // если пользователь выберет дату меньше, чем текущая, те в прошлом
    if (selectedDates[0].getTime() < currentTime) {
      return Notify.failure('Please choose a date in the future', {
        timeout: 1923,
      });
    }

    // и кнопку делаем активной
    btnStart.disabled = false;
  },
};

flatpickr(input, options);

// колбек при нажатии на кнопку старту
function onbtnStartClick() {
  //вызываем таймер
  timer.start();

  //делаем кнопку неактивной
  btnStart.disabled = true;
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

//функция для показа времени в наших спанах
function showTimes(days, hours, minutes, seconds) {
  spanDays.textContent = days;
  spanHours.textContent = hours;
  spanMinutes.textContent = minutes;
  spanSeconds.textContent = seconds;
}

// функция для добавления 0
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
