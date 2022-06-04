// load index and css
$(document).ready(function () {

// var for date format Day, Month, date 
var todaysDate = moment().format('dddd, MMMM Do');
// add todaysDate to html header 
$("#currentDay").html(todaysDate);

var rows = document.getElementsByClassName("row");
var currentHour = parseInt(moment().format('H'));
Array.from(rows).forEach(row => {
    var rowIdString = row.id, 
    rowHour;
    if (rowIdString) {
        rowHour = parseInt(rowIdString);
    }
    if (rowHour) {
        // compares row id to current hour and sets color
        if (currentHour === rowHour) {
           setColor(row, "#ff6961");
        } else if ((currentHour < rowHour)) {
            setColor(row, "#77dd77");
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
;})

function setColor(element, color) {
    element.style.backgroundColor = color;
}
})