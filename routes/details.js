const express = require('express'),
      router = express.Router();

router.get('/:courseId', function(req, res, next) {
    req.courses.findById(req.params.courseId, (err, course) => {
        if (err) next(err);
        if (!course) next({ status: 404, message: `course ${ req.params.courseId } not found`});

        res.render('details', { course, title: course.title });
    })    
});

module.exports = router;