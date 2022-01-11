const prompt = require('prompt-sync')({sigint: true});
// const klasa = require('./klasi');
// const enterInfo = require('./enterInfo');

// const operation = prompt("Enter a valid operation: ");

// const username = prompt("Enter your username: ");
// const password = prompt("Enter your password: ");

// const user = new klasa.User(1, 1, username, password)
// console.log(user)

// enterInfo()

// module.exports = { user }

const employeeUsername = function() {
    const username = prompt("Email: ");
    return username
}

const employeePassword = function() {
    const password = prompt("Password: ");
    return password
}


module.exports = { employeeUsername, employeePassword };
