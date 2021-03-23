const newYears = '25 Dec 2021';


function countDown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    const seconds = (newYearsDate - currentDate) / 1000;
    const days = Math.floor(seconds / 3600 / 24);
    const hours = days * 24

    console.log(hours)
    
}

countDown()

// setInterval(countDown, 1000)