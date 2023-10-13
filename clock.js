const second = document.querySelector(".second");
const minute = document.querySelector(".minute");
const hour = document.querySelector(".hour");

setInterval(function () {
  const time = new Date();

  // Find hours, minutes, and seconds
  const hourHandle = time.getHours();
  const minuteHandle = time.getMinutes();
  const secondHandle = time.getSeconds();
  // Find the degree from seconds
  const secondDeg = (secondHandle / 60) * 360;

  const minuteDeg = (minuteHandle / 60) * 360;

  const hourDeg = (hourHandle / 12) * 360;

  // Rotate element with degree
  second.style.transform = `rotate(${secondDeg}deg)`;
  minute.style.transform = `rotate(${minuteDeg}deg)`;
  hour.style.transform = `rotate(${hourDeg}deg)`;

  // audio
  const audio = document.querySelector("audio");
  audio.currentTime = 0;
  audio.play();
}, 1000);
