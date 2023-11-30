var audio = new Audio("assets/alarmTone.mp3");
let alarmClock = document.getElementById("alarmClock");
let notification = document.getElementById("notification");
let myButton = document.getElementById("myButton");
let stopAlarm = document.getElementById("stopAlarm");
let saveAlarm = document.getElementById("saveAlarm");
let alarmHour = document.getElementById("alarmHour");
let alarmMin = document.getElementById("alarmMin");


const handleStopAlarm = () => {
    alarmClock.classList.remove("alarmAnimation");
    stopAlarm.classList.add("hidden");
    myButton.classList.remove("hidden");
    audio.pause();
    audio.currentTime=0;

}

const setAlarm = (e) => {
    let currentdate = new Date();
    let currentHour = currentdate.getHours();
    let currentMin = currentdate.getMinutes();
    let currentSec = currentdate.getSeconds();


    // console.log(currentHour,currentMin);

    let hour = alarmHour.value;
    let min = alarmMin.value;

    if (hour < currentHour) {
        alert("You can not enter past Time");
        return;
    }
    else if (hour == currentHour && min <= currentMin) {
        alert("You can not enter past Time");
        return;

    }

    let currentTime = (currentHour * 60 * 60) + currentMin * 60 + currentSec;
    let userTime = (hour * 60 * 60) + min * 60;
    // console.log(currentTime);
    // console.log(userTime);

    let calculatedTime = userTime - currentTime;


    alarmHour.value = "";
    alarmMin.value = "";
    // console.log(hour, min);
    notification.innerHTML = `Alarm set Successfully for ${hour}:${min} !`;
    notification.classList.remove("hidden");
    // alert("Alarm Set Successfully");
    setTimeout(() => {
        notification.classList.add("hidden");
    }, calculatedTime * 1000);


    setTimeout(() => {
        alarmClock.classList.add("alarmAnimation");
        myButton.classList.add("hidden");
        stopAlarm.classList.remove("hidden");


        try {
            let i = 0;
            audio.play();

            setTimeout(() => {
                alarmClock.classList.remove("alarmAnimation");
                stopAlarm.classList.add("hidden");
                myButton.classList.remove("hidden");

            }, 45000);




        }
        catch
        {

        }
    }, calculatedTime * 1000);
    myPopup.classList.remove("show");

}


// alarmClock.addEventListener("click",imageClicked);

saveAlarm.addEventListener("click", setAlarm);

stopAlarm.addEventListener("click", handleStopAlarm);



myButton.addEventListener("click", function () {
    myPopup.classList.add("show");
});
closePopup.addEventListener("click", function () {
    myPopup.classList.remove("show");
});
window.addEventListener("click", function (event) {
    if (event.target == myPopup) {
        myPopup.classList.remove("show");
    }
});