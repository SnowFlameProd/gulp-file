document.addEventListener('DOMContentLoaded', () => {
  // Timer

  const daysVal = document.querySelector("#days");
  const hoursVal = document.querySelector("#hours");
  const minutesVal = document.querySelector("#minutes");
  const secondsVal = document.querySelector("#seconds");

  const timeDate = new Date('Dec 31 2021 15:00:00');

  const timeCount = () => {
    let now = new Date();
    let leftUntil = timeDate - now;

    let days = Math.floor(leftUntil / 1000 / 60 / 60 / 24);
    let hours = Math.floor(leftUntil / 1000 / 60 / 60) % 24;
    let minutes = Math.floor(leftUntil / 1000 / 60) % 60;
    let seconds = Math.floor(leftUntil / 1000) % 60;

    if (leftUntil < 0) {
      daysVal.textContent = 0;
      hoursVal.textContent = 0;
      minutesVal.textContent = 0;
      secondsVal.textContent = 0;
    } else {
      daysVal.textContent = days;
      hoursVal.textContent = hours;
      minutesVal.textContent = minutes;
      secondsVal.textContent = seconds;
    }

  };

  timeCount();
  setInterval(timeCount, 1000);


  // Active buttons
  const btnLike = document.querySelector(".btn--like");
  const btnUserFollow = document.querySelector(".btn--user--follow");
  const btnUserFav = document.querySelector(".btn--user--fav");
  btnLike.addEventListener('click', () => {
    btnLike.classList.toggle('selected')
  });
  btnUserFollow.addEventListener('click', () => {
    btnUserFollow.classList.toggle('selected')
  });
  btnUserFav.addEventListener('click', () => {
    btnUserFav.classList.toggle('selected')
  });
})