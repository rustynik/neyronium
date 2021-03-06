const express = require('express'),
      router = express.Router();

router.get('/:courseId', function(req, res, next) {
    req.courses.findById(req.params.courseId, (err, course) => {
        if (err) next(err);
        if (!course) next("Что-то пошло не так");

        res.render('apply', { course, title: course.title });
    })
    
});

router.post('/:courseId', async (req, res, next) => {
    
    const course = await req.courses.findById1(req.params.courseId).catch(next);
    
    if (!course) return next("Что-то пошло не так");

    const model = req.body;

    await req.services.log("request", {
        ip: req.ip,
        model,
        course
    }).catch(next);

    req.services.notify({
            model,
            course
        });

    res.render('apply_complete', { title: "Заявка отправлена", courseName: course.title });
}); 

module.exports = router;