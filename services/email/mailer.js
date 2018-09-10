const nodemailer = require('nodemailer');

function create(emailSettings) {

    return {
        sendEmail: async (email) => {
            const transporter = nodemailer.createTransport(emailSettings);
            
            return transporter.sendMail(Object.assign(email, {
                from: emailSettings.from
            })).catch(console.log);
        }
    };

}
    
module.exports = {
    create
};