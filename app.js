const month = document.querySelector('.month');
const day = document.querySelector('.day');
const date = document.querySelector('.date');
const year = document.querySelector('.year');


let d = new Date();

month.innerHTML = d.toLocaleDateString('en', {month: 'long'})
day.innerHTML = d.toLocaleDateString('en', {weekday: 'long'});
date.innerHTML = d.getDate();
year.innerHTML = d.year();