const menu = document.getElementById("menu");
const timerLabel = document.getElementById("timer-label");
const tasksLabel = document.getElementById("tasks-label");

function toggleMenu() {
    menu.classList.toggle('active');
    timerLabel.classList.toggle('dn1');
    tasksLabel.classList.toggle('dn2');
}