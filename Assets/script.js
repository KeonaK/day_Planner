
let saveBtnEl = document.getElementsByClassName("saveBtn");
//sets the date 
let dateDisplayEl = document.getElementById("currentDay");
 let today = moment().format(" dddd, MMMM Do YYYY");
 dateDisplayEl.textContent = today;
//gets the hour 
 let currentTime = moment().hour();





//function for color coded time block
$(".description").each(function(){

   let clock = $(this).data("time");
   console.log(clock);


    if(clock < currentTime){
        //this refers to whatever object it is contextually related to 
        $(this).addClass("past");
     }
     else if (clock === currentTime){
         $(this).addClass("present");
     }
     else{
         $(this).addClass("future");
     }
    
});









//save button
//give data- attribute to the text area and assing it and have the button save that value 
//  function saveButton (){

     
//  }

//  saveBtnEl.addEventListener("click",saveButton);


