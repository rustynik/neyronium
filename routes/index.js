const express = require('express'),
      router = express.Router(),
      expect = require('chai').expect;

const routerFactory = (courseTypes) => {
  expect(courseTypes, "Отсутствует репозиторий типов курсов").to.exist;

  router.get('/', function(req, res, next) {
    courseTypes.findByParent(null, (err, courses) => {
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

  router.get('/about', function(req, res, next) {
      res.render('about', { title: "Обо мне" });
  });

  router.get('/contacts', function(req, res, next) {
      res.render('contacts', { title: "Контакты" });
  });

  router.get('/blog', function(req, res, next) {
      res.render('blog', { title: "Блог" });
  });

  return router;
};

module.exports = routerFactory;
