const express = require('express'),
      router = express.Router();

router.get('/:courseId',  function(req, res, next) {
    req.courses.findById(req.params.courseId, async (err, course) => {
        if (err) return next(err);
        if (!course) return next({ status: 404, message: `course ${ req.params.courseId } not found`});
        const courseType = await req.courseTypes.findById1(course.typeId).catch(next);
        res.render('details', { courseType, course, title: course.title });
    })    
});

module.exports = router;