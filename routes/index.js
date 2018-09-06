const express = require('express'),
      router = express.Router(),
      expect = require('chai').expect;

const routerFactory = (courseTypes) => {
  expect(courseTypes, "Отсутствует репозиторий типов курсов").to.exist;

  router.get('/', function(req, res, next) {
    courseTypes.findAll((err, courses) => {
      if (err) next(err);
      function getColor() {
        const counter = 0;
        const colors = [ "red", "green", "yellow", "blue"];
        return () => {
          if (counter == colors.length) counter = 0;
          return colors[counter++];
        }
      }
      res.render('index', { title: 'Домашняя страница', courses, getColor: getColor() });
    })
  });

  return router;
};

module.exports = routerFactory;
