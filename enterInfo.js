// const prompt = require('prompt-sync')({sigint: true})
// const signUp = require('./signUp')



// const name = prompt("Name: ");
// const lastName = prompt("Last name: ");
// const birthday = prompt("Birthday: ");
// const position = prompt("Position: ");
// const holiday = prompt("Holiday: ");

// const enterInfo = function() {
//     const name = prompt("Name: ");
//     const lastName = prompt("Last name: ");
//     const birthday = prompt("Birthday: ");
//     const position = prompt("Position: ");
//     const holiday = prompt("Holiday: ");
//     const info = new klasa.Employee(1, name, lastName, birthday, position, holiday)
//     console.log(info)
// }

const prompt = require('prompt-sync')({sigint: true})

const employeeName = function() {
    const name = prompt("Name: ");
    return name
}

// customerName()
const employeeLastName = function() {
    const lastName = prompt("Last Name: ")
    return lastName
}

const employeeBirthday = function() {
    const birthday = prompt("Birthday: ")
    return birthday
}

const employeePosition = function() {
    const position = prompt("Position: ")
    return position
}

module.exports = { employeeName, employeeLastName, employeeBirthday, employeePosition };

// module.exports = enterInfo