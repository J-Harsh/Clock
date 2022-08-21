const hour = document.getElementById("clock-hour");
const min = document.getElementById("clock-minutes");
const sec = document.getElementById("clock-seconds");

const textHour = document.getElementById("text-hour");
const textMin = document.getElementById("text-minutes");
const textAmpm = document.getElementById("text-ampm");
const textDay = document.getElementById("date-day");
const textMonth = document.getElementById("date-month");
const textYear = document.getElementById("date-year");

const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'bxs-sun';



const clock = () => {
  let date = new Date();

  let hh = date.getHours() * 30;
  let mm = date.getMinutes() * 6;
  let ss = date.getSeconds() * 6;

  hour.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  min.style.transform = `rotateZ(${mm}deg)`;
  sec.style.transform = `rotateZ(${ss}deg)`;
};

setInterval(clock, 1000);

//------------------------------------------------
const clockText = () => {
  let date = new Date();

  let hh = date.getHours();
  let mm = date.getMinutes();
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  let ampm;

  if (hh >= 12) {
    hh = hh - 12;
    ampm = "PM";
  } else ampm = "AM";

  if (hh === 0) hh = 12;

  if (hh < 10) hh = "0" + hh;

  if (mm < 10) mm = "0" + mm;

  textHour.innerText = hh + ":";
  textMin.innerText = mm;
  textAmpm.innerText = ampm;
  textDay.innerText = day;

  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  textMonth.innerText = months[month];

  textYear.innerText = year;
};

setInterval(clockText, 1000);

//------------------------------------------------

themeButton.addEventListener("click" , ()=>
{
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
});