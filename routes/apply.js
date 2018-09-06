const express = require('express'),
      router = express.Router();

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

        res.render('apply_complete', { courseName: req.body.courseName });
    })
    
});

// TODO: POST

module.exports = router;