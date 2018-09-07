const express = require('express'),
      router = express.Router();

  router.get('/', function(req, res, next) {
    req.courseTypes.findByParent(null, (err, courses) => {
      if (err) next(err);
      
      res.render('index', { title: 'Нейрониум', courses });
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

  
module.exports = router;
