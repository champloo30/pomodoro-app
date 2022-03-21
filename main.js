//collapsing menu toggler

const menu = document.getElementById("menu");
const timerLabel = document.getElementById("timer-label");
const tasksLabel = document.getElementById("tasks-label");
const ham = document.getElementById("hamburger");

function toggleMenu() {
    menu.classList.toggle('active');
    timerLabel.classList.toggle('dn1');
    tasksLabel.classList.toggle('dn2');
}

ham.addEventListener("click", toggleMenu);

//switch modes
const pomodoro = document.getElementById("pomodoro");
const shortBreak = document.getElementById("shortb");
const longBreak = document.getElementById("longb");
const timerNum = document.getElementById("timer");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

//pomodoro

pomodoroMode = () => {
    document.getElementById("main").style.backgroundColor = '#B8FFF9';
    document.getElementById("app-title").style.color = '#42C2FF';
    document.getElementById("timer").style.color = '#42C2FF';
    document.getElementById("pomodoro").style.borderColor = '#42C2FF';
    document.getElementById("pomodoro").style.color = '#42C2FF';
    document.getElementById("pomodoro").style.backgroundColor = '#B8FFF9';
    document.getElementById("shortb").style.borderColor = '#42C2FF';
    document.getElementById("shortb").style.color = '#42C2FF';
    document.getElementById("shortb").style.backgroundColor = '#B8FFF9';
    document.getElementById("longb").style.borderColor = '#42C2FF';
    document.getElementById("longb").style.color = '#42C2FF';
    document.getElementById("longb").style.backgroundColor = '#B8FFF9';
    document.getElementById("start-btn").style.borderColor = '#42C2FF';
    document.getElementById("start-btn").style.color = '#42C2FF';
    document.getElementById("start-btn").style.backgroundColor = '#B8FFF9';
    document.getElementById("stop-btn").style.borderColor = '#42C2FF';
    document.getElementById("stop-btn").style.color = '#42C2FF';
    document.getElementById("stop-btn").style.backgroundColor = '#B8FFF9';

    //timer logic

    minutes.innerHTML = '25';
    seconds.innerHTML = '00';
}

pomodoro.addEventListener("click", pomodoroMode);

//short break

shortBreakMode = () => {
    document.getElementById("main").style.backgroundColor = '#008080';
    document.getElementById("app-title").style.color = '#B8FFF9';
    document.getElementById("timer").style.color = '#B8FFF9';
    document.getElementById("pomodoro").style.borderColor = '#B8FFF9';
    document.getElementById("pomodoro").style.color = '#B8FFF9';
    document.getElementById("pomodoro").style.backgroundColor = '#008080';
    document.getElementById("shortb").style.borderColor = '#B8FFF9';
    document.getElementById("shortb").style.color = '#B8FFF9';
    document.getElementById("shortb").style.backgroundColor = '#008080';
    document.getElementById("longb").style.borderColor = '#B8FFF9';
    document.getElementById("longb").style.color = '#B8FFF9';
    document.getElementById("longb").style.backgroundColor = '#008080';
    document.getElementById("start-btn").style.borderColor = '#B8FFF9';
    document.getElementById("start-btn").style.color = '#B8FFF9';
    document.getElementById("start-btn").style.backgroundColor = '#008080';
    document.getElementById("stop-btn").style.borderColor = '#B8FFF9';
    document.getElementById("stop-btn").style.color = '#B8FFF9';
    document.getElementById("stop-btn").style.backgroundColor = '#008080';

    //timer logic

    minutes.innerHTML = '5';
    seconds.innerHTML = '00';
}

shortBreak.addEventListener("click", shortBreakMode);

//long break

longBreakMode = () => {
    document.getElementById("main").style.backgroundColor = '#ef767a';
    document.getElementById("app-title").style.color = '#EFFFFD';
    document.getElementById("timer").style.color = '#EFFFFD';
    document.getElementById("pomodoro").style.borderColor = '#EFFFFD';
    document.getElementById("pomodoro").style.color = '#EFFFFD';
    document.getElementById("pomodoro").style.backgroundColor = '#ef767a';
    document.getElementById("shortb").style.borderColor = '#EFFFFD';
    document.getElementById("shortb").style.color = '#EFFFFD';
    document.getElementById("shortb").style.backgroundColor = '#ef767a';
    document.getElementById("longb").style.borderColor = '#EFFFFD';
    document.getElementById("longb").style.color = '#EFFFFD';
    document.getElementById("longb").style.backgroundColor = '#ef767a';
    document.getElementById("start-btn").style.borderColor = '#EFFFFD';
    document.getElementById("start-btn").style.color = '#EFFFFD';
    document.getElementById("start-btn").style.backgroundColor = '#ef767a';
    document.getElementById("stop-btn").style.borderColor = '#EFFFFD';
    document.getElementById("stop-btn").style.color = '#EFFFFD';
    document.getElementById("stop-btn").style.backgroundColor = '#ef767a';

    //timer logic

    minutes.innerHTML = '15';
    seconds.innerHTML = '00';
}

longBreak.addEventListener("click", longBreakMode);

//timer 

timer = () => {
    let min = minutes.innerHTML - 1;
    let sec = 59;
    setInterval(() => {
        timerNum.innerHTML = min + ":" + sec;
        sec--;
        sec = sec < 10 ? "0" + sec : sec;

        if (sec == -1) {
            min--;
            sec = 59;
        } if (min === 0 && sec === 0) {
            min = minutes.innerHTML;
            sec = seconds.innerHTML
            clearInterval(timer);
        }
    }, 1000);
}

//start timer

startTimer = () => {
    timer();
}

//reset timer

stopTimer = () => {
    clearInterval(timer);
}

startBtn = document.getElementById("start-btn");
stopBtn = document.getElementById("stop-btn");

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);

window.onload = () => {
    pomodoroMode();
}
