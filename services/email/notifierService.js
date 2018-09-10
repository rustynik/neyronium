const create = (mailer, templates) => {
    
    async function notify(data) {

        return Promise.all(templates.map(
            template => {
                const email = {
                    to: template.address(data),
                    subject: template.subject(data),
                    text: template.text && template.text(data),
                    html: template.html && template.html(data)
                };
        
                return mailer.sendEmail(email);
            }));
        }

    return {
        notify
    };
}

module.exports = {
    create
}