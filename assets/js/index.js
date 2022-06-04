// load index and css
$(document).ready(function () {

// var for date format Day, Month, date 
var todaysDate = moment().format('dddd, MMMM Do');
// add todaysDate to html header 
$("#currentDay").html(todaysDate);

// gets .row elements from index
var rows = document.getElementsByClassName("row");
var currentHour = parseInt(moment().format('H'));
// creates an array from each .row element 
Array.from(rows).forEach(row => {
    // sets html ids to rowHour array
    var rowIdString = row.id, 
    rowHour;
    if (rowIdString) {
        // converts hour/id string to numbers 
        rowHour = parseInt(rowIdString);
    }
    if (rowHour) {
        // compares row id to current hour and sets color accordingly
        if (currentHour === rowHour) {
            // green
           setColor(row, "#ff6961");
        } else if ((currentHour < rowHour)) {
            // red
            setColor(row, "#77dd77");
            // grey
        } else {
            setColor(row, "#d3d3d3");
        }
    }
});
// function to save text-entry input to localStorage on save button click
$(".saveBtn").on("click", function () {
    // text input to be saved from parent/sibling html text-entry elements
     var tasks = $(this).siblings(".text-entry").val();
     var hour = $(this).parent().attr("id");
    // save tasks to localStorage
    localStorage.setItem(hour, tasks);
})

// load local storage saved tasks for each row/hour 
$("#8 .text-entry").val(localStorage.getItem(8));
$("#9 .text-entry").val(localStorage.getItem(9));
$("#10 .text-entry").val(localStorage.getItem(10));
$("#11 .text-entry").val(localStorage.getItem(11));
$("#12 .text-entry").val(localStorage.getItem(12));
$("#13 .text-entry").val(localStorage.getItem(13));
$("#14 .text-entry").val(localStorage.getItem(14));
$("#15 .text-entry").val(localStorage.getItem(15));
$("#16 .text-entry").val(localStorage.getItem(16));
$("#17 .text-entry").val(localStorage.getItem(17));

// function change row element background colors 
function setColor(element, color) {
    element.style.backgroundColor = color;
}
})