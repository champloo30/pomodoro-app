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