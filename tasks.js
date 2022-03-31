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

//calender

const d = new Date();
const currentMonth = d.toLocaleString('default', {month: 'long'});

const month = document.getElementById("month");
month.innerHTML = currentMonth;

//arrow month click event

const prev = document.getElementById("prev-month");

prevMonthClick = () => {
    d.setMonth(d.getMonth()-1);
    const prevMonth = d.toLocaleString('default', {month: 'long'});
    month.innerHTML = prevMonth;
}

prev.addEventListener("click", prevMonthClick);

const next = document.getElementById("next-month");

nextMonthClick = () => {
    d.setMonth(d.getMonth()+1);
    const nextMonth = d.toLocaleString('default', {month: 'long'});
    month.innerHTML = nextMonth;
}

next.addEventListener("click", nextMonthClick);