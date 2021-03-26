
let dateDisplayEl = document.getElementById("currentDay");
let currentTime = moment().hour();

//function displays the current date 
function todaysDate(){
    let today = moment().format(" dddd, MMMM Do YYYY");
    dateDisplayEl.textContent = today;
    
    };

    
    
    
//function for color coded time block
$(".description").each(function(){

   let timeColor = $(this).data("time");
   

    if(timeColor < currentTime){
        //this refers to whatever object it is contextually related to 
        $(this).addClass("past");
     }
     else if (timeColor === currentTime){
         $(this).addClass("present");
     }
     else{
         $(this).addClass("future");``
     }
    
});


//save button function
//give data- attribute to the text area, access it and have the button save that value 
 $(".saveBtn").on("click", function(){
     let textInput = $(this).prev().val();
     let time = $(this).parent().data("value");


    //setItem needs two arguments
    localStorage.setItem(time, textInput);
 })



                          
    
 todaysDate();
console.log(localStorage);
 


