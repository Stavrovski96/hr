const prompt = require('prompt-sync')({sigint: true});

const approve = function() {
    const requestApprove = prompt("Would you accept this request? ");
    return requestApprove
};

module.exports = approve;
// const approve = new klasa.Approval(undefined, undefined, requestApprove);
// console.log(approve);ss  