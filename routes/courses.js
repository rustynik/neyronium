const express = require('express'),
      router = express.Router(),
      expect = require('chai').expect;

const coursesRouterFactory = (coursesTypes, courses) => {

  expect(coursesTypes, "Нет репозитория типов курсов").to.exist;
  expect(courses, "Нет репозитория курсов").to.exist;

  router.get('/:courseTypeId', function(req, res, next) {
    const type = req.params.courseTypeId;
    coursesTypes.findById(type, (err, courseType) => {
      if (err) {
        console.error(err);
        next(err);
      }

      if (!courseType) {
        next({ message: `Course type ${ type } not found.`, status: 404 });
      }

      coursesTypes.findByParent(type, (err, data) => {
        if (err) {
          console.error(err);
          next(err);
        }
        console.log(data)
        res.render('courses', { title: courseType.title, description: courseType.description || "", data: data });
      });

    });

  });

  return router;
};

module.exports = coursesRouterFactory;