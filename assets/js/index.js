// var for date format Day, Month, date 
var todaysDate = moment().format('dddd, MMMM Do');
// add todaysDate to html header 
$("#currentDay").html(todaysDate);