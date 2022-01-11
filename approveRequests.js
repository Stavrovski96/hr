const {User, Employee, Requests, Approval} = require('./models/index');
const {Op} = require("sequelize");
const prompt = require('prompt-sync')({sigint: true})


Approval.findAll({
    where: {
        approved: {
            [Op.is]: null
        }
    },
    include: [
        {
            model: Requests,
            required: true,
            include: [
                {
                    model: Employee,
                    required: true
                }
            ]
        }
    ]
})
    .then((result) => {
        for (let i = 0; i < result.length; i++) {
            console.log(
                result[i].Request.Employee.name, 
                result[i].Request.Employee.lastName,
                result[i].Request.dateFrom,
                result[i].Request.dateTo 
            )
            const requestApproval = prompt('Would you approve this request? ')
            console.log(requestApproval)
            if(requestApproval === "true") {
                Approval.update(
                    { approved: true },
                    { where: {id: result[i].id}},
                Employee.update(
                    { holiday: result[i].Request.Employee.holiday - result[i].Request.days},
                    { where: {id: result[i].Request.Employee.id}}
                )
                )
            } else if(requestApproval === "false") {
                Approval.update(
                    { approved: false },
                    { where: {id: result[i].id}}
                )
            } else {
                Approval.update(
                    { approved: null },
                    { where: {id: result[i].id}}
                )
            }
        }
    })