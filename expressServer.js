const differenceInTime = function(dateTo, dateFrom) {
    const difference = dateTo.getTime() - dateFrom.getTime()
    return difference;
}
const calculateDays = function(dateTo, dateFrom) {
    const day = differenceInTime(dateTo, dateFrom) / (1000 * 3600 * 24)
    return day;
}

const express = require('express');
const {User, Employee, Requests, Approval} = require('./models/index');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post('/sign-up', (request, response) => {
    const {email, password, name, lastName, birthday, position} = request.body;
    
    const user = {username: email, password};

    User.create(user)
        .then((createdUser) => {
            const employee = {
                name,
                lastName,
                birthday,
                position
            };

            
            createdUser.createEmployee(employee)
            .then(result => {
                response.status(200).json({message: 'User successfully created', User: result});
            })
        })
        .catch(err => {
            response.status(400).send(err.message);
        })
})

app.post('/make-request', (request, response) => {
    const {requestDateFrom, requestDateTo, username, password} = request.body;
    const dateFrom = new Date(requestDateFrom)
    const dateTo = new Date(requestDateTo)
    
    const days = calculateDays(dateTo, dateFrom);
    const databaseRequest = {dateFrom, dateTo, days};

    User.findOne({
        where: {
            username,
            password
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
            return result.Employee.createRequest(databaseRequest);
        }
        
        throw new Error('Employee does not exist');
    })
    .then((approval) => {
        approval.createApproval()
        response.status(200).json({message: 'Request successfully created'});
    })
    .catch(err => {
        response.status(400).send(err.message);
    })
})


app.post('/approval', (request, response) => {
    
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000....')
});






