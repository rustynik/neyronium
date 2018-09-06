const express = require('express'),
      router = express.Router(),
      expect = require('chai').expect;

const coursesRouterFactory = (coursesTypes, courses) => {

  expect(coursesTypes, "Нет репозитория типов курсов").to.exist;
  expect(courses, "Нет репозитория курсов").to.exist;

  router.get('/:courseTypeId', function(req, res, next) {
    const type = req.params.courseTypeId;
    coursesTypes.findById(type, (err, courseType) => {
      if (err || !courseType) next(err);
 
      coursesTypes.findByParent(type, (err, data) => {
        if (err) next(err);
        console.log(data)
        res.render('courses', { title: courseType.title, data: data });
      });

    });

  });

  return router;
};

module.exports = coursesRouterFactory;