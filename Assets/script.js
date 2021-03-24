//sets the date 
let $dateDisplayEl = document.getElementById("currentDay");
 let today = moment().format("MMM Do YY");
 $dateDisplayEl.textContent = today;


