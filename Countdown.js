const countdown = () => {
    const countDate = new Date("octuber 29, 2022 00:00:00").getTime();
    const timeNow = new Date().getTime();
    const gap = countDate - timeNow;

    // how time works
    const second = 1000; // miliseconds in a second
    const minute = second * 60
    const hour = minute * 60;
    const day = hour * 24;

    //This is the logic to calculate the time
    let textDay = Math.floor(gap / day);
    let textHour = Math.floor((gap % day)/ hour);
    let textMinute = Math.floor((gap % hour)/ minute); 
    let textSecond = Math.floor((gap % minute)/ second);

    // This way we can add the 0 our time when has one number, if we dont put this our size change.
    textDay = textDay < 10 ? "0" + textDay : textDay;
    textHour = textHour < 10 ? "0" + textHour : textHour;
    textMinute = textMinute < 10 ? "0" + textMinute : textMinute;
    textSecond = textSecond < 10 ? "0" + textSecond : textSecond;

    document.querySelector(".Day").innerHTML = textDay;
    document.querySelector(".Hour").innerHTML = textHour;
    document.querySelector(".Minute").innerHTML = textMinute;
    document.querySelector(".Second").innerHTML = textSecond;
}

setInterval(countdown,1000);