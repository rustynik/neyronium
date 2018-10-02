// TODO: inject
// TODO: divide into server settings, addresses 

const EMAIL_SETTINGS = {
        
    host: 'mail.name.com',
    port: 465,
    from: 'info@neyronium.pro',
    secure: true, // true for 465, false for other ports
    auth: {
        user: "info@neyronium.pro", // generated ethereal user
        pass: "show_MUST_2019" // generated ethereal password
    },
    admin: 'andrei.nikolaew@gmail.com'
};

const Notifier = require("./notifierService"),
    Mailer = require("./mailer"),
    templateForAdmin = require("./notification-templates/new-order-notification_to_admin")(EMAIL_SETTINGS),
    templateForUser = require("./notification-templates/new-order-notification_to_user")(EMAIL_SETTINGS);


const notifier = Notifier.create(Mailer.create(EMAIL_SETTINGS), [ templateForAdmin, templateForUser ]);

process.on("message", async (message) => {
    await notifier.notify(message);
});