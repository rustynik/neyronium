const express = require('express'),
      router = express.Router();

  router.get('/:courseTypeId', async function(req, res, next) {
    const type = req.params.courseTypeId;
    
    req.courseTypes.findById(type, async function (err, courseType) {
      if (err) return next(err);
      
      if (!courseType) {
        next({ message: `Course type ${ type } not found.`, status: 404 });
      }

      const data = await req.courseTypes.findByParent(type).catch(next);
      
      res.render('courses', { 
        title: courseType.title, 
        description: courseType.description || "", 
        contents: courseType.contents || "",
        data: data });
      
    });

  });

  
module.exports = router;