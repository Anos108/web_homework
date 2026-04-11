function getSystemTime() {
  return new Date();
}

function pad2(value) {
  return String(value).padStart(2, '0');
}

function formatToHHMMSS(date) {
  const hh = pad2(date.getHours());
  const mm = pad2(date.getMinutes());
  const ss = pad2(date.getSeconds());
  return `${hh}:${mm}:${ss}`;
}

function applyHHMMSSToClock(date) {
  const [hh, mm, ss] = formatToHHMMSS(date).split(':');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');
  if (hoursEl) hoursEl.textContent = hh;
  if (minutesEl) minutesEl.textContent = mm;
  if (secondsEl) secondsEl.textContent = ss;
}

function tickClock() {
  applyHHMMSSToClock(getSystemTime());
}

document.addEventListener('DOMContentLoaded', () => {
  tickClock();
  setInterval(tickClock, 1000);
});
