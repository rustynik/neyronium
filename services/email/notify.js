const   fork = require('child_process').fork,
        child = fork('./services/email/notifier-process');

module.exports = (data) => {
    child.send(
        data 
    );
};