const express = require('express'),
      router = express.Router(),
      nodemailer = require('nodemailer');

router.get('/:courseId', function(req, res, next) {
    req.courses.findById(req.params.courseId, (err, course) => {
        if (err) next(err);
        if (!course) next("Что-то пошло не так");

        res.render('apply', { course });
    })
    
});

router.post('/:courseId', function(req, res, next) {
    req.courses.findById(req.params.courseId, (err, course) => {
        if (err) next(err);
        if (!course) next("Что-то пошло не так");
        
        nodemailer.createTestAccount((err, account) => {
            // create reusable transporter object using the default SMTP transport
            let transporter = nodemailer.createTransport({
                host: 'smtp.mail.ru',
                port: 465,
                secure: true, // true for 465, false for other ports
                auth: {
                    user: "vaisvanarius", // generated ethereal user
                    pass: "maureau2018" // generated ethereal password
                }
            });

            // setup email data with unicode symbols
            let mailOptions = {
                from: 'vaisvanarius@mail.ru', // sender address
                to: 'andrei.nikolaew@gmail.com', // list of receivers
                subject: 'Hello', // Subject line
                text: 'Hello world?', // plain text body
                html: '<b>Hello world?</b>' // html body
            };

            // send mail with defined transport object
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error);
                }
                console.log('Message sent: %s', info.messageId);
                // Preview only available when sending through an Ethereal account
                console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

                res.render('apply_complete', { courseName: req.body.courseName });
        
                // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
                // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
            });
        });
    });
});

    

// TODO: POST

module.exports = router;