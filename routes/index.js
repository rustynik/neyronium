const express = require('express'),
      router = express.Router(),
      expect = require('chai').expect;

const routerFactory = (courseTypes) => {
  expect(courseTypes, "Отсутствует репозиторий типов курсов").to.exist;

  router.get('/', function(req, res, next) {
    courseTypes.findAll((err, courses) => {
      if (err) next(err);
      res.render('index', { title: 'Домашняя страница', courses });
    })
  });

  return router;
};

module.exports = routerFactory;
