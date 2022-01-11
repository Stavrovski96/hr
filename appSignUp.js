const sequelize = require('./models/index');
const db = require('./models/index');
const employees = require('./enterInfo');
const users = require('./signUp');


db.sequelize
    .sync({force:true})
    .then((userr) => {
        return sequelize.User.create(
            {
                username: users.employeeUsername(),
                password: users.employeePassword()
            }
        )
    })
    .catch(err => {
        console.log(err);
    })
    .then((result) => {
        return result.createEmployee(
            {
                name: employees.employeeName(), 
                lastName: employees.employeeLastName(), 
                birthday: employees.employeeBirthday(), 
                position: employees.employeePosition(),
        })
    })