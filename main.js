const newYears = '25 Dec 2021';

const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

function countDown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    const Totalseconds = (newYearsDate - currentDate) / 1000;
    const days = Math.floor(Totalseconds / 3600 / 24);
    const hours = Math.floor(Totalseconds / 3600) % 24;
    const minutes = Math.floor(Totalseconds / 60) % 60;
    const seconds = Math.floor(Totalseconds) % 60;
   

    daysElement.innerHTML = days;
    hoursElement.innerText = timeFormat(hours);
    minutesElement.innerHTML = timeFormat(minutes);
    secondsElement.innerHTML = timeFormat(seconds);
    
}
function timeFormat(time){
    return time < 10 ?(`0${time}`) : time;
}
countDown()

setInterval(countDown, 1000)