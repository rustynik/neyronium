const express = require('express'),
      router = express.Router();

  router.get('/:courseTypeId', function(req, res, next) {
    const type = req.params.courseTypeId;
    req.courseTypes.findById(type, (err, courseType) => {
      if (err) next(err);
      
      if (!courseType) {
        next({ message: `Course type ${ type } not found.`, status: 404 });
      }

      req.courseTypes.findByParent(type, (err, data) => {
        if (err) {
          console.error(err);
          next(err);
        }
        console.log(data)
        res.render('courses', { title: courseType.title, description: courseType.description || "", data: data });
      });

    });

  });

  
module.exports = router;