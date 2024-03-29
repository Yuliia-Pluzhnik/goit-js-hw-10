import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  datetimePicker: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  daysEl: document.querySelector('.value[data-days]'),
  hoursEl: document.querySelector('.value[data-hours]'),
  minutesEl: document.querySelector('.value[data-minutes]'),
  secondsEl: document.querySelector('.value[data-seconds]'),
};

let selectedDate = null;
let timerInterval = null; 

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDate = selectedDates[0];

    const currentDate = new Date();

    if (selectedDate.getTime() <= currentDate.getTime()) {
      refs.startBtn.disabled = true;
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future!',
        position: 'topRight',
      });
    } else {
      refs.startBtn.disabled = false;
      iziToast.success({
        title: 'OK!',
        message: 'You can press Start!',
        position: 'topRight',
      });
    }
  },
};

flatpickr(refs.datetimePicker, options);

const timer = {
  start() {
    if (!selectedDate || timerInterval) {
      return;
    }
    disableDateTimePicker();

    timerInterval = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = selectedDate - currentTime;

      if (deltaTime <= 0) {
        clearInterval(timerInterval);
        updateTimerDisplay({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        enableDateTimePicker();
        enableStartButton();
      } else {
        const timeComponents = convertMs(deltaTime);
        updateTimerDisplay(timeComponents);
      }
    }, 1000);
  },

  stop() {
    clearInterval(timerInterval);
    timerInterval = null;
  }
};


refs.startBtn.addEventListener('click', () => {
  if (selectedDate) {
    disableStartButton();
    timer.start();
  }
});

function disableDateTimePicker() {
  refs.datetimePicker.disabled = true;
}

function enableDateTimePicker() {
  refs.datetimePicker.disabled = false;
}

function disableStartButton() {
  refs.startBtn.disabled = true;
}

function enableStartButton() {
  refs.startBtn.disabled = false;
}


function convertMs(ms) {
  
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}


function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function updateTimerDisplay({ days, hours, minutes, seconds }) {
  refs.daysEl.textContent = addLeadingZero(days);
  refs.hoursEl.textContent = addLeadingZero(hours);
  refs.minutesEl.textContent = addLeadingZero(minutes);
  refs.secondsEl.textContent = addLeadingZero(seconds);
}



  

