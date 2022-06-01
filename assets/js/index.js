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
           setColor(row, "red");
        } else if ((currentHour < rowHour) && (currentHour > rowHour - 6)) {
            setColor(row, "green");
        } else if ((currentHour > rowHour) && (currentHour < rowHour + 6)) {
            setColor(row, "lightgrey");
        } else {
            setColor(row, "white");
        }
    }
});

function setColor(element, color) {
    element.style.backgroundColor = color;
}