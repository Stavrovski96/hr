const prompt = require('prompt-sync')({sigint: true})

// const date = Date();
// let dateFrom = new Date(prompt("When do you want your holiday to start? "))
// let dateTo = new Date(prompt("When do you want your holiday to end? "))

// let DifferenceInTime = dateTo.getTime() - dateFrom.getTime();
// let days = DifferenceInTime / (1000 * 3600 * 24);
// console.log(days)

// const request = new klasa.Requests(1, date, 1, 2, dateFrom, dateTo, days)
// console.log(request);

const requestDateFrom = function() {
    const dateFrom = new Date(prompt("When do you want your holiday to start? "))
    return dateFrom
}

const requestDateTo = function() {
    const dateTo = new Date(prompt("When do you want your holiday to end? "))
    return dateTo
}

// const dateFrom = new Date(prompt("When do you want your holiday to start? "))
// const dateTo = new Date(prompt("When do you want your holiday to end? "))

let DifferenceInTime = function(dateTo, dateFrom) {
    const difference  = dateTo.getTime() - dateFrom.getTime()
    return difference;
}
let days = function(dateTo, dateFrom) {
    const day = DifferenceInTime(dateTo, dateFrom) / (1000 * 3600 * 24)
    return day;
}
// console.log(days)

module.exports = {requestDateFrom, requestDateTo, days}

// let seconds = DifferenceInTime / (1000)

// let hours = seconds / (3600)

// let days = hours / (24)




  
// var date1 = new Date("06/30/2019");
// var date2 = new Date("07/30/2019");
  
// To calculate the time difference of two dates
// var Difference_In_Time = date2.getTime() - date1.getTime();
  
// To calculate the no. of days between two dates
// var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

// console.log(Difference_In_Days);
