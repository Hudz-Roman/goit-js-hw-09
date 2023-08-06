import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];

    if (selectedDate && selectedDate.getTime() > Date.now()) {
      startButton.disabled = false;
    } else {
      startButton.disabled = true;
      window.alert('Please choose a date in the future');
    }
  },
};

const dateTimePicker = document.getElementById('datetime-picker');
const startButton = document.getElementById('start-button');
const timerDisplay = document.getElementById('timer-display');

flatpickr(dateTimePicker, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
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

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

//? Check code below

// startButton.addEventListener('click', () => {
//   const selectedDate = new Date(dateTimePicker.value);

//   const countdownInterval = setInterval(updateCountdown, 1000);

//   function updateCountdown() {
//     const currentTime = new Date().getTime();
//     const timeDifference = selectedDate.getTime() - currentTime;

//     if (timeDifference <= 0) {
//       clearInterval(countdownInterval);
//       timerDisplay.textContent = '00:00:00:00';
//       alert('Countdown finished!');
//       return;
//     }

//     const { days, hours, minutes, seconds } = convertMs(timeDifference);
//     const formattedTime = `${days.toString().padStart(2, '0')}:${hours
//       .toString()
//       .padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds
//       .toString()
//       .padStart(2, '0')}`;
//     timerDisplay.textContent = formattedTime;
//   }
// });
