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

//timer
const timer = {
    pomordoro: 25,
    shortBreak: 5,
    longBreak: 15,
    longBreakInterval: 4,
};

//modes
const modeButtons = document.querySelector('.btn-section');
modeButtons.addEventListener('click', handleMode);

function updateClock() {
    const { remainingTime } = timer;
    const minutes = `${remainingTime.minutes}`.padStart(2, '0');
    const seconds = `${remainingTime.seconds}`.padStart(2, '0');

    const min = document.getElementById('minutes');
    const sec = document.getElementById('seconds');
    min.textContent = minutes;
    sec.textContent = seconds;
}

function switchMode() {
    timer.mode = mode;
    timer.remainingTime = {
        total: timer[mode] * 60,
        minutes: timer[mode],
        seconds: 0,
    };

    document.querySelectorAll('button[data-mode]').forEach(e => e.classList.remove('active-main'));
    document.querySelector(`[data-mode="${mode}"]`).classList.add('active-main');
    document.getElementById('main').style.backgroundColor = `var(--${mode})`;

    updateClock;
}

function handleMode(event) {
    const {mode} = event.target.dataset;

    if (!mode) return;

    switchMode(mode);
    console.log("worked")
}
