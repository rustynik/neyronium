// TODO: inject
// TODO: divide into server settings, addresses 

const EMAIL_SETTINGS = {
        
    host: 'smtp.gmail.com',
    port: 465,
    from: 'andrei.nikolaew@gmail.com',
    secure: true, // true for 465, false for other ports
    auth: {
        user: "andrei.nikolaew@gmail.com", // generated ethereal user
        pass: "CallaMaranatha2018" // generated ethereal password
    },
    admin: 'vaisvanarius@mail.ru'
};

const Notifier = require("./notifierService"),
    Mailer = require("./mailer"),
    templateForAdmin = require("./notification-templates/new-order-notification_to_admin")(EMAIL_SETTINGS),
    templateForUser = require("./notification-templates/new-order-notification_to_user")(EMAIL_SETTINGS);


const notifier = Notifier.create(Mailer.create(EMAIL_SETTINGS), [ templateForAdmin, templateForUser ]);

process.on("message", async (message) => {
    await notifier.notify(message);
});