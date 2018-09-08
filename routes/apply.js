const express = require('express'),
      router = express.Router(),
      nodemailer = require('nodemailer');

router.get('/:courseId', function(req, res, next) {
    req.courses.findById(req.params.courseId, (err, course) => {
        if (err) next(err);
        if (!course) next("Что-то пошло не так");

        res.render('apply', { course, title: course.title });
    })
    
});

router.post('/:courseId', function(req, res, next) {
    req.courses.findById(req.params.courseId, (err, course) => {
        if (err) next(err);
        if (!course) next("Что-то пошло не так");
        
        nodemailer.createTestAccount((err, account) => {
            // create reusable transporter object using the default SMTP transport
            let transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 465,
                secure: true, // true for 465, false for other ports
                auth: {
                    user: "andrei.nikolaew@gmail.com", // generated ethereal user
                    pass: "CallaMaranatha2018" // generated ethereal password
                }
            });

            function makeText() {
                return `С сайта neyronium.pro Поступила заявка на продукт ${ course.title } (${ new Date().toLocaleString() })
                от пользователя ${ req.body.name } (${ req.body.email }, ${ req.body.phone }). 
                Дополнительная информация: возраст ребенка ${ req.body.age || "не указано" },
                комментарий: ${ req.body.comment || "отсутствует "}.`;
            }
            // setup email data with unicode symbols
            let mailOptions = {
                from: 'andrei.nikolaew@gmail.com', // sender address
                to: 'SunnSunn@mail.ru, vaisvanarius@mail.ru', // list of receivers
                subject: `Заявка на продукт ${ course.title }`, // Subject line
                text: makeText()
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