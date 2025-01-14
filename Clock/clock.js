function showTIme(){
    var clock = document.getElementById('clock');
    var hoursElement = document.getElementById('hours');
    var minutesElement = document.getElementById('minutes');
    var secondsElement = document.getElementById('seconds');
    var sessionElement = document.getElementById('session');
    var dayElement = document.getElementById('day');
    var monthElement = document.getElementById('month');
    var dateElement = document.getElementById('date')
    var yearElement = document.getElementById('year')
    var date = new Date();      //gives current date and time from the system
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var session = "AM";

    // Changing AM & PM...
    if(hour == 0){
        hour = 12;
    }
    if(hour > 12){
        hour = hour-12;
        session = "PM";
    }

    // Adding 0 as prefix...
    if(hour < 10){
        hour = "0"+hour;
    }
    if(minute < 10){
        minute = "0"+minute;
    }
    if(second < 10){
        second = "0"+second;
    }

    // Alternate code of adding 0 as prefix...
    // hour = (hour<10)?"0"+hour:hour;
    // minute = (minute<10)?"0"+minute:minute;
    // second = (second<10)?"0"+second:second;

    // Adding clock to the page...
    hoursElement.innerHTML = `${hour}`;
    minutesElement.innerHTML = `${minute}`;
    secondsElement.innerHTML = `${second}`;
    sessionElement.innerHTML = `${session}`
    setInterval(showTIme, 1000);

    // Adding date to the page...
    const daysList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthsList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var day = daysList[date.getDay()];
    var month = monthsList[date.getMonth()];
    var dayOfMonth = date.getDate();
    var year = date.getFullYear();
    dayElement.innerHTML = `${day},`;
    monthElement.innerHTML = `${month},`;
    dateElement.innerHTML = `${dayOfMonth},`;
    yearElement.innerHTML = `${year}`
}
showTIme();