const {User, Employee, Requests, Approval} = require('./models/index');
const prompt = require('prompt-sync')({sigint: true});
const reques = require('./requests');


const usernam = prompt("Email: ");
const passwor = prompt("Password: ");


User.findOne({
    where: {
        username: usernam,
        password: passwor
    },
    include: [
        {
            model: Employee,
            required: true,
            include: [
                {
                    model: Requests,
                    include: [
                        {
                        model: Approval
                    }
                    ]
                }
            ]
        }
    ]
})
.then((result) => {
    if (result) {
        return result;
    }
    
    throw new Error('Employee does not exist');
})
.then((req) => {
    const dateFrom = reques.requestDateFrom()
    const dateTo = reques.requestDateTo()
    return req.Employee.createRequest(
        {
            dateFrom: dateFrom,
            dateTo: dateTo,
            days: reques.days(dateTo, dateFrom)
        }
    )
})
.then((approval) => {
    return approval.createApproval()
})
.catch(err => {
    console.log(err);
})


