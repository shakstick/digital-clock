const hour = document.getElementById("hour-num");
const minute = document.getElementById("minute-num");
const second = document.getElementById("second-num");
const midDay = document.getElementById("midday");
setInterval(() => {
  const time = new Date();
  const realHour = time.getHours();
  const realMidDay = realHour < 12 ? "AM" : "PM";

  hour.textContent = realHour < 12 ? realHour : realHour - 12;
  minute.textContent = time.getMinutes();
  second.textContent = time.getSeconds();
  midDay.textContent = realMidDay;
}, 1000);
