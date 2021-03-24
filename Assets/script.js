//sets the date 
let $dateDisplayEl = document.getElementById("currentDay");
 let today = moment().format(" dddd, MMMM Do YYYY");
 $dateDisplayEl.textContent = today;


